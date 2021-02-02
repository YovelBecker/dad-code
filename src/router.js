import { createWebHistory, createRouter } from 'vue-router';
import JokeDetails from '@/components/JokeDetails'
import JokeList from '@/components/JokeList'

const routes = [
  {
    path: '/',
    name: 'curr-joke',
    component: JokeDetails,
  },
  {
    path: '/joke-list',
    name: 'joke-list',
    component: JokeList,
  },
];

const router = createRouter({
  base: process.env.BASE_URL,
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router;