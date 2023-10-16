<script setup>

import { ref, onMounted } from 'vue';
import axios from 'axios';

const fileInput = ref(null);

onMounted(() => {
  fileInput.value = document.getElementById('fileInput');
});

const handleDrop = (e) => {
  e.preventDefault();
  const file = e.dataTransfer.files[0];
  if (file) {
    upload(file);
  }
};

const uploadFile = () => {
  if (fileInput.value && fileInput.value.files.length > 0) {
    const file = fileInput.value.files[0];
    upload(file);
  }
};

const upload = (file) => {
  const formData = new FormData();
  formData.append('archivo', file);

  axios
    .post('http://localhost:3000/lector', formData)
    .then((response) => {
      console.log('Archivo subido con éxito:', response.data);
      // Puedes agregar aquí la lógica para procesar la respuesta del servidor
    })
    .catch((error) => {
      console.error('Error al subir el archivo:', error);
    });
  };
</script>

<template>
    <div class="ReaderFile">
    <div
      class="ArrastrarArchivo"
      id="ArrastrarArchivo"
      @drop="handleDrop"
      @dragover.prevent
      @dragenter.prevent
      @dragleave.prevent
    >
      <img src="/src/assets/img/attach_file.svg" alt="Clip" width="65" height="65" />
      <h5>Arrastra tu archivo de Whatsapp .txt</h5>
    </div>
    <label for="fileInput" class="btn btn-dark">
      <i class="fa-solid fa-upload" style="color: #ffffff;"></i> Examinar
      <input
        type="file"
        id="fileInput"
        ref="fileInput"
        style="display: none"
        @change="uploadFile"
      />
    </label>
  </div>
</template>

<style>
.ReaderFile{
    background-color: white;
    width: 50%;
    height: 40%;
    border-radius: 10px;
    box-shadow: rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-evenly;
}

.ArrastrarArchivo {
    width: 80%;
    height: 55%;
    border-radius: 10px;
    border: 1px solid #DCDCDC;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
}
</style>

