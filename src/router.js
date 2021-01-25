import { createWebHistory, createRouter } from 'vue-router';
import JokeDetails from '@/components/JokeDetails'
import JokeList from '@/components/JokeList'

const routes = [
  {
    path: '/joke',
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
  history: createWebHistory(),
  routes
})

export default router;