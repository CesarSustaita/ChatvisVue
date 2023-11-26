<script setup>
import {UserNavbar} from '@/components/navbar';
import ChatvisComponents from '@/components/analizador/ChatvisComponents.vue'

</script>

<template>
    <UserNavbar/>
    <div class="full-screen-container">
       <ChatvisComponents/>
    </div>
    
</template>

<style scoped>

.full-screen-container {
  display: grid;
  grid-template-rows: 1fr  1fr;
  gap: 20px;
  padding: 30px;
  width: 100%;
  height: 100vh; /* 100% de la altura de la ventana gráfica */
  background-color: #F5F6FA; /* Color de fondo, ajusta según tus necesidades */
  }

</style>

