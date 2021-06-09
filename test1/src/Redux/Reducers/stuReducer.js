
const stuReducer=(state='', action)=>{
//    console.log("from stu reducer the action is ",action)
    
   switch(action.type){      
            // Saga__ REducers
        case 'GET_MARKS':
            state={
                ...state,
                marks:action.payload
            }
            return state
            break
        case 'GET_MARKS_DONE':
            state={
                ...state,
                marks:action.payload
            }
            return state
            break
        default:
            return state
   }
}
export default stuReducer