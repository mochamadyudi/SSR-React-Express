import React from 'react'
import {useHistory} from "react-router";

const Login = ()=> {
    const history = useHistory()
    const onClick = ()=> {
        if(typeof window !== 'undefined'){
            if(typeof window.localStorage !== 'undefined'){
                window.localStorage.setItem('token','testing')
                history.replace('/')
            }
        }
    }
  return(
      <div className="w-full">
        <h1>Login</h1>
        <button onClick={onClick}>click me is login</button>
      </div>
  )
}

export default Login