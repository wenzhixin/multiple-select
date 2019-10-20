<template>
  <div class="template-body">
    <div class="bs-docs-header">
      <div class="row">
        <div class="col-md-7 title-desc">
          <h1 class="bd-title">
            <span>
              {{ data.title }}
            </span>
          </h1>
          <p
            class="bd-lead"
            v-html="data.desc"
          />
        </div>
        <div class="col-md-5">
          <transition name="fade">
            <Codefund v-if="!hideCodefund" />
          </transition>
        </div>
      </div>
    </div>

    <div>
      <div v-if="!isSource">
        <component :is="componentLoader" />
      </div>
      <highlight-code
        v-else
        lang="vue"
      >
        {{ componentSource }}
      </highlight-code>
    </div>
  </div>
</template>

<script>
import registry from '@/registry'
import Codefund from './Codefund'

export default {
  components: {
    Codefund
  },
  props: {
    current: {
      type: String,
      default: ''
    },
    isSource: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      hideCodefund: false
    }
  },
  computed: {
    component () {
      return registry.components.find(it => it.name === this.current)
    },
    componentLoader () {
      return this.component && this.component.default
    },
    componentSource () {
      return this.component && this.component.source.default
    },
    data () {
      return this.componentLoader.data()
    }
  },
  watch: {
    current () {
      this.updateCodefund()
    },
    isSource () {
      this.updateCodefund()
    }
  },
  methods: {
    updateCodefund () {
      this.hideCodefund = true
      setTimeout(() => {
        this.hideCodefund = false
      }, 500)
    }
  }
}
</script>

<style scoped>
.template-body {
  padding: 0 1rem!important;
  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
}

.bd-title {
  font-size: 3rem;
  margin-top: 2rem;
  margin-bottom: .5rem;
  font-weight: 300;
}

.title-desc {
  min-height: 162px;
}

.bd-lead {
  max-width: 100%;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
