<script setup>
import { store } from '../components/register'
import { useRouter } from 'vue-router'
import { storeU } from '../components/user'
import { ref } from 'vue'
import axios from 'axios'

const user = ref(store)
const users = ref(storeU)
console.log(store)
const router = useRouter()

const registrarUsers = async () => {
  try {
    const response = await axios.post('http://localhost:8000/api/user', user.value)
    console.log(response.data)
    asing(response, users)
    router.push({ name: 'lector' })
  } catch (error) {
    console.error('Error en el inicio de sesión:', error)
  }
}
function asing(response, users) {
  users.value.nombre = response.data.nombre
  users.value.apellido_paterno = response.data.apellido_paterno
  users.value.apellido_materno = response.data.apellido_materno
  users.value.estado = response.data.estado
  users.value.ciudad = response.data.ciudad
  users.value.universidad = response.data.universidad
  users.value.password = response.data.password
  users.value.email = response.data.email
  users.value.admin = response.data.admin
  users.value.num_uso = response.num_uso
}
</script>

<template>
  <div class="container">
    <div class="encabezados">
      <div class="back">
        <h3>
          <RouterLink to="/registro3">
            <i class="fa-solid fa-chevron-left" style="color: #000000"></i
          ></RouterLink>
          Regresar
        </h3>
      </div>
      <div class="title">
        <h3>Registro de cuenta</h3>
      </div>
      <div class="next">
        <h3><i class="fa-solid fa-chevron-right" style="color: #ffffff"></i></h3>
      </div>
    </div>

    <div class="avance">
      <div class="recuadro1"></div>
      <div class="recuadro2"></div>
      <div class="recuadro3"></div>
      <div class="recuadro4"></div>
    </div>

    <div class="inicio">
      <form @submit.prevent="registrarUsers">
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Universidad</label>
          <input
            type="text"
            class="form-control"
            aria-label="Username"
            aria-describedby="basic-addon1"
            v-model="user.universidad"
          />
        </div>
        <button type="submit" class="btn btn-outline-dark">Registrar</button>
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
    background-color: rgb(54, 54, 54);
    width: 80px;
    border-radius: 4px;
  }
  .recuadro3 {
    background-color: rgb(54, 54, 54);
    width: 80px;
    border-radius: 4px;
  }
  .recuadro4 {
    background-color: rgb(54, 54, 54);
    width: 80px;
    border-radius: 4px;
  }
}
</style>
