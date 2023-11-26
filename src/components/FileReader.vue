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
      :class="{ 'drag-over': isDragOver }"
    >
      <template v-if="cargaExitosa">
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </template>
      <template v-else>
        <img src="/src/assets/img/attach_file.svg" alt="Clip" width="65" height="65" />
      </template>

      <h5>
        <template v-if="!cargaExitosa && !cargaFallida">
          {{ mensajeArrastrar }}
        </template>
        <template v-else-if="cargaExitosa">
          <i class="fa-regular fa-circle-check fa-xl" style="color: #47e006"></i>
          {{ mensajeExitoso }}
        </template>
        <template v-else-if="cargaFallida">
          <i class="fa-solid fa-circle-exclamation fa-xl" style="color: #ce1c09"></i>
          {{ mensajeFallido }}
        </template>
      </h5>
    </div>
    <label for="fileInput" class="btn btn-dark">
      <i class="fa-solid fa-upload" style="color: #ffffff"></i> Examinar
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
import { ref, onMounted, reactive, toRefs } from 'vue'
import { useRouter } from 'vue-router'
import { store } from '@/components/store'
import { storeU } from '@/components/register'

const fileInput = ref(null)
const user = ref(storeU)
const isDragOver = ref(false)
const router = useRouter()

const estadoCarga = reactive({
  cargaExitosa: false,
  cargaFallida: false,
  mensajeArrastrar: 'Arrastra tu archivo de WhatsApp .txt',
  mensajeExitoso: '¡Archivo subido con éxito!',
  mensajeFallido: 'Error: El archivo no es un .txt',
  relaciones: []
})

const { cargaExitosa, cargaFallida, mensajeArrastrar, mensajeExitoso, mensajeFallido } =
  toRefs(estadoCarga)

onMounted(() => {
  fileInput.value = document.getElementById('fileInput')
})

const handleDrop = (e) => {
  e.preventDefault()
  const file = e.dataTransfer.files[0]
  if (file) {
    if (file.name.endsWith('.txt')) {
      console.log('Archivo recibido:', file.name)
      procesarArchivo(file)
    } else {
      console.log('Error: El archivo no es .txt')
      estadoCarga.cargaExitosa = false
      estadoCarga.cargaFallida = true
    }
    e.target.classList.remove('drag-over')
  }
}

const uploadFile = () => {
  if (fileInput.value && fileInput.value.files.length > 0) {
    const file = fileInput.value.files[0]
    if (file.name.endsWith('.txt')) {
      console.log('Archivo recibido:', file.name)
      procesarArchivo(file)
      // Cambiar el mensaje después de 3 segundos
      setTimeout(() => {
        estadoCarga.mensajeExitoso = 'Tu archivo se está cargando...'
      }, 2000)
      // Cambiar el mensaje después de 10 segundos si aún no ha cambiado
      setTimeout(() => {
        if (estadoCarga.mensajeExitoso === 'Seguimos cargando...') {
          estadoCarga.mensajeExitoso = 'Tu archivo está tomando más tiempo de lo esperado.'
        }
      }, 10000)
      // Puedes agregar más intervalos de tiempo según sea necesario
    } else {
      console.log('Error: El archivo no es .txt')
      estadoCarga.cargaExitosa = false
      estadoCarga.cargaFallida = true
    }
  }
}

