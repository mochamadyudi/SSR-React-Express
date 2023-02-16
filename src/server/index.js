import express from 'express'
import cors from 'cors'
import  ReactDOMServer  from 'react-dom/server'
import App from '../shared/App'
import React from 'react'
import csrf from 'csurf'
import cookieSession from 'express-session'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import serialize from 'serialize-javascript'
import { randomBytes } from 'crypto';
import { check, validationResult } from "express-validator";
import { matchPath, StaticRouter} from 'react-router-dom';
import routes from '../shared/routes';
import axios from 'axios'
import { Provider } from 'react-redux'
import { store } from '../client/redux/store'
import {Logger} from "concurrently";
import {Helmet} from "react-helmet";

const csrfProtection = csrf({cookie:true})

const app = express()

app.use(cors())
app.use(cookieParser())
app.use(cookieSession({
  name: 'session',                              // name of the cookie
  secret: 'MAKE_THIS_SECRET_SECURE',            // key to encode session
  maxAge: 24 * 60 * 60 * 1000,                  // cookie's lifespan
  sameSite: 'lax',                              // controls when cookies are sent
  path: '/',                                    // explicitly set this for security purposes
  secure: process.env.NODE_ENV === 'production',// cookie only sent on HTTPS
  httpOnly: true                                // cookie is not available to JavaScript (client)
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
// for parsing application/xwww-
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin",  "http://localhost:4000","http://192.168.99.1:4000");
  res.header("Access-Control-Allow-Methods", 'GET, POST');
  res.header("Access-Control-Allow-Credentials", 'true');
  next();
});
app.use(express.static('public'))
// app.post('/',
//   [
//     check("csrf", "csrf is required").not().isEmpty(),
//   ],(req,res)=> {
//     const errors = validationResult(req);
//     // check for errors
//     if (!errors.isEmpty()) {
//       return res.status(400).json({errors: errors.array()});
//     }
//
//     const {
//       csrf
//     } = req.body;
//   if (csrf !== req.session.csrf) {
//     return res.status(403).json({msg:"Forbiden 403"});
//   }else{
//     return res.send(`CSRF Match`);
//   }
//
// })
//
// app.post('/ktp', (req,res)=> {
//   let {nik} = req.body
//   axios.post('http://localhost:8000/ktp/profile',{nik:nik},{
//     headers:{
//       "Authorization":"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvbG9naW4iLCJpYXQiOjE2MTA0NDY4NjksImV4cCI6MTYxOTA4Njg2OSwibmJmIjoxNjEwNDQ2ODY5LCJqdGkiOiJ0ZE9MRXg5UlV4UThaN3JaIiwic3ViIjoxLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.T-fZww9c0Nwxw7VAUNlxnxnOZFMQzkuHLGfGrIfLOcU"
//     }
//   })
//     .then((response)=> {
//       res.send(`
//         <div>
//           <p>${response.data.nama_lengkap}</p>
//         </div>
//       `)
//     })
//     .catch((err)=> {
//       return res.json([])
//     })
// })
//
// app.post('/advanced', (req, res)=> {
//   let {nama_lengkap} = req.body
//   axios.post('http://localhost:8000/ktp/search',{
//     nama_lengkap:nama_lengkap,
//     nama_lengkap_method: "LIKE"
//   },{headers:{
//     "Authorization":"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvbG9naW4iLCJpYXQiOjE2MTA0NDY4NjksImV4cCI6MTYxOTA4Njg2OSwibmJmIjoxNjEwNDQ2ODY5LCJqdGkiOiJ0ZE9MRXg5UlV4UThaN3JaIiwic3ViIjoxLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.T-fZww9c0Nwxw7VAUNlxnxnOZFMQzkuHLGfGrIfLOcU"
//     }})
//     .then((response)=> {
//       res.json(response.data)
//     })
// })

app.get('*',(req,res, next)=>{
  const activeRoute = routes.find((route)=> matchPath(req.url,route)) || {}
  const promise = activeRoute.fetchInitialData ? activeRoute.fetchInitialData(req.path): Promise.resolve()
  promise.then((data)=> {
    console.log(data)
    const context = {data}
    if (req.session.csrf === undefined) {
      req.session.csrf =  randomBytes(100).toString('hex')
    }
    let _csrf = `${req.session.csrf}`
    const metaTag = {
      title:data.meta_data.title,
      description: data.meta_data.description,
      canonical: data.meta_data.canonical,
    }
    const name = "Testing"
    const markup =  ReactDOMServer.renderToString(
      <StaticRouter location={req.url} context={context}>
        <Provider store={store}>
          <Helmet>
            <meta charSet="utf-8" />
            <title>My Title</title>
            <link rel="canonical" href="http://mysite.com/example" />
          </Helmet>
          <App
            name={name}
            _csrf={_csrf}
          />
        </Provider>
      </StaticRouter>
    )
    res.send(`
    <!DOCTYPE html>
    <html lang="id">
        <head>
            <title>${metaTag.title}</title>
            <meta charSet="UTF-8"/>
            <meta http-equiv="content-security-policy|content-type|default-style|refresh" content="30"/>
            <meta http-equiv="" v="X-UA-Compatible" content="IE=edge"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <meta name="keywords" content="${metaTag.keywords}"/>
            <meta name="description" content="${metaTag.description}"/>
            <meta name="mobile-web-app-capable" content="yes"/>
            <meta name="apple-mobile-web-app-capable" content="yes"/>
            <meta name="apple-mobile-web-app-status-bar-style" content="black"/>

            <meta name="robots" content="index,follow"/>
            <meta name="googlebot" content="index,follow"/>
            <meta name="googlebot-news" content="index,follow"/>
            <link rel="canonical" href="${metaTag.canonical}">
            <script src="/bundle.js" defer></script>
        </head>
        <body>
            <div id="app">${markup}</div>
            <script>window.___INITIAL_DATA___ = ${serialize({ name:name,_csrf:_csrf})}</script>
        </body>
    </html>
  
  `)
  }).catch(next)
})





app.listen(4000,()=> {
  console.log('App Running on PORT 4000')
})