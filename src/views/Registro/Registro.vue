<script setup>
import { ref, watchEffect } from 'vue'
import { useRouter } from 'vue-router'
import { DefaultLayout } from '@/layouts'
import { register } from '@/components/register'
import axios from 'axios'
const user = ref(register)
const router = useRouter()

const REGISTER_STEPS = 4
const currentStep = ref(1)

const nextStep = () => {
  // console.log(user)
  if (currentStep.value < REGISTER_STEPS) {
    currentStep.value++
  }
}

const prevStep = () => {
  if (currentStep.value >= 1) {
    currentStep.value--
  }
}

// Detect changes from currentStep, as it is a reactive property.
// https://vuejs.org/guide/essentials/watchers.html
// If currentStep is greater than 1, redirect to that register step.
// If currentStep is 0, redirect to home.
watchEffect(() => {
  if (currentStep.value >= 1) {
    router.push(`/registro/${currentStep.value}`)
    return
  }
  router.push('/')
})

const registrar = () => {
  // console.log(user.value)
  //manda a llamar la funcion para guardar el regitro
  alert('Registro exitoso')
  registrarUsers()
  // Si todo sale bien.
  router.push('/lector')
}

const registrarUsers = async () => {
  try {
    const response = await axios.post('http://localhost:8000/api/user', user.value)
    user.value.admin = response.data.admin
    user.value.num_uso = response.data.num_uso
    user.value._id = response.data._id
  } catch (error) {
    console.error('Error en el inicio de sesión:', error)
  }
}
</script>

<template>
  <DefaultLayout>
    <div class="container">
      <div class="encabezados">
        <div class="back">
          <h3 @click="prevStep" class="return-btn">
            <i class="fa-solid fa-chevron-left" style="color: #000000"></i>
            {{ currentStep > 1 ? 'Regresar' : 'Inicio' }}
          </h3>
        </div>
        <div class="title">
          <h3>Registro de cuenta</h3>
        </div>
        <div class="next">
          <h3>Siguiente <i class="fa-solid fa-chevron-right" style="color: #ffffff"></i></h3>
        </div>
      </div>

      <div class="inicio">
        <div class="avance">
          <div
            v-for="n in REGISTER_STEPS"
            :key="n"
            :class="['recuadro', currentStep >= n ? 'recuadro-coloreado' : 'recuadro-futuro']"
          />
        </div>

        <RouterView />

        <button
          type="button"
          class="btn btn-outline-dark"
          @click="nextStep"
          v-if="currentStep < REGISTER_STEPS"
        >
          Continuar
        </button>
        <button type="submit" class="btn btn-outline-dark" @click="registrar" v-else>
          Registrar
        </button>
      </div>
      <div class="cuenta">
        ¿Ya tienes una cuenta? <RouterLink to="/inicio"> Inicia Sesión</RouterLink>
      </div>
    </div>
  </DefaultLayout>
</template>

<style scoped>
.return-btn {
  cursor: pointer;
}

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
    width: 350px;
  }

  .btn {
    width: 350px;
  }

  .next {
    color: white;
  }

  .avance {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 0.25rem;
    width: 100%;
    height: 10px;
    margin-top: 10px;
    margin-bottom: 25px;
  }
  .recuadro {
    flex: 1;
    border-radius: 4px;
  }
  .recuadro-futuro {
    background-color: rgb(186, 186, 186);
  }
  .recuadro-coloreado {
    background-color: rgb(54, 54, 54);
  }
}
</style>
