import { createRouter, createWebHistory } from "vue-router";
import Homepage from "./../components/Homepage.vue"
import Tvshows from "./../components/Tvshows.vue"
import Movies from "./../components/Movies.vue"
import Music from "./../components/Music.vue"
const routes = [
  {
    path: '/',
    name: 'homepage',
    component: Homepage,
  },
  {
    path: '/tvshows',
    name: 'tvshows',
    component: Tvshows,
  },
  {
    path: '/movies',
    name: 'movies',
    component: Movies,
  },
  {
    path: '/music',
    name: 'music',
    component: Music,
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router
