import Vue from 'vue'
import VueRouter from 'vue-router'

import Formulario from './components/Formulario.vue'
import Punto2 from './components/Punto2.vue'

Vue.use(VueRouter)

export const router = new VueRouter({
    mode: 'history',
    routes: [
        {path: '/formulario', component: Formulario},
        {path: '/punto2', component: Punto2}
    ]
})