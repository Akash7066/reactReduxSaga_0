import axios from 'axios'
export const updateName=(name)=>{
    return{
        type:'SET_NAME',
         payload:name
        }
}

export const addUser=(name)=>{
    return{
        type:'SET_NEW_USER',
        payload:name
    }
}

//student
export const updateStuName=(name)=>{
    return{
        type:'SET_STU_NAME',
        payload:name
    }
} 

// export const updateEmail=(email_add)=>{
//     return{
//         type:'UPDATE_STU_MAIL_ID',
//         payload:email_add
//     }
// }


export const updateEmail=(email_add)=>{
//    return(dispatch)=>{
//        var url ='https://restcountries.eu/rest/v2/all'
//        axios.get(url)
//        .then(response=>{
//             console.log('response s',response.data[10].name)
//        })
//        .catch(error=>{

//        })
//    }
console.log('from action count is ',email_add)
return(dispatch)=>{
    var url ='https://restcountries.eu/rest/v2/all'
    axios.get(url)
    .then(response=>{
        //  console.log('response s',response.data)
        // dispatch({type:'UPDATE_STU_MAIL_ID',payload:response.data})//return all data
        dispatch({type:'UPDATE_STU_MAIL_ID',payload:response.data[email_add].name})//return only one data

    })
    .catch(error=>{

    })
}
}




// action for saga

export const getMarks=(marks)=>{
    return{
        type:'GET_MARKS',
        payload:marks
    }
}

export const doneMarks=(marks)=>{
    return{
        type:'GET_MARKS_DONE',
        payload:marks,
    }
}