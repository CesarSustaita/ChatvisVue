<script setup>
import NavbarAdmin from '../../components/NavbarAdmin.vue';
import ChatvisComponents from '../../components/analizador/ChatvisComponents.vue';
import UserTableComponent from '../../components/analizador/UserTableComponent.vue';
import { store } from '../../components/store';
</script>

<template>
    <NavbarAdmin />
  <div class="full-screen-container">
    <ChatvisComponents v-if="store.opcionSeleccionada === 'Analizador'"/>
    <UserTableComponent v-if="store.opcionSeleccionada === 'Usuarios'"/>
  </div>
    
</template>

<style scoped>

.full-screen-container {
  display: grid;
  grid-template-rows: 1fr  1fr;
  gap: 20px;
  padding: 30px;
  width: 100%;
  height: 100vh; 
  background-color: #F5F6FA; 
  }

</style>

