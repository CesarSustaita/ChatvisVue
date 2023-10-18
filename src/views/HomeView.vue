<script setup>
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <main>
    <TheWelcome />
    <div class="contenedor">
      <div class="texts">
        <div class="title">
          Analizador de datos
        </div>
        <div class="subtitle">
          ¡Descubre ChatVis, la solución revolucionaria para implementar análisis 
          semántico en tus conversaciones en archivos .txt! Con nuestra avanzada 
          tecnología, obtener información valiosa. Aumenta la precisión y eficiencia 
          de tus análisis con nuestra plataforma intuitiva y fácil de usar. Potencia 
          tu toma de decisiones, mejora tus estrategias y maximiza tus resultados.
        </div>
        <div class="boton">
          <RouterLink to="/registro" type="button" class="btn btn-outline-secondary">Registrarse</RouterLink>

        </div>
      </div>
      <div class="img">
      </div>
    </div>
  </main>
</template>

<style>
@media (min-width: 1500px) {
  .contenedor {
    padding: 45px;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .title {
    font-size: 118px;
    width: 550px;
    font-weight: bold;
    color: rgb(92, 92, 92);
    margin-bottom: 50px;
  }

  .subtitle {
    width: 670px;
    font-size: 20px;
  }

  .boton {
    margin-top: 50px;
  }

  .btn {
    font-size: 18px;
    width: 230px;
    color: white;
  }

  .btn-dark {
    color: white;
  }

  .img {
    background-image: url('/src/assets/img/imgindex.png');
    background-size:cover;
    background-position:center;
    background-repeat:no-repeat;
    width: 800px;
  }
}

@media (min-width: 100px) and (max-width: 1500px) {
  .contenedor {
    padding: 45px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }

  .title {
    font-size: 90px;
    width: 550px;
    font-weight: bold;
    color: rgb(92, 92, 92);
    margin-bottom: 50px;
  }

  .subtitle {
    width: 560px;
    font-size: 16px;
  }

  .boton {
    margin-top: 50px;
  }

  .btn {
    font-size: 18px;
    width: 230px;
    color: white;
  }

  .btn-dark {
    color: white;
  }

  .img {
    background-image: url('/src/assets/img/imgindex.png');
    background-size:cover;
    background-position:center;
    background-repeat:no-repeat;
    width: 600px;
  }
}

</style>
