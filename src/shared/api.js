import axios from 'axios'

export function getNIK({nik}){
  try{

    return new Promise((resolve)=> {
      resolve({
        data:{
          nik:"12412412",
          name: "John Doe"
        }
      })
    })
  }catch (err){
    return {
      data: null
    }
  }
}