import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'
import axios from 'axios'
import VueAxios from 'vue-axios'

import {createPinia} from "pinia";
import { createApp } from 'vue'
import App from './App.vue'

createApp(App)
    .use(VueAxios, axios)
    .use(createPinia())
    .mount('#app')
