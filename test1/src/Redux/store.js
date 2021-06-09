// Data hoga

import {createStore,combineReducers,applyMiddleware} from 'redux'
import userReducer from './Reducers/userReducer'
import stuReducer from './Reducers/stuReducer'
import thunk from 'redux-thunk'
import logger from 'redux-logger'



// dev Saga
import createSagaMiddelware from 'redux-saga'
import rootSaga from '../rootSaga'

const sagaMiddelware = createSagaMiddelware()



const commonData={
    user:{
        userId:'UI9898',
        name:'Ram Sing',
        depatment:['IT','TECH']
    },
    student:{
        stuIt:'IT16008',
        name:'Akash',
        dept:'Information Technology',
        email:'demo@gmsil.com',
        marks:120
    }
}

// 
// const rootReducer= combineReducers(userReducer,stuReducer)
const rootReducer = combineReducers({  
    // 
    user:userReducer,
    student:stuReducer
})


// const store= createStore(rootReducer,commonData,applyMiddleware(thunk))
const store= createStore(rootReducer,commonData,applyMiddleware(sagaMiddelware))
sagaMiddelware.run(rootSaga)


export default store
