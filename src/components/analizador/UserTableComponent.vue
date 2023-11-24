<script>
// setup
import axios from 'axios'
export default {
  // name: 'user',
  data() {
    return {
      users: []
    }
  },
  mounted() {
    this.getUsers()
  },
  methods: {
    getUsers() {
      axios
        .get('http://localhost:8000/api/user')
        .then((res) => {
          console.log(res)
          this.users = res.data
          console.log(this.users)
        })
        .catch((error) => {
          console.error('Error al obtener usuarios:', error)
        })
    }
  }
}
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
            <th scope="col">País</th>
            <th scope="col">Semestre</th>
            <th scope="col">Fecha de registro</th>
            <th scope="col">Edición</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Jaime Garcia</td>
            <td>UAA</td>
            <td>Aguascalientes</td>
            <td>México</td>
            <td>Séptimo</td>
            <td>Agosto 12, 2022 - 9:42 am</td>
            <td><i class="fa-solid fa-trash" style="color: #292929"></i></td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Daniel Cardona</td>
            <td>UNAM</td>
            <td>CDMX</td>
            <td>México</td>
            <td>Sexto</td>
            <td>Agosto 15, 2022 - 9:40 am</td>
            <td><i class="fa-solid fa-trash" style="color: #292929"></i></td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>César Sustaita</td>
            <td>USALP</td>
            <td>San Luis Potosí</td>
            <td>México</td>
            <td>Séptimo</td>
            <td>Agosto 01, 2022 - 9:38 am</td>
            <td><i class="fa-solid fa-trash" style="color: #292929"></i></td>
          </tr>
          <tr v-for="user in users" :key="user.id">
            <th scope="row">{{ user._id }}</th>
            <td>{{ user.nombre }} {{ user.apellido_paterno }} {{ user.apellido_materno }}</td>
            <td>{{ user.universidad }}</td>
            <td>{{ user.estado }}</td>
            <td>{{ user.ciudad }}/td></td>
            <td>{{ user.num_uso }}</td>
            <td>semestre?</td>
            <td><i class="fa-solid fa-trash" style="color: #292929"></i></td>
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
