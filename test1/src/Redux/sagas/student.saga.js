import axios from 'axios'
import {takeEvery,takeLatest,call,put} from 'redux-saga/effects'
import {doneMarks} from '../action'
console.log('from student saga')
// saga call the reducers

// 
function* fecthMarks(props){
    console.log('marks',props)
    console.log('marks is ',props.payload)
    try{
        // yield put(doneMarks('25'))
        // yield put(data)
        const user_data = yield call(apidata,'hello')
        console.log('from saga user data is iu',user_data[0])
        yield put(doneMarks(user_data))
      
    }catch (e){

    }
}

export function* waitForFetchMarks(){
    yield takeEvery('GET_MARKS',fecthMarks)
}


const apidata = async (first)=>{
    console.log(first)
    const apiRecord = await axios.get('https://restcountries.eu/rest/v2/all')
    return apiRecord.data
    
}