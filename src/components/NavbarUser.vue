<script setup>


</script>

<template>
    <div class="navUser">
        <div class="seccion1">
            <div class="title-inter">
                <h6>Chatvis Analyzer</h6>
            </div>
            <div class="upLoad">
                <RouterLink to="/lector" type="button" class="btn btn-dark"><i class="fa-solid fa-upload" style="color: #ffffff;"></i>   Subir Archivo </RouterLink>
            </div>
        </div>
        <div class="seccion2">
            <div class="icon-info" >
                <button type="button" class="btn icon-button" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    <i class="fa-solid fa-circle-info fa-xl" style="color: #a3a3a3;"></i>
                </button>
            </div>
            <div class="line" style="color: #a3a3a3;">
                |
            </div>
            <div class="profile-icon">
                <div class="btn-group " role="group">
                  <button type="button" class="btn icon-button dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    <i class="fa-solid fa-user fa-xl" style="color: #a3a3a3;"></i>
                  </button>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Cerrar Sesión</a></li>
                  </ul>
                </div>
            </div>
        </div>
    </div> 

   
        <!-- Modal -->
    <div class="modal fade " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">¿Cómo funciona?</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <h5>Sigue los siguientes pasos para analizar tu conversación</h5>
            <p>1- Importat tu conversación de Whatsapp en formato “.txt”.</p>
            <p>2- Presiona el botón de subir archivo o arrastra tu conversación.</p>
            <p>3- El analizador ChatVis comenzará de inmediato y se mostrará tu análisis.</p>
            <h5>Importante</h5>
            <p>El analizador ChatVis no guardará ninguna conversación analizada, para la seguridad de todos.</p>
          </div>
        </div>
      </div>
    </div>
</template>

<style scoped>
.navUser {
    display: flex;
    flex-direction: row;
    border-bottom: 2px solid #D1D1D1;
    height: 80px;
    background-color: white;
}

.seccion1 {
    width: 90%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between; 
    padding-left: 30px;
    padding-right: 30px;
}

.seccion2 {
    width: 10%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
}

.icon-button {
    padding: 5px; 
    width: auto; 
    height: auto; 
    background: none; 
    border: none; 
}

</style>