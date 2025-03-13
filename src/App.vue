<script setup>
import { ref } from 'vue'

const kcal = ref(null)

function changeKcal() {
    kcal.value = null
}

</script>




<template>

        <div class="title-card">
            <div class="ps-5 d-flex" >
                <a href="#" class="link-success">Админка</a>
            </div>

            <div
                v-if="kcal > 0"
                class="d-flex"
            >
                <div class="w-100">
                    <h1 class="ps-3">Меню на неделю на {{ kcal }}</h1>
                </div>

                <div class="w-25">
                    <button
                        class="btn btn-outline-secondary"
                        @click="changeKcal"> Изменить
                    </button>
                </div>
            </div>

            <form
                v-else
                class="d-flex">
                <div class="w-100">
                    <h4 class="form-label text-end pe-3">Введите количество калорий в день: </h4>
                </div>

                <div class="w-25">
                    <input
                        type="text"
                        class="form-control"
                        v-model.number.lazy="kcal">
                </div>
            </form>
        </div>
</template>




<style scoped>

</style>
