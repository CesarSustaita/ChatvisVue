<!-- se gregara un script con los elementos reactivos-->
<script setup>
import { register } from '@/components/register'
import { ref } from 'vue'
const user = ref(register)
</script>

<template>
  <form>
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

    <!-- <RouterLink to="/paginaInicio" type="button" class="btn btn-outline-dark">Registrar</RouterLink> -->
  </form>
</template>
