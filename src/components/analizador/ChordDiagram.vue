<script setup>
import { inject, onMounted } from 'vue';

const mensajes = inject('mensajes');

onMounted(() => {
  if (mensajes) {
    console.log('Mensajes en ChordDiagram.vue:');
    mensajes.value.forEach((mensaje) => {
      console.log(`${mensaje.fecha} - ${mensaje.remitente}: ${mensaje.mensaje}`);
    });
  }
});
</script>

<template>
  <div>
    <div v-if="mensajes">
      <ul>
        <li v-for="(mensaje, index) in mensajes" :key="index">
          {{ mensaje.fecha }} - {{ mensaje.remitente }}: {{ mensaje.mensaje }}
        </li>
      </ul>
    </div>
    <div v-else>
      <p>Cargando datos...</p>
    </div>
  </div>
</template>


