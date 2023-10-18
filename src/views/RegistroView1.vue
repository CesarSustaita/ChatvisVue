
<script>
export default {
  data() {
    return {
      email: '', // Para almacenar el valor del correo electrónico
      errors: [] // Para rastrear los errores de validación
    };
  },
  methods: {
    validateEmail() {
      // Expresión regular para validar el correo electrónico
      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

      // Reiniciar la lista de errores
      this.errors = [];

      // Validar si el campo de correo electrónico está vacío o no coincide con la expresión regular
      if (!this.email) {
        this.errors.push('El correo electrónico es obligatorio.');
      } else if (!emailRegex.test(this.email)) {
        this.errors.push('El correo electrónico ingresado no es válido.');
      }
    }
  }
};
</script>

<template>
  <div class="container">
    <div class="encabezados">
      <div class="back">
        <h3><RouterLink to="/"> <i class="fa-solid fa-chevron-left" style="color: #000000;"></i></RouterLink>  Regresar</h3>
      </div>
      <div class="title">
        <h3>Registro de cuenta</h3>
      </div>
      <div class="next">
        <h3> Siguiente <i class="fa-solid fa-chevron-right" style="color: #ffffff;"></i> </h3>
      </div>
    </div>

    <div class="avance">
      <div class="recuadro1"></div>
      <div class="recuadro2"></div>
      <div class="recuadro3"></div>
      <div class="recuadro4"></div>
    </div>
    <div class="inicio">
      <form>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Correo</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            v-model="email" 
            @input="validateEmail"
          >
          <!-- Mostrar errores debajo del campo de entrada -->
          <div v-for="(error, index) in errors" :key="index" class="text-danger">{{ error }}</div>
        </div>

        <!-- Botón de "Continuar" deshabilitado si hay errores -->
        <RouterLink
          to="/registro2"
          type="button"
          class="btn btn-dark"
          :disabled="errors.length > 0"
        >
          Continuar
        </RouterLink>

        <div class="cuenta">
          ¿Ya tienes una cuenta? <RouterLink to="/inicio" > Inicia Sesión</RouterLink>
        </div>
      </form>
    </div>
  </div>
</template>


<style>
@media (min-width: 1024px) {

  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border: 0px solid black;
    margin-top: 120px;
  }

  .encabezados {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    border: 0px solid black; 
  }

  .title {
    width: 350px;
    margin-bottom: 20px;
    align-items: center;
  }

  .inicio {
    border: 0px solid black;
    width: 350px;
  }

  .btn {
    width: 350px;
    color: white;
  }

  .btn-dark {
    color: white;
  }

  .next {
    color: white;
  }

  .avance {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 27%;
    height: 10px;
    margin-top: 10px;
    margin-bottom: 25px;
  }

  .recuadro1 {
    background-color: rgb(54, 54, 54);
    width: 80px; 
    border-radius: 4px;
  }
  .recuadro2 {
    background-color: rgb(194, 194, 194);
    width: 80px; 
    border-radius: 4px;

  }
  .recuadro3 {
    background-color: rgb(194, 194, 194);
    width: 80px; 
    border-radius: 4px;

  }
  .recuadro4 {
    background-color: rgb(194, 194, 194); 
    width: 80px; 
    border-radius: 4px;
  }

  .cuenta {
    margin-top: 15px;
    text-align: center;
  }
}
</style>
