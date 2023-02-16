const initialState ={
  token:null,
  isAuthenticated:false,
  loading: true,
  msg:false,
}

if (typeof window !== "undefined") {
  // browser code
  if(typeof window.localStorage !== 'undefined' && window.localStorage.getItem('token')){
    initialState.isAuthenticated = true
  }else{
    initialState.isAuthenticated = false
  }
}

export default function(state = initialState,action){
  const {type, payload} = action

  switch (type){
    case "1":
      return{
        state,
        loading:false
      }
    default:
      return state
  }
}