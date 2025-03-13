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
            class="input-kcal p-3">
                <label class="text-end p-2">Введите количество калорий в день: </label>

                <input
                    type="text"
                    class="form-control"
                    v-model.number.lazy="kcal">
        </form>
    </div>


</template>


<style scoped>

.title-card {
    display: grid;
    grid-template-columns: 30% auto;
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

.form-control {
    width: 80% !important;
    height: 40px;
    border-color: var(--color-orange) !important;
}

.btn-outline-orange {
    --bs-btn-font-weight: 600;
    --bs-btn-color: var(--color-orange) ;
    --bs-btn-bg: var(--bs-white);
    --bs-btn-border-color: var(--color-orange) ;
    --bs-btn-active-color: var(--bs-white);
    --bs-btn-active-bg: var(--color-orange) ;
    --bs-btn-active-border-color: var(--bs-white);
    --bs-btn: var(--color-orange) ;
    --bs-btn-hover-color: var(--bs-white);
    --bs-btn-hover-bg: var(--color-orange);
    --bs-btn-hover-border-color: var(--bs-white);
}



</style>
