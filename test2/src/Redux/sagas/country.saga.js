import axios from 'axios'
import {takeEvery,takeLatest,call,put} from 'redux-saga/effects'

import {doneData,loadFail} from '../action'

// 
function* fecthCountryData(props){ // rename props to action
    console.log('marks',props)
  
    const query = props.payload
    console.log('u enter this ',query)
    try{
     
        const user_data = yield call(apidata,query)
        console.log('from saga user data is iu',user_data[0])
        // yield delay(4000);
        yield put(doneData(user_data))
      
        // axios.get('https://restcountries.eu/rest/v2/all')
        // .then((res)=>{
        //     yield call(res.data)
        // })
    }catch (e){
        yield put(loadFail(e))
        console.log(e)

    }
}

export function* waitForFetchMarks(){
    yield takeEvery('GET_DATA',fecthCountryData)

}

const apidata = async (first)=>{
    console.log(first)
    // const apiRecord = await axios.get('https://restcountries.eu/rest/v2/all')
    const apiRecord = await axios.get(`https://restcountries.eu/rest/v2/region/${first}`)

    return apiRecord.data
    
}