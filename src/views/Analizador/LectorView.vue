<script setup>
import FileReader from '/dev/chatvis/chatvis-front-vue/src/components/FileReader.vue'

</script>

<template>
    <div class="full-screen-container">
        <div class="container">
            <h2>Comencemos analizar tu archivo</h2>
            <FileReader />
        </div>
  </div>
    
</template>

<style scoped>
.full-screen-container {
  width: 100%;
  height: 100vh; /* 100% de la altura de la ventana gráfica */
  background-color: #F5F6FA; /* Color de fondo, ajusta según tus necesidades */
}

.container{
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}


</style>

