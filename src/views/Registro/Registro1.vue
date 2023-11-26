<!-- se gregara un script con los elementos reactivos-->
<script>
import { store } from '../../components/register'
import { ref } from 'vue'
const user = ref(store)
export default {
  data() {
    return {
      user, // Para almacenar el valor del correo electrónico
      errors: [] // Para rastrear los errores de validación
    }
  },
  methods: {
    validateEmail() {
      // Expresión regular para validar el correo electrónico
      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/

      // Reiniciar la lista de errores
      this.errors = []

      // Validar si el campo de correo electrónico está vacío o no coincide con la expresión regular
      if (!user.value.email) {
        this.errors.push('El correo electrónico es obligatorio.')
      } else if (!emailRegex.test(user.value.email)) {
        this.errors.push('El correo electrónico ingresado no es válido.')
      }
    }
  }
}
</script>

<template>
  <form>
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Correo</label>
      <input
        type="email"
        class="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        v-model="user.email"
        @input="validateEmail"
      />
      <!-- Mostrar errores debajo del campo de entrada -->
      <div v-for="(error, index) in errors" :key="index" class="text-danger">{{ error }}</div>
    </div>

    <!-- Botón de "Continuar" deshabilitado si hay errores -->
    <!-- <RouterLink
      to="/registro2"
      type="button"
      class="btn btn-outline-dark"
      :disabled="errors.length > 0"
    >
      Continuar
    </RouterLink> -->
  </form>
</template>
