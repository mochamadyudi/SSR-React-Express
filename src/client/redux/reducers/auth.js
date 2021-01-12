const initialState ={
  token:null,
  isAuthenticated:false,
  loading: true,
  msg:false,
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