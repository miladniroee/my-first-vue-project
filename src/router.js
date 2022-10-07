import {createRouter , createWebHistory} from 'vue-router'
import TextComp from './components/TextComp.vue'
import NamesComp from './components/NamesComp.vue'

const routes = [
    { path: '/',component:TextComp},
    { path: '/app',component:NamesComp},
    { path: '/app/:id',component:NamesComp}
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;