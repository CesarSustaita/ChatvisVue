<script setup>
import { store } from '../components/register'
import { ref } from 'vue'
const user = ref(store)
console.log(store)
import axios from 'axios'
const registrarUsers = () => {
  axios
    .post('http://localhost:8000/api/user/login', store)
    .then((res) => {
      console.log(res)
      // Maneja la respuesta del backend, por ejemplo, guarda el token
      // const token = res.data.token
      // Puedes hacer algo con el token, como almacenarlo en localStorage
      // localStorage.setItem('token', token)
    })
    .catch((error) => {
      console.error('Error en el inicio de sesión:', error)
    })
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
        <button type="button" class="btn btn-outline-dark">Registrar</button>
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
