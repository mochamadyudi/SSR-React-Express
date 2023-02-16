import React,{useState} from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
import ScrollToTop from '../client/container/layout/ScrollToTop'
import TheLayout from '../client/container/layout/root/TheLayout'
import {Route, Switch} from "react-router-dom";
import routes from "./routes";
import PrivateRoute from "../client/routers/PrivateRoute";
import NotMatch from "../client/container/pages/notfound/NotMatch";

const App = ({name,_csrf,auth})=> {
  const [count,setCount] = useState(0)
  const [data,setData] = useState(_csrf)
  const [callb,setCallb] = useState("")
  const handleSubmit = (e)=> {
    e.preventDefault();
    axios.post('/', { csrf: data }, { headers: { "Content-Type": "application/json" } } )
      .then(r => {
        setCallb(r.data)
      })
  }
  return (
        <React.Fragment>
          <ScrollToTop>
              <Route path={'/'}>
                  <TheLayout/>
              </Route>
          </ScrollToTop>
        </React.Fragment>
  )
}

const mapStateToProps = state => ({
  auth: state.auth
})
export default connect(mapStateToProps, {})(App)