<!-- ChatComponent.vue -->
<template>
    <div class="chat-container">
      <div class="chat-title">
        <h4>Conversación WhatsApp</h4>
      </div>
      <div class="chat-messages">
        <div v-for="(mensaje, index) in conversaciones" :key="index" class="mensaje">
          <div class="text">
            <div class="remitente">
            <strong>{{ mensaje.remitente }}</strong>
          </div>
          <div class="msm">
            {{ mensaje.mensaje }}
          </div>
          </div>
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
    height: 700px; 
    overflow-y: auto; 
  }

  .chat-title {
    padding-left: 40px;
    padding-top: 30px;
    padding-bottom: 5;
  }
  
  .chat-messages {
    overflow-y: auto; /* Agrega un desplazamiento vertical */
    border: 0px solid rgb(0, 0, 0);
    padding: 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  
  .profile {
    background-color:#78b682;
    color: #87D394;
    width: 15px;
    height: 15px;
    border-radius: 30px;
  }

  .text {
    display: flex;
    flex-direction: column;
  }

  .msm {
    
  }
  .mensaje {
    width:fit-content;
    margin-bottom: 10px;
    border-radius: 16px;
    padding: 15px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: row;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
    background-color: rgb(178, 226, 101);
   }
  </style>
  