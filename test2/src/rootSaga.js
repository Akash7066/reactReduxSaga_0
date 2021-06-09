console.log('from saga')
import {all} from 'redux-saga/effects'
import {waitForFetchMarks} from './Redux/sagas/country.saga'

export default function* rootSaga(){
    yield all([waitForFetchMarks()])
}