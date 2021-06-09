import axios from 'axios'




// action for saga

export const getData=(marks)=>{
    return{
        type:'GET_DATA',
        payload:marks
    }
}

export const doneData=(marks)=>{
    return{
        type:'GET_DATA_DONE',
        payload:marks,
    }
}
export const loadFail=(e)=>{
    return{
        type:'GET_POST_FAILURE',
        payload:e
    }
}

