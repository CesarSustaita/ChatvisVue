<!-- FileReader.vue -->
<template>
  <div class="ReaderFile">
    <div
      class="ArrastrarArchivo"
      id="ArrastrarArchivo"
      @dragover="handleDragOver"
      @drop="handleDrop"
      @dragenter.prevent
      @dragleave.prevent
      accept=".txt"
      :class="{'drag-over': isDragOver}"
    >
      <img src="/src/assets/img/attach_file.svg" alt="Clip" width="65" height="65" />
      <h5>
        <template v-if="!cargaExitosa && !cargaFallida">
          {{ mensajeArrastrar }}
        </template>
        <template v-else-if="cargaExitosa">
          <i class="fa-regular fa-circle-check fa-xl" style="color: #47e006;"></i> {{ mensajeExitoso }}
        </template>
        <template v-else-if="cargaFallida">
          <i class="fa-solid fa-circle-exclamation fa-xl" style="color: #ce1c09;"></i> {{ mensajeFallido }}
        </template>
      </h5>
    </div>
    <label for="fileInput" class="btn btn-dark">
      <i class="fa-solid fa-upload" style="color: #ffffff;"></i> Examinar
      <input
        type="file"
        id="fileInput"
        ref="fileInput"
        style="display: none"
        @change="uploadFile"
        accept=".txt"
      />
    </label>
  </div>
</template>

<script setup>
import { ref, onMounted, reactive, toRefs } from 'vue';
import { useRouter } from 'vue-router';
import { store } from '../components/store';

const fileInput = ref(null);
const isDragOver = ref(false);
const router = useRouter();

const estadoCarga = reactive({
  cargaExitosa: false,
  cargaFallida: false,
  mensajeArrastrar: 'Arrastra tu archivo de WhatsApp .txt',
  mensajeExitoso: '¡Archivo subido con éxito!',
  mensajeFallido: 'Error: El archivo no es un .txt',
  relaciones: [],
});

const { cargaExitosa, cargaFallida, mensajeArrastrar, mensajeExitoso, mensajeFallido } = toRefs(estadoCarga);

onMounted(() => {
  fileInput.value = document.getElementById('fileInput');
});

const handleDrop = (e) => {
  e.preventDefault();
  const file = e.dataTransfer.files[0];
  if (file) {
    if (file.name.endsWith('.txt')) {
      console.log('Archivo recibido:', file.name);
      procesarArchivo(file);
    } else {
      console.log('Error: El archivo no es .txt');
      estadoCarga.cargaExitosa = false;
      estadoCarga.cargaFallida = true;
    }
    e.target.classList.remove('drag-over');
  }
};

const uploadFile = () => {
  if (fileInput.value && fileInput.value.files.length > 0) {
    const file = fileInput.value.files[0];
    if (file.name.endsWith('.txt')) {
      console.log('Archivo recibido:', file.name);
      procesarArchivo(file);
    } else {
      console.log('Error: El archivo no es .txt');
      estadoCarga.cargaExitosa = false;
      estadoCarga.cargaFallida = true;
    }
  }
};

const procesarArchivo = async (file) => {
  const reader = new FileReader();

  reader.onload = async (e) => {
    const fileContent = e.target.result;
    console.log('Archivo leído exitosamente');
    const nuevosMensajes = parsearArchivo(fileContent);
    console.log('Archivo parseado a JSON:', nuevosMensajes);

    if (nuevosMensajes.length > 0) {
      estadoCarga.cargaExitosa = true;
      estadoCarga.cargaFallida = false;

      const nuevasRelaciones = await analizarRelaciones(nuevosMensajes);
      estadoCarga.relaciones = nuevasRelaciones; // Asignar las relaciones a la variable reactiva

      store.relaciones = nuevasRelaciones;
      // Cambiar a la página /analizador después de un breve retraso
      setTimeout(() => {
        router.push({ name: 'analizador', params: { relaciones: nuevasRelaciones } });
      }, 0);
    } else {
      console.error('No se encontraron mensajes válidos en el archivo.');
      estadoCarga.cargaExitosa = false;
      estadoCarga.cargaFallida = true;
    }
  };

  reader.readAsText(file);
};

const parsearArchivo = (fileContent) => {
  const lines = fileContent.split('\n');
  const mensajes = [];
  let mensajeActual = {};

  for (const line of lines) {
    const match = /\[(.*?)\] (.+): (.+)/.exec(line);

    if (match) {
      mensajeActual = {
        fecha: match[1],
        remitente: match[2],
        mensaje: match[3],
      };
      mensajes.push(mensajeActual);
    } else {
      mensajeActual.mensaje += '\n' + line;
    }
  }

  return mensajes;
};

const analizarRelaciones = async (mensajes) => {
  // Inicializar la matriz de relaciones
  const relaciones = [];

  let contactoAnterior = null;

  for (const mensaje of mensajes) {
    const remitente = mensaje.remitente;

    if (!contactoAnterior) {
      contactoAnterior = remitente;
    } else {
      // Buscar la relación actual o crear una nueva
      const relacion = relaciones.find((rel) => rel.from === contactoAnterior && rel.to === remitente);

      if (relacion) {
        relacion.value++;
      } else {
        relaciones.push({ from: contactoAnterior, to: remitente, value: 1 });
      }

      contactoAnterior = remitente;
    }

    await new Promise(resolve => setTimeout(resolve, 0)); // Esperar para evitar problemas de asincronía
  }

  if (relaciones.length > 0) {
    return relaciones;
  } else {
    console.error('No se encontraron relaciones válidas en los mensajes.');
    return [];
  }
};

const handleDragOver = (e) => {
  e.preventDefault();
  e.dataTransfer.dropEffect = 'copy';
  isDragOver.value = true;
};
</script>

<style>
.ReaderFile {
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

.ArrastrarArchivo.drag-over {
  background-color: #f0f0f0;
}
</style>
