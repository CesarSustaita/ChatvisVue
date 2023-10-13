<script setup>

</script>

<template>
    <div class="navUser">
        <div class="seccion1">
            <div class="title-inter">
                <h6>Chatvis Analyzer</h6>
            </div>
            <div class="upLoad">
                <RouterLink to="/registro" type="button" class="btn btn-dark"><i class="fa-solid fa-upload" style="color: #ffffff;"></i>   Subir Archivo </RouterLink>
            </div>
        </div>
        <div class="seccion2">
            <div class="icon-info">
                <i class="fa-solid fa-circle-info fa-xl" style="color: #a3a3a3;"></i>
            </div>
            <div class="line">
                |
            </div>
            <div class="profile-icon">
                <i class="fa-solid fa-user fa-xl" style="color: #a3a3a3;"></i>
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

.icon-info {
}
</style>