<script setup>
import ChordDiagram from '../../components/analizador/ChordDiagram.vue';
import SemanticAnalizador from '../../components/analizador/SemanticAnalizador.vue';
import ChatComponent from '../../components/analizador/ChatComponent.vue';

</script>

<template>
        <div class="cont-superior">
            <div class="chord-diagram">
            <ChordDiagram/>
            </div>
            <div class="chat">
                <ChatComponent/>
            </div>
        </div>
        <div class="analizador">
            <div class="grafica">
                <SemanticAnalizador />
            </div>
        </div>
</template>

<style scoped>

@media (min-width: 1500px) {
 
  .cont-superior {
    display: grid;
    grid-template-columns: 1fr  1fr;
    gap: 20px; 
  }
  .chord-diagram {
    background-color: white;
    border-radius: 10px;
  }

  .chat {
    background-color: white;
    border-radius: 10px;
  }

  .analizador {
    background-color: white;
    display: grid;
    grid-template-columns: 100%;
    border-radius: 10px;
  }
}

@media (min-width: 100px) and (max-width: 1500px) {

  .full-screen-container {
  display: grid;
  grid-template-rows: 1fr  1fr;
  gap: 20px;
  padding: 30px;
  width: 100%;
  height: 100vh; /* 100% de la altura de la ventana gráfica */
  background-color: #F5F6FA; /* Color de fondo, ajusta según tus necesidades */
  }

  .cont-superior {
    display: grid;
    grid-template-columns: 1fr ;
    gap: 20px; 
  }
  .chord-diagram {
    background-color: white;
    border-radius: 10px;
  }

  .chat {
    background-color: white;
    border-radius: 10px;
  }

  .analizador {
    background-color: white;
    display: grid;
    grid-template-columns: 100%;
    border-radius: 10px;
  }
}
</style>