import Vue from 'vue'
import Router from 'vue-router'
import zmNews from '../components/zmNews'
import hjy from '../components/hjy'
import syd from '../components/syd'
import sq from '../components/sq'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:"/",redirect:"/home"
    },
    {
      path:"/home",name:"home",component:hjy
    },
    {
      path:"/news",name:"news",component:zmNews
    },
    {
      path:"/product",name:"product",component:sq
    },
    {
      path:"/contact",name:"contact",component:syd
    }
  ]
})
