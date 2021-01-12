import React from 'react'
import {Redirect, Route} from "react-router-dom";
import {connect} from 'react-redux'
const PrivateRoute = ({component: Component, rest, isAuthenticated,token})=>(
  <Route
    {...rest}
    render={(props)=>{
      return isAuthenticated  ? (
        <Component {...props}/>
      ) : <Redirect to={{
        pathname: "/login",
        state: { status: false }
      }}
      />
    }
    }
  />

)
const mapStateToProps = state=> ({
  isAuthenticated: state.auth.isAuthenticated,
  token: state.auth.token
})
export default connect(mapStateToProps,{})(PrivateRoute)