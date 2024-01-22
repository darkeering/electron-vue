
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Remind from './remind.vue'

const app = createApp(Remind)

app.use(createPinia())

app.mount('#app')
