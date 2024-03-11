import { createApp } from 'vue'
import App from './App.vue'
import './plugins/select'
import router from './router'

import MultipleSelect from 'multiple-select/src/vue/MultipleSelect.vue'

const app = createApp(App)

app.use(router)
app.component('MultipleSelect', MultipleSelect)
app.__VUE_PROD_DEVTOOLS__ = process.env.NODE_ENV === 'development'

app.mount('#app')
