<script>
import { RouterLink, RouterView } from 'vue-router'

export default {
  components: {
    RouterLink,
    RouterView
  },
};
</script>

<template>
  <header>
    <div class="wrapper">
      
      <nav>
        <div class="nav">
          <div class="izq">
            <RouterLink to="/">Chatvis Analyzer</RouterLink>
          </div>
          <div class="der">
            <div class="registro">
              <RouterLink to="/registro">Registro</RouterLink>
            </div>
            <div class="inicioSesion">
              <RouterLink to="/inicio">Iniciar Sesion</RouterLink>
            </div>
            <!-- <div class="nosotros">
              nosotros
            </div> -->
          </div>
        </div>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style>
.wrapper {
  border: 0px solid rgb(196, 25, 25);
  
}

a:link, a:visited, a:active {
  text-decoration:none;
  color: rgb(44, 44, 44);
  font-size: 20px;
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

a:hover {
  color:#2cb983 ;
}

.nav {
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 45px;
  padding-left: 100px;
  padding-right: 100px;
}

.der {
  border: 0px solid rgb(29, 29, 29);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 220px;
}

</style>

