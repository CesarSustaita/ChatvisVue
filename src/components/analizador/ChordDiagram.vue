<template>
  <div class="ChordDiagram">
    <div class="graph">
      <svg :width="width" :height="height" id="chordDiagram"></svg>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import * as d3 from 'd3';
import { store } from '../store';


const width = 900;
const height = 600;

// Recibir los datos emitidos por FileReader y dibujar el diagrama
const recibirDatos = (relaciones) => {
  relaciones.value = store.relaciones;
  dibujarChordDiagram(relaciones.value);
};

// Dibujar el diagrama de acordes
const dibujarChordDiagram = (relaciones) => {
  console.log('Intentando dibujar el diagrama de acordes...');
  console.log('Relaciones:', relaciones);
  if (!relaciones || relaciones.length === 0) {
    console.error('Las relaciones son nulas o no hay relaciones definidas.');
    return;
  }

  console.log('Dibujando el diagrama de acordes con relaciones:', relaciones);

  const svg = d3.select(document.getElementById('chordDiagram'));
  const outerRadius = Math.min(width, height) * 0.4 - 25;
  const innerRadius = outerRadius - 70;

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
    .text(d => relaciones[d.index].from.substring(0, 10));

  svg.append('text')
    .attr('x', width / 2)
    .attr('y', -30)
    .attr('text-anchor', 'middle')
    .text('Chord Diagram de Relaciones entre Contactos');
};

onMounted(() => {
  recibirDatos([]);
});
</script>

<style>
.ChordDiagram {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 650px;
  overflow-x: auto;
}

.graph {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
}
</style>
