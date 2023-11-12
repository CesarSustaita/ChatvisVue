<script setup>

</script>

<template>
    <div class="titlee">Analizador</div>
    <div class="grap">
        <div class="barra">
            <div class="date">
                1/05/2023
            </div>
            <div class="l1">
                123 mensajes
            </div>
        </div>
        <div class="barra">
            <div class="date">
                2/05/2023
            </div>
            <div class="l2">
                144 mensajes
            </div>
        </div>
        <div class="barra">
            <div class="date">
                3/05/2023
            </div>
            <div class="l3">
                98 mensajes
            </div>
        </div>
        <div class="barra">
            <div class="date">
                4/05/2023
            </div>
            <div class="l4">
                150 mensajes
            </div>
        </div>
        <div class="barra">
            <div class="date">
                5/05/2023
            </div>
            <div class="l5">
                118 mensajes
            </div>
        </div>
        <div class="barra">
            <div class="date">
                6/05/2023
            </div>
            <div class="l6">
                133 mensajes
            </div>
        </div>
    </div>
</template>

<style scoped>

.grap {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
}

.title {
    display: flex;
}

.barra {
    border: 0px solid black;
    width: 25%;
    margin: 2%;
    height: 400px;
    display: flex;
    flex-direction: column-reverse;
}

.date {
    display: flex;
    align-items: center;
    text-align: center;
    font-size: 18px;
    font-weight: 500;
    padding-top: 10px;
}

.l1 {
    background-color: rgb(189, 103, 189);
    height: 50%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    text-align: center;
    font-size: 18px;
    font-weight: 600;
}

.l2 {
    background-color: rgb(106, 159, 194);
    height: 70%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    text-align: center;
    font-size: 18px;
    font-weight: 600;
}

.l3 {
    background-color: rgb(161, 221, 113);
    height: 20%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    text-align: center;
    font-size: 18px;
    font-weight: 600;
}

.l4 {
    background-color: rgb(204, 76, 76);
    height: 90%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    text-align: center;
    font-size: 18px;
    font-weight: 600;
}

.l5 {
    background-color: rgb(189, 103, 189);
    height: 40%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    text-align: center;
    font-size: 18px;
    font-weight: 600;
}

.l6 {
    background-color: rgb(161, 221, 113);
    height: 62%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    text-align: center;
    font-size: 18px;
    font-weight: 600;
}
</style>