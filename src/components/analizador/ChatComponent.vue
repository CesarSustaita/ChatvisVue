<!-- ChatComponent.vue -->
<template>
    <div class="chat-container">
      <div class="chat-messages">
        <div v-for="(mensaje, index) in conversaciones" :key="index" class="mensaje">
          <strong>{{ mensaje.remitente }}:</strong> {{ mensaje.mensaje }}
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, watchEffect } from 'vue';
  import { store } from '../store';
  
  const conversaciones = ref(store.conversaciones);
  
  watchEffect(() => {
    conversaciones.value = store.conversaciones;
  });
  </script>
  
  <style scoped>
  .chat-container {
    height: 600px; /* Ajusta la altura según tus necesidades */
    overflow-y: auto; /* Agrega un desplazamiento vertical cuando sea necesario */
  }
  
  .chat-messages {
    /* Puedes agregar estilos adicionales según tus necesidades */
  }
  
  .mensaje {
    margin-bottom: 10px;
    /* Puedes agregar estilos adicionales según tus necesidades */
  }
  </style>
  