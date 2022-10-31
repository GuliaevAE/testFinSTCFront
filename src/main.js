import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'
import BootstrapVue3 from 'bootstrap-vue-3';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css';
import axios from 'axios'
import VueAxios from 'vue-axios'
import { BootstrapVueIcons } from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue-icons.min.css'
createApp(App).use(VueAxios, axios).use(BootstrapVue3).use(BootstrapVueIcons).mount('#app')
