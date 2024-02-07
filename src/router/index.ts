import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import QuestionPage from '../views/QuestionPage.vue';
import ResultPage from '../views/ResultPage.vue';
import AreaPage from '../views/AreaPage.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/question',
    name: 'Questionario',
    component: QuestionPage
  },
  {
    path: '/result',
    name: 'Resultado',
    component: ResultPage
  },  
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router