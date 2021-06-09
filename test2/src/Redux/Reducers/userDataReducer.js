
const conReducer=(state='', action)=>{
    
   switch(action.type){      
            // Saga__ REducers
        case 'GET_DATA':
            state={
                ...state,
                loading:true,
                marks:action.payload
            }
            return state
            break
        case 'GET_DATA_DONE':
            state={
                ...state,
                loading:false,
                marks:action.payload
            }
            return state
        case "GET_POST_FAILURE":
            state = {
                ...state,
                loading:false,
                errors:action.payload
            }
            return state
      
        default:
            return state
   }
}
export default conReducer