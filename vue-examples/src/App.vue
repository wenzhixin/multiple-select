<template>
  <div class="docMainWrapper wrapper">
    <div class="docsNavContainer">
      <nav class="toc">
        <div class="toggleNav">
          <section class="navWrapper wrapper">
            <div class="navGroups">
              <div
                v-for="item in list"
                :key="item.name"
                class="navGroup"
              >
                <h3 class="navGroupCategoryTitle">
                  {{ item.name }}
                </h3>
                <ul>
                  <li
                    v-for="child of item.list"
                    :key="child.title"
                    :class="{navListItemActive: currentUrl === child.url}"
                    @click="onSelect(child)"
                  >
                    <a href="javascript:">
                      {{ child.title }}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </nav>
    </div>

    <div class="container mainContainer">
      <div class="corner-ribbon-wrapper">
        <a
          class="corner-ribbon"
          href="javascript:"
          :title="title"
          @click="toggle"
        >
          {{ title }}
        </a>
      </div>
      <router-view />
    </div>
  </div>
</template>

<script>
import MS from './assets/MS'

export default {
  name: 'App',
  data () {
    return {
      list: MS,
      isSource: this.$route.name === 'view-source'
    }
  },
  computed: {
    title () {
      return this.isSource ? 'View Example' : 'View Source'
    },
    currentUrl () {
      return this.$route.params.current + '.html'
    }
  },
  methods: {
    onSelect (item) {
      if (this.currentUrl === item.url) {
        return
      }
      this.$router.push('/' + item.url.replace('.html', ''))
      this.isSource = false
    },
    toggle () {
      this.isSource = !this.isSource
      this.$router.push('/' + this.$route.params.current +
        (this.isSource ? '/view-source' : ''))
    }
  }
}
</script>

<style>
.mainContainer {
  margin: 0;
  padding: 1rem 0;
  position: relative;
}

.corner-ribbon-wrapper {
  position: absolute;
  width: 120px;
  height: 120px;
  left: -24px;
  top: 0;
  overflow: hidden;
  z-index: 1;
}

.corner-ribbon {
  width: 200px;
  background: #2980b9;
  position: absolute;
  top: 25px;
  left: -55px;
  text-align: center;
  line-height: 28px;
  font-size: 13px;
  letter-spacing: 1px;
  color: #f0f0f0;
  text-decoration: none;
  box-shadow: 0 0 3px rgba(0,0,0,.3);
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
}

.corner-ribbon:hover {
  background: #0056b3;
  color: #f0f0f0;
  text-decoration: none;
}

.btn + .btn {
  margin-left: 10px;
}

.ms-drop li+li {
  margin-top: 0!important;
}
</style>
