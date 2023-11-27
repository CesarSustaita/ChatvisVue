<script setup>
import axios from 'axios'
import { ref, onMounted } from 'vue'
const i = 0
const users = ref([]) // Importa 'ref' para crear una referencia reactiva

const getUsers = async () => {
  try {
    const response = await axios.get('http://localhost:8000/api/user')
    users.value = response.data // Utiliza 'value' para actualizar la referencia reactiva
  } catch (error) {
    console.error('Error al obtener usuarios:', error)
  }
}

onMounted(() => {
  getUsers() // Llama a la función getUsers cuando el componente se monta
})

// const deleteData = async (user) => {
//   try {
//     const response = await axios.delete(`http://localhost:8000/api/user/${user._id}`)
//     console.log('Datos eliminados con éxito:', response.data)
//     // Realiza acciones adicionales después de la eliminación si es necesario
//   } catch (error) {
//     console.error('Error al eliminar datos:', error)
//   }
// }
</script>

<template>
  <div class="cont-superior">
    <div class="user-table">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Universidad</th>
            <th scope="col">Estado</th>
            <th scope="col">Ciudad</th>
            <th scope="col">Numero de usos</th>
            <!-- <th scope="col">Fecha de registro</th> -->
            <th scope="col">Edición</th>
          </tr>
        </thead>
        <tbody>
          <!-- <tr>
            <th scope="row">1</th>
            <td>Jaime Garcia</td>
            <td>UAA</td>
            <td>Aguascalientes</td>
            <td>México</td>
            <td>Séptimo</td>
            <td>Agosto 12, 2022 - 9:42 am</td>
            <td><i class="fa-solid fa-trash" style="color: #292929"></i></td>
          </tr> -->
          <tr v-for="user in users" :key="user._id">
            <th scope="row">{{ (i = i + 1) }}</th>
            <td>{{ user.nombre }} {{ user.apellido_paterno }} {{ user.apellido_materno }}</td>
            <td>{{ user.universidad }}</td>
            <td>{{ user.estado }}</td>
            <td>{{ user.ciudad }}</td>
            <td>{{ user.num_uso }}</td>
            <!-- <td>semestre?</td> -->
            <td>
              <!-- <form @submit.prevent="deleteData"></form> -->
              <!-- <input type="hidden" value="{{ user._id }}" /> -->
              <!-- <button type="submit"> -->
              <!-- <i class="fa-solid fa-trash" style="color: #292929"></i> -->
              borrar
              <!-- </button> -->
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
.cont-superior {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
}

.user-table {
  background-color: white;
  border-radius: 10px;
  padding: 60px;
}
</style>
