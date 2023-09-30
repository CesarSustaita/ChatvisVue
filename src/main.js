import { createApp } from 'vue';
import { plugin, defaultConfig } from '@formkit/vue';
import config from './formkit.config.js'; // Importa la configuración de FormKit
import '@formkit/themes/genesis'; // Importa el tema "genesis"
import router from './router'

import App from './App.vue';

createApp(App)
  .use(router)
  .use(plugin, defaultConfig(config)) // Configura FormKit con tu archivo de configuración
  .mount('#app');
