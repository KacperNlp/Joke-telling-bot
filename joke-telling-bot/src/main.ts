import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';

//components
import AppButton from './components/AppButton.vue';

const app = createApp(App);

app.component('AppButton', AppButton);

app.mount('#app');