const procesarArchivo = async (file) => {
  const reader = new FileReader()

  reader.onload = async (e) => {
    const fileContent = e.target.result
    console.log('Archivo leído exitosamente')
    const nuevosMensajes = parsearArchivo(fileContent)
    console.log('Archivo parseado a JSON:', nuevosMensajes)

    store.conversaciones = nuevosMensajes

    if (nuevosMensajes.length > 0) {
      estadoCarga.cargaExitosa = true
      estadoCarga.cargaFallida = false

      const nuevasRelaciones = await analizarRelaciones(nuevosMensajes)
      estadoCarga.relaciones = nuevasRelaciones // Asignar las relaciones a la variable reactiva

      store.relaciones = nuevasRelaciones
      // Cambiar a la página /analizador después de un breve retraso
      setTimeout(() => {
        if (user.value.admin == 0) {
          router.push({ name: 'analizador', params: { relaciones: nuevasRelaciones } }) //AQUI DEBE DE VALIDAR CUANDO ES UNO Y CUANDO ES EL OTRO ADMIN O USUARIO
        } else {
          router.push({ name: 'analizadorA', params: { relaciones: nuevasRelaciones } }) //AQUI DEBE DE VALIDAR CUANDO ES UNO Y CUANDO ES EL OTRO ADMIN O USUARIO
        }
        // router.push({ name: 'analizadorA', params: { relaciones: nuevasRelaciones } }) //AQUI DEBE DE VALIDAR CUANDO ES UNO Y CUANDO ES EL OTRO ADMIN O USUARIO
      }, 0)
    } else {
      console.error('No se encontraron mensajes válidos en el archivo.')
      estadoCarga.cargaExitosa = false
      estadoCarga.cargaFallida = true
    }
  }

  reader.readAsText(file)
}

const parsearArchivo = (fileContent) => {
  const lines = fileContent.split('\n')
  const mensajes = []
  let mensajeActual = {}

  for (const line of lines) {
    const match = /\[(.*?)\] (.+): (.+)/.exec(line)

    if (match) {
      mensajeActual = {
        fecha: match[1],
        remitente: match[2],
        mensaje: match[3]
      }
      mensajes.push(mensajeActual)
    } else {
      mensajeActual.mensaje += '\n' + line
    }
  }

  //crear filtro de mensajes
  return mensajes
}

const analizarRelaciones = async (mensajes) => {
  // Inicializar la matriz de relaciones
  const relaciones = []

  let contactoAnterior = null

  for (const mensaje of mensajes) {
    const remitente = mensaje.remitente

    if (!contactoAnterior) {
      contactoAnterior = remitente
    } else {
      // Buscar la relación actual o crear una nueva
      const relacion = relaciones.find(
        (rel) => rel.from === contactoAnterior && rel.to === remitente
      )

      if (relacion) {
        relacion.value++
      } else {
        relaciones.push({ from: contactoAnterior, to: remitente, value: 1 })
      }

      contactoAnterior = remitente
    }

    await new Promise((resolve) => setTimeout(resolve, 0)) // Esperar para evitar problemas de asincronía
  }

  let umbralFiltrado = 4

  // Ajustar el umbral de filtrado según el tamaño del arreglo de relaciones
  if (relaciones.length > 0 && relaciones.length <= 50) {
    umbralFiltrado = 4
  } else if (relaciones.length > 50 && relaciones.length <= 100) {
    umbralFiltrado = 9
  } else if (relaciones.length > 100 && relaciones.length <= 150) {
    umbralFiltrado = 14
  } else if (relaciones.length > 150) {
    umbralFiltrado = 35
  }

  const relacionesFiltradas = relaciones.filter((relacion) => relacion.value >= umbralFiltrado)

  console.log('Relaciones generadas:', relacionesFiltradas)

  if (relacionesFiltradas.length > 0) {
    return relacionesFiltradas
  } else {
    console.error('No se encontraron relaciones válidas en los mensajes.')
    return []
  }
}

const handleDragOver = (e) => {
  e.preventDefault()
  e.dataTransfer.dropEffect = 'copy'
  isDragOver.value = true
}
</script>

<style>
.ReaderFile {
  background-color: white;
  width: 50%;
  height: 40%;
  border-radius: 10px;
  box-shadow:
    rgba(17, 17, 26, 0.05) 0px 1px 0px,
    rgba(17, 17, 26, 0.1) 0px 0px 8px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
}

.ArrastrarArchivo {
  width: 80%;
  height: 55%;
  border-radius: 10px;
  border: 1px solid #dcdcdc;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}

.ArrastrarArchivo.drag-over {
  background-color: #f0f0f0;
}
</style>
