<script setup>
import {ref} from 'vue'
import {useMainStore} from "@/components/stores/mainStore.js";

const MainStore = useMainStore()
const kcal = ref(null)

// const days = ref([
//     {
//         id: 1,
//         idn: 'mon',
//         name: 'Понедельник'
//     },
//     {
//         id: 2,
//         idn: 'tue',
//         name: 'Вторник'
//     },
//     {
//         id: 3,
//         idn: 'wed',
//         name: 'Среда'
//     },
//     {
//         id: 4,
//         idn: 'thu',
//         name: 'Четверг'
//     },
//     {
//         id: 5,
//         idn: 'fri',
//         name: 'Пятница'
//     },
//     {
//         id: 6,
//         idn: 'sat',
//         name: 'Суббота'
//     },
//     {
//         id: 7,
//         idn: 'sun',
//         name: 'Воскресенье'
//     },
// ])

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
                <label class="text-end p-2">Количество калорий в день: </label>

                <input
                    type="text"
                    class="form-control"
                    v-model.number.lazy="kcal">
        </form>
    </div>

<!--- компонент недели --->
    <div class="week p-3">
        <template v-for="day in MainStore.days" >
            <div >
                <h5 class="p-3">{{ day.name }}</h5>
            </div>

        </template>
    </div>




</template>


<style scoped>

.title-card {
    display: grid;
    grid-template-columns: 30% auto;
    background-color: #f8c997;
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

.week {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    
}

.week div{
    background: #BDE592BF;
    border: 2px solid #7E9A4EFF;
    border-radius: 18px;
    flex: 0 0 auto;
    width: 13%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

}


.form-control {
    width: 80% !important;
    height: 40px;
    border-color: var(--color-orange) !important;
}

.form-control:focus {
    box-shadow: 0 0 0 0.25rem rgba(253, 77, 13, 0.25);
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



@media (max-width: 1100px) {
    .week div{
        width: 17%;
    }

}

@media (max-width: 585px) {
    .card-kcal, .input-kcal {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    .title-card {
        display: flex;
    }
}

</style>
