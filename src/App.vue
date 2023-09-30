<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/registro">Registro</RouterLink>
        <RouterLink to="/inicio">Iniciar Sesion</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
.wrapper {
  border: 1px solid rgb(196, 25, 25);
}
</style>