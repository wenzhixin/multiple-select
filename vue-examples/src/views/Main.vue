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
            v-html="data.description"
          />
        </div>
        <div class="col-md-5">
          <transition name="fade">
            <Ads v-if="!hideAds" />
          </transition>
        </div>
      </div>
    </div>

    <div>
      <div v-if="!isSource">
        <component :is="componentLoader" />
      </div>
      <pre v-else><code class="html">{{ componentSource }}</code></pre>
    </div>
  </div>
</template>

<script setup>
import hljs from 'highlight.js/lib/core'
import xml from 'highlight.js/lib/languages/xml'
import 'highlight.js/styles/default.css'
import registry from '@/registry'
import Ads from '@/components/Ads'
import MS from '@/assets/MS'
import { useRoute } from 'vue-router'

import { defineAsyncComponent, ref, computed, onMounted, nextTick, watch } from 'vue'

const hideAds = ref(false)
const props = defineProps({
  current: {
    type: String,
    default: ''
  }
})
const route = useRoute()
const isSource = computed(() => {
  return route.name === 'view-source'
})

const getComponent = () => {
  const name = props.current.replace(/^(\w)|-(\w)/g, ($0, $1, $2) => {
    return $1 && $1.toUpperCase() || $2 && $2.toUpperCase()
  })
  return registry.components.find(it => it.name === name)
}

const componentLoader = computed(() => {
  const c = getComponent()
  return c && defineAsyncComponent({
    loader: c.component
  })
})

const componentSourceLoader = computed(() => {
  const c = getComponent()
  return c && c.source()
})
const componentSource = ref('')

watch([componentSourceLoader], () => {
  componentSourceLoader.value.then(data => {
    componentSource.value = data
  })
})

const data = computed(() => {
  const list = []
  for (const row of MS) {
    list.push(...row.list)
  }
  const data = list.find(it => it.url === props.current + '.html')
  data.description = data.description.replace(/\\'/g, '\'')
  return data
})

const updateAds = () => {
  hideAds.value = true
  setTimeout(() => {
    hideAds.value = false
  }, 500)
}

const updateHighlight = () => {
  nextTick(() => {
    document.querySelectorAll('pre code').forEach(el => {
      hljs.highlightElement(el)
    })
  })
}

watch(props.current, () => {
  updateAds()
})
watch(isSource, () => {
  updateAds()
  updateHighlight()
})

onMounted(() => {
  hljs.registerLanguage('xml', xml)
  updateHighlight()
})
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
