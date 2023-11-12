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
    <div class="ChordDiagram" v-if="cargaExitosa">
      <svg :width="width" :height="height" id="chordDiagram"></svg>
      <h6>aqui va la grafica </h6>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, reactive, toRefs } from 'vue';
import * as d3 from 'd3';

const width = 500;
const height = 500;

const fileInput = ref(null);
const isDragOver = ref(false);

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
      dibujarChordDiagram(estadoCarga.relaciones); // Llamar a la función de dibujo aquí
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

const dibujarChordDiagram = (relaciones) => {
  console.log('Intentando dibujar el diagrama de acordes...');
  console.log('Relaciones:', relaciones);
  if (!relaciones || relaciones.length === 0) {
    console.error('Las relaciones son nulas o no hay relaciones definidas.');
    return;
  }

  console.log('Dibujando el diagrama de acordes con relaciones:', relaciones);

  const svg = d3.select(document.getElementById('chordDiagram'));
  const width = 500;
  const height = 500;
  const outerRadius = Math.min(width, height) * 0.5 - 40;
  const innerRadius = outerRadius - 30;

  const arc = d3.arc()
    .innerRadius(innerRadius)
    .outerRadius(outerRadius);

  const ribbon = d3.ribbon()
    .radius(innerRadius);

  const color = d3.scaleOrdinal(d3.schemeCategory10);

  const matrix = new Array(relaciones.length).fill(0).map(() => new Array(relaciones.length).fill(0));

  relaciones.forEach((relacion, i) => {
    matrix[i][i] = relacion.value; // Valor diagonal
    if (relacion.from !== relacion.to) {
      matrix[i][relaciones.findIndex(r => r.from === relacion.to && r.to === relacion.from)] = relacion.value;
    }
  });

  const chord = d3.chord()
    .padAngle(0.05)
    .sortSubgroups(d3.descending)
    .sortChords(d3.descending);

  const chords = chord(matrix);

  svg.selectAll('*').remove(); // Limpiar el contenido anterior

  svg.append('g')
    .attr('transform', `translate(${width / 2},${height / 2})`)
    .selectAll('path')
    .data(chords)
    .enter().append('path')
    .attr('d', ribbon)
    .style('fill', d => color(d.source.index))
    .style('stroke', d => d3.rgb(color(d.source.index)).darker());

  const group = svg.append('g')
    .attr('transform', `translate(${width / 2},${height / 2})`)
    .selectAll('.group')
    .data(chords.groups)
    .enter().append('g');

  group.append('path')
    .style('fill', d => color(d.index))
    .style('stroke', d => d3.rgb(color(d.index)).darker())
    .attr('d', arc);

  group.append('text')
    .each(d => (d.angle = (d.startAngle + d.endAngle) / 2))
    .attr('dy', '.35em')
    .attr('transform', d => `rotate(${(d.angle * 180 / Math.PI - 90)}) translate(${outerRadius + 5})${d.angle > Math.PI ? 'rotate(180)' : ''}`)
    .style('text-anchor', d => d.angle > Math.PI ? 'end' : null)
    .text(d => relaciones[d.index].from);

  svg.append('text')
    .attr('x', width / 2)
    .attr('y', -30)
    .attr('text-anchor', 'middle')
    .text('Chord Diagram de Relaciones entre Contactos');
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
