import axios from 'axios'

export function getNIK({nik}){

  return axios.post('http://localhost:8000/ktp/profile',{nik:nik},{headers:{
      "Authorization":"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvbG9naW4iLCJpYXQiOjE2MTA0NDY4NjksImV4cCI6MTYxOTA4Njg2OSwibmJmIjoxNjEwNDQ2ODY5LCJqdGkiOiJ0ZE9MRXg5UlV4UThaN3JaIiwic3ViIjoxLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.T-fZww9c0Nwxw7VAUNlxnxnOZFMQzkuHLGfGrIfLOcU"
    }})
    .then((res)=> res.data)
    .catch((err)=> {
      console.warn(err)
      return []
    })
}