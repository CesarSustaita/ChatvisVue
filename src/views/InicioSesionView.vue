<script setup>
import {DefaultLayout} from '@/layouts'
</script>

<template>
  <DefaultLayout>
    <div class="container">
      <div class="encabezados">
        <div class="back">
          <h3><RouterLink to="/" > <i class="fa-solid fa-chevron-left" style="color: #000000;"></i></RouterLink>  Regresar</h3>
        </div>
        <div class="title">
        <h3>¿Cuál es tu dirección de email? </h3>
      </div>
      <div class="next">
          <h3> Siguiente <i class="fa-solid fa-chevron-right" style="color: #ffffff;"></i> </h3>
        </div>
      </div>
      
      <div class="inicio">
          <form>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Correo</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Contraseña</label>
            <input type="password" class="form-control" id="exampleInputPassword1">
          </div>
          <button type="submit" class="btn btn-dark">Iniciar Sesión</button>

          <div class="cuenta">
            ¿Aun no tienes cuenta? <RouterLink to="/registro" > Registrate</RouterLink>
          </div>

          </form>
      </div>
    </div>
  </DefaultLayout>
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
  