import {createRouter , createWebHashHistory} from 'vue-router'
import NavBar from './components/NavBar.vue'
import NamesComp from './components/NamesComp.vue'

const routes = [
    { path: '/',component:NavBar},
    { path: '/app',component:NamesComp}
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router;