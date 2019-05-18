import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Services from '@/components/Services'
import Clients from '@/components/Clients'
import LebenorCaseStudy from '@/components/LebenorCaseStudy'
import RuggedianCaseStudy from '@/components/RuggedianCaseStudy'
import QaudioCaseStudy from '@/components/QaudioCaseStudy'
import UbobCaseStudy from '@/components/UbobCaseStudy'
import Contact from '@/components/Contact'
import About from '@/components/About'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/services',
      name: 'Services',
      component: Services
    },
    {
      path: '/clients',
      name: 'Clients',
      component: Clients
    },
    {
      path: '/lebenor-case-study',
      name: 'LebenorCaseStudy',
      component: LebenorCaseStudy
    },
    {
      path: '/ruggedian-case-study',
      name: 'RuggedianCaseStudy',
      component: RuggedianCaseStudy
    },
    {
      path: '/qaudio-case-study',
      name: 'QaudioCaseStudy',
      component: QaudioCaseStudy
    },
    {
      path: '/ubob-case-study',
      name: 'UbobCaseStudy',
      component: UbobCaseStudy
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
})
