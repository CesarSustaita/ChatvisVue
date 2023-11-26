<script setup>
import {UserNavbar} from '@/components/navbar';
import { store } from '@/components/store'

const cambiarOpcion = (opcion) => {
  store.opcionSeleccionada = opcion;
  console.log('Opción seleccionada:', store.opcionSeleccionada);
};
</script>

<template>
    <div>
      <UserNavbar />
      <div class="botones-pestañas">
        <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
          <input
            type="radio"
            class="btn-check"
            name="btnradio"
            id="btnradio1"
            autocomplete="off"
            :checked="store.opcionSeleccionada === 'Usuarios'"
            @click="cambiarOpcion('Usuarios')"
          />
          <label class="btn btn-outline-secondary" for="btnradio1">
            <i class="fa-solid fa-user-group"></i> Usuarios
          </label>
  
          <input
            type="radio"
            class="btn-check"
            name="btnradio"
            id="btnradio2"
            autocomplete="off"
            :checked="store.opcionSeleccionada === 'Analizador'"
            @click="cambiarOpcion('Analizador')"
          />
          <label class="btn btn-outline-secondary" for="btnradio2">
            <i class="fa-solid fa-chart-simple"></i> Analizador
          </label>
        </div>
      </div>
    </div>
  </template>
  
  <style scoped>
  .botones-pestañas {
    display: flex;
    justify-content: center;
    padding: 10px;
  }
  
  .btn-outline-secondary {
    color: black;
    font-weight: 500;
  }
  </style>