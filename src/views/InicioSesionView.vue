<script setup>
import axios from 'axios'
import { useRouter } from 'vue-router'
import { storeU } from '../components/user'
import { ref } from 'vue'
const login = ref(storeU)
const user = ref({
  email: [],
  password: []
})
const router = useRouter()
const loginUser = async () => {
  try {
    const response = await axios.post('http://localhost:8000/api/user/login', {
      email: user.value.email,
      password: user.value.password
    })
    console.log(response.data)
    asing(response, login)
    console.log(login)
    if (login.value.admin == 0) {
      router.push({ name: 'lector' }) //AQUI DEBE DE VALIDAR CUANDO ES UNO Y CUANDO ES EL OTRO ADMIN O USUARIO
    } else {
      router.push({ name: 'analizadorA' }) //AQUI DEBE DE VALIDAR CUANDO ES UNO Y CUANDO ES EL OTRO ADMIN O USUARIO
    }
    // router.push({ name: 'lector' }) //AQUI DEBE DE VALIDAR CUANDO ES UNO Y CUANDO ES EL OTRO ADMIN O USUARIO
  } catch (error) {
    console.error('Error en el inicio de sesión:', error)
  }
}

function asing(response, login) {
  login.value.nombre = response.data.nombre
  login.value.apellido_paterno = response.data.apellido_paterno
  login.value.apellido_materno = response.data.apellido_materno
  login.value.estado = response.data.estado
  login.value.ciudad = response.data.ciudad
  login.value.universidad = response.data.universidad
  login.value.password = response.data.password
  login.value.email = response.data.email
  login.value.admin = response.data.admin
  login.value.num_uso = response.num_uso
}
</script>

<template>
  <div class="container">
    <div class="encabezados">
      <div class="back">
        <h3>
          <RouterLink to="/">
            <i class="fa-solid fa-chevron-left" style="color: #000000"></i
          ></RouterLink>
          Regresar
        </h3>
      </div>
      <div class="title">
        <h3>¿Cuál es tu dirección de email?</h3>
      </div>
      <div class="next">
        <h3>Siguiente <i class="fa-solid fa-chevron-right" style="color: #ffffff"></i></h3>
      </div>
    </div>

    <div class="inicio">
      <form @submit.prevent="loginUser">
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Correo</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            v-model="user.email"
            required
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Contraseña</label>
          <input
            type="password"
            class="form-control"
            v-model="user.password"
            id="exampleInputPassword1"
            required
          />
        </div>
        <button type="submit" class="btn btn-dark">Iniciar Sesión</button>

        <div class="cuenta">
          ¿Aun no tienes cuenta? <RouterLink to="/registro"> Registrate</RouterLink>
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
    border: 0px solid black;
    width: 350px;
    margin-bottom: 20px;
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

  .cuenta {
    margin-top: 15px;
    text-align: center;
  }
}
</style>
