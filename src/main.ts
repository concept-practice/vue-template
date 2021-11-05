import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import '../node_modules/bulma';
import store from './store';

createApp(App).use(store).use(router).mount('#app');
