import React from 'react'
import routes from '../../../../shared/routes'
import { Redirect, Route, Switch } from 'react-router-dom'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import Topbar from '../topbar/Topbar'
import PrivateRoute from '../../../routers/PrivateRoute'
import NotMatch from '../../pages/notfound/NotMatch'
const TheLayout = ({auth})=> {
  return(
    <div>
      {
        auth.isAuthenticated && (
          <Topbar/>
        )
      }
      <Switch>
        {
          routes.map(({path, exact, component: C,rest,isAuth})=> (
            !isAuth ?
            <Route key={path} path={path} exact={exact} render={(props)=>{
              return(
                <C {...props} {...rest}/>
              )
            }}/>:
              <PrivateRoute key={path} path={path} exact={exact} component={C}/>
          ))
        }
        <Route component={NotMatch}/>
      </Switch>
    </div>
  )
}


TheLayout.propTypes = {

}
const mapStateToProps = state => ({
  auth: state.auth
})
export default connect(mapStateToProps, {})(TheLayout)