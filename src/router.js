import {createRouter , createWebHistory} from 'vue-router'
import TextComp from './components/TextComp.vue'
import NamesComp from './components/NamesComp.vue'
import NotFound from './components/NotFound.vue'

const routes = [
    { path: '/',component:TextComp},
    { path: '/app',component:NamesComp},
    { path: '/app/:id',component:NamesComp},

    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;