<script setup>



</script>

<template>
    <div class="ReaderFile">
       <div class="ArrastrarArchivo"
       id="ArrastrarArchivo"
       ondrop="dropHandler(event);"
       ondragover="dragOverHandler(event);">
       <img src="/src/assets/img/attach_file.svg" alt="Clip" width="65" height="65" />
       <h5>Arrastra tu archivo de Whatsapp .txt</h5>
       </div>
       <RouterLink to="/registro" type="button" class="btn btn-dark"><i class="fa-solid fa-upload" style="color: #ffffff;"></i>   Examinar </RouterLink>
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

