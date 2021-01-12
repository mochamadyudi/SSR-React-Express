import Home from '../client/container/pages/home/Home'
import Login from '../client/container/pages/login/Login'
import {getNIK} from './api'

const routes = [
  {
    path:'/',
    exact: true,
    isAuth: true,
    component: Home,
    fetchInitialData:(path = '')=> getNIK(path.split('/').pop())
  },
  {
    path:'/login',
    exact: true,
    isAuth: false,
    component: Login
  }
]

export default routes