import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import SearchView from '@/views/SearchView.vue'
import RecommendView from '@/views/RecommendView.vue'
import RecommendGenreView from '@/views/RecommendGenreView.vue'
import CommunityView from '@/views/CommunityView.vue'
import CreateArticleView from '@/views/CreateArticleView.vue'
import DetailArticleView from '@/views/DetailArticleView.vue'
import UpdateArticleView from '@/views/UpdateArticleView.vue'
import MoviesView from '@/views/MoviesView.vue'
import DetailMovieView from '@/views/DetailMovieView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView
  },
  {
    path: '/search/query',
    name: 'SearchView',
    component: SearchView
  },
  {
    path: '/recommend',
    name: 'RecommendView',
    component: RecommendView
  },
  {
    path: '/recommend/:genre',
    name: 'RecommendGenreView',
    component: RecommendGenreView
  },
  {
    path: '/community',
    name: 'CommunityView',
    component: CommunityView
  },
  {
    path: '/community/create',
    name: 'CreateArticleView',
    component: CreateArticleView
  },
  {
    path: '/community/:id',
    name: 'DetailArticleView',
    component: DetailArticleView,
  },
  {
    path: '/community/:id/update',
    name: 'UpdateArticleView',
    component: UpdateArticleView
  },
  {
    path: '/movies',
    name: 'MoviesView',
    component: MoviesView,
  },
  {
    path: '/movies/:videoId',
    name: 'DetailMovieView',
    component: DetailMovieView,
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
