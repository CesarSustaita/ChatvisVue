<script>
import axios from 'axios'
export default {
  // name: 'user',
  data() {
    return {
      email: '',
      password: '',
      users: []
    }
  },
  mounted() {
    this.login()
  },
  methods: {
    login() {
      axios
        .post('http://localhost:8000/api/user/login', {
          email: this.email,
          password: this.password
        })
        .then((res) => {
          console.log(res)
          this.users = res.data
          console.log(this.users)
          // Maneja la respuesta del backend, por ejemplo, guarda el token
          // const token = res.data.token
          // Puedes hacer algo con el token, como almacenarlo en localStorage
          // localStorage.setItem('token', token)
        })
        .catch((error) => {
          console.error('Error en el inicio de sesión:', error)
        })
    }
  }
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
      <form @submit.prevent="login">
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Correo</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            v-model="email"
            required
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Contraseña</label>
          <input
            type="password"
            class="form-control"
            v-model="password"
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
