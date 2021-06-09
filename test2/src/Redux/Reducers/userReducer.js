// // Data update karega

// // user ke sate

// const userState={
//     // inital state
//     userId:'UI9898',
//     name:'Ram Sing',
//     depatment:['IT','TECH']

// }

// const userReducer = (state=userState,action)=>{
//     // console.log("From reducer action is ",action)
//     // if(action.type === 'SET_NAME'){
//     //     state = {
//     //         ...state,
//     //         name:action.payload 
//     //     }
//     //     return state
//     // }else{
//     //     return state

//     // }
//     switch(action.type){
//         case "SET_NAME":
//             state={
//                 ...state,
//                 name:action.payload
//             }
//             return state
            
//         case 'SET_NEW_USER':
//             state={
//                 ...state,
//                 name:action.payload
//             }
//             return state
//         default:
//             return state
            
//     }
// }

// export default userReducer