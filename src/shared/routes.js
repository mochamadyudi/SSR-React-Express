import Home from '../client/container/pages/home/Home'
import Login from '../client/container/pages/login/Login'
import {getNIK} from './api'

const routes = [
  {
    path:'/',
    exact: true,
    isAuth: true,
    component: Home,
    fetchInitialData:(path = '')=> {
          return new Promise((resolve)=> {
            resolve({
              meta_data:{
                title:"Home",
                description:"Lorem ipsum dolor sit amet",
                canonical: "http://localhost:4000/"
              }
            })
          })
    }
  },
  {
    path:'/home',
    exact: true,
    isAuth: true,
    component: Home,
    fetchInitialData:(path = '')=> {
      return new Promise((resolve)=> {
        resolve({
          meta_data: {
            title: "Home Page",
            description: "Lorem ipsum dolor sit amet",
            canonical: "http://localhost:4000/home"
          }
        })
      })
    }
  },
  {
    path:'/login',
    exact: true,
    isAuth: false,
    component: Login,
    fetchInitialData:(path = '')=> {
      return new Promise((resolve)=> {
        resolve({
          meta_data: {
            title: "Login Page",
            description: "Lorem ipsum dolor sit amet",
            canonical: "http://localhost:4000/login"
          }
        })
      })
    }
  }
]

export default routes