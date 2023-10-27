<template>
  <div>
    <div v-if="data">
      <ul>
        <li v-for="(mensaje, index) in data" :key="index">
          {{ mensaje.fecha }} - {{ mensaje.remitente }}: {{ mensaje.mensaje }}
        </li>
      </ul>
    </div>
    <div v-else>
      <p>Cargando datos...</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: null,
    };
  },
  mounted() {
    this.loadDataFromServer();
  },
  methods: {
    loadDataFromServer() {
      // Realiza una solicitud HTTP para obtener los datos del servidor
      fetch('http://localhost:3000/lector', { method: 'POST' })
        .then(response => {
          if (!response.ok) {
            throw new Error('La solicitud no pudo ser completada');
          }
          return response.json();
          
        })
        .then(data => {
          console.log('Datos aquí en el front:');
          console.log(data); // Imprime la respuesta en la consola
          this.data = data; // Almacena los datos en el estado del componente
        })
        .catch(error => {
          console.error('Error al cargar los datos del servidor en el front:', error.message);
        });
    },
  },
};
</script>
  