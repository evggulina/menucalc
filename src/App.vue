<script setup>
import {ref} from 'vue'

const kcal = ref(null)

function changeKcal() {
    kcal.value = null
}

</script>


<template>

    <div class="title-card ">
        <div class="p-3">
            <a href="#" class="btn btn-outline-orange">Админка</a>
        </div>

        <div
            v-if="kcal>0"
            class="card-kcal"
        >
            <div>
                <h1>Меню на неделю на {{ kcal }}</h1>
            </div>

            <div>
                <button
                    class="btn btn-outline-orange"
                    @click="changeKcal"> Изменить
                </button>
            </div>
        </div>


        <form
            v-else
            class="input-kcal">
            <div>
                <h4 class="form-label text-end pe-3">Введите количество калорий в день: </h4>
            </div>

            <div>
                <input
                    type="text"
                    class="form-control"
                    v-model.number.lazy="kcal">
            </div>
        </form>
    </div>


</template>


<style scoped>

.title-card {
    display: grid;
    grid-template-columns: 30% auto;
    min-height: 100px;
    background-color: white;
    border-bottom: 1px solid #e2970c;
}

.card-kcal, .input-kcal {
    display: grid;
    grid-template-columns: 70% 25%;
    padding-top: 20px;
}

.card-kcal h1 {
    font-family: "Baskerville Old Face", serif;
    font-size: 35px ;
    font-style: oblique;
    color: #634308 ;
}

.btn-outline-orange {
    --bs-btn-font-weight: 600;
    --bs-btn-color: var(--color-orange) !important;
    --bs-btn-bg: var(--bs-white);
    --bs-btn-border-color: var(--color-orange) !important;
    --bs-btn-active-color: var(--bs-white);
    --bs-btn-active-bg: var(--color-orange) !important;;
    --bs-btn-active-border-color: var(--bs-white);
    --bs-btn: var(--color-orange) !important;
    --bs-btn-hover-color: var(--color-orange) !important;
    --bs-btn-hover-bg: none;
    --bs-btn-hover-border-color: var(--bs-white);
}


</style>
