import {defineStore} from "pinia"
import axios from "axios"
import {ref} from 'vue'

export const useMainStore = defineStore('main', () => {
    const days = ref(null)
    const getDays = async () => {
        const {data} = await axios.get('https://vue-menu-calc-default-rtdb.firebaseio.com/days.json')
        days.value = data}

    return {
        days,
        getDays
    }
}
)


//     {
//     state: () => ({
//         kcal: null,
//         days: null,
//         eat: null,
//     }),
//
//     actions: {
//         changeKcal() {
//             this.kcal = null
//
//         },
//
//         async getDays() {
//             const {data} = await axios.get('https://vue-menu-calc-default-rtdb.firebaseio.com/days.json')
//             this.days = data
//         },
//     }
// }
