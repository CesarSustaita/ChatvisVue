<template>
<div class="container">
  <div class="encabezados">
    <div class="back">
      <h3><RouterLink to="/registro" > <i class="fa-solid fa-chevron-left" style="color: #000000;"></i></RouterLink>  Regresar</h3>
    </div>
    <div class="title">
    <h3>Registro de cuenta  </h3>
  </div>
  <div class="next">
      <h3> Siguiente <i class="fa-solid fa-chevron-right" style="color: #ffffff;"></i> </h3>
    </div>
  </div>

  <div class="avance">
    <div class="recuadro1"></div>
    <div class="recuadro2"></div>
    <div class="recuadro3"></div>
    <div class="recuadro4"></div>
  </div>
  
  <div class="inicio">
      <form>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Nombre</label>
        <input type="text" class="form-control" aria-label="Username" aria-describedby="basic-addon1">
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Apellido Paterno</label>
        <input type="text" class="form-control" aria-label="Username" aria-describedby="basic-addon1">
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Apellido Materno</label>
        <input type="text" class="form-control" aria-label="Username" aria-describedby="basic-addon1">
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Contraseña</label>
        <input type="password" id="inputPassword5" class="form-control" aria-describedby="passwordHelpBlock">
      </div>

      <RouterLink to="/registro3" type="button" class="btn btn-dark">Continuar</RouterLink>
      </form>
  </div>
</div>
</template>


<style>
@media (min-width: 1024px) {

  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border: 0px solid black;
    margin-top: 120px;
  }

  .encabezados {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    border: 0px solid black; 
  }

  .title {
    width: 350px;
    margin-bottom: 20px;
    align-items: center;
  }

  .inicio {
    border: 0px solid black;
    width: 350px;
  }

  .btn {
    width: 350px;
  }

  .next {
    color: white;
  }

  .avance {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 27%;
    height: 10px;
    margin-top: 10px;
    margin-bottom: 25px;
  }

  .recuadro1 {
    background-color: rgb(54, 54, 54);
    width: 80px; 
    border-radius: 4px;
  }
  .recuadro2 {
    background-color: rgb(54, 54, 54);
    width: 80px; 
    border-radius: 4px;

  }
  .recuadro3 {
    background-color: rgb(194, 194, 194);
    width: 80px; 
    border-radius: 4px;

  }
  .recuadro4 {
    background-color: rgb(194, 194, 194); 
    width: 80px; 
    border-radius: 4px;
  }
}
</style>
