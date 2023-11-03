import { createApp } from 'vue';
import { plugin, defaultConfig } from '@formkit/vue';
import config from './formkit.config.js'; // Importa la configuración de FormKit
import '@formkit/themes/genesis'; // Importa el tema "genesis"
import router from './router'

import App from './App.vue';
import FileReader from './components/FileReader.vue'; // Importa el componente FileReader
import ChordDiagram from './components/analizador/ChordDiagram.vue'; // Importa el componente ChordDiagram

const app = createApp(App);

app.component('FileReader', FileReader); // Registra el componente FileReader
app.component('ChordDiagram', ChordDiagram); // Registra el componente ChordDiagram

app
  .use(router)
  .use(plugin, defaultConfig(config)) // Configura FormKit con tu archivo de configuración
  .mount('#app');