<!-- se gregara un script con los elementos reactivos-->
<script setup>
import { store } from '../../components/register'
import { ref } from 'vue'
const user = ref(store)
</script>

<template>
  <form>
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Nombre</label>
      <input
        type="text"
        class="form-control"
        aria-label="Username"
        aria-describedby="basic-addon1"
        v-model="user.nombre"
      />
    </div>
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Apellido Paterno</label>
      <input
        type="text"
        class="form-control"
        aria-label="Username"
        aria-describedby="basic-addon1"
        v-model="user.apellido_paterno"
      />
    </div>
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Apellido Materno</label>
      <input
        type="text"
        class="form-control"
        aria-label="Username"
        aria-describedby="basic-addon1"
        v-model="user.apellido_materno"
      />
    </div>
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Contraseña</label>
      <input
        type="password"
        id="inputPassword5"
        class="form-control"
        aria-describedby="passwordHelpBlock"
        v-model="user.password"
      />
    </div>
    <!-- <RouterLink to="/registro3" type="button" class="btn btn-outline-dark ">Continuar</RouterLink> -->
  </form>
</template>
