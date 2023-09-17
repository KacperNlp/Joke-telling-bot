import { createApp } from 'vue';
import App from './App.vue';

//components
import AppButton from './components/AppButton.vue';
import AppIcon from './components/AppIcon.vue';

const app = createApp(App);

app.component('AppButton', AppButton)
    .component('AppIcon', AppIcon);

app.mount('#app');
