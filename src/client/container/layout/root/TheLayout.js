import React, {lazy, useEffect} from 'react'
import { Redirect, Route, Switch } from 'react-router-dom';
import NotMatch from '../../pages/notfound/NotMatch'
import Home from "../../pages/home/Home";
import Login from "../../pages/login/Login";
import routes from "../../../../shared/routes";
const TheLayout = ()=> {

  return(
    <React.Fragment>
      <Switch>
        {
          routes.map(({path, exact, component: C,rest,isAuth})=> (
              <Route key={path} path={path} exact={exact} render={(props)=>{
                  return(
                      <C {...props} {...rest}/>
                  )
              }}/>))
        }
        <Route component={NotMatch}/>
      </Switch>
    </React.Fragment>
  )
}
export default TheLayout