import {connect} from 'react-redux'
import React,{useEffect} from 'react'
import {getMarks} from './Redux/action'

// let v = 'akash'
function App(props){
    console.log('from app props is ',props)
    // const changesMarks=()=>{
    //     console.log('Noo yu',v)
    // }
    const changesMarks=()=>{
        console.log('Yess')
        props.newMarks('20')
    }
    // useEffect(
    //     // changesMarks(),[]
    //     props.newMarks()
    // )
    console.log(props)
    return(
        <div className='App'><br/>
        <h1><center>React + Redux + Saga</center></h1>

        <h2><center>Redux thunk vs Redux saga</center></h2>
        {/* <h1>Student makrs {props.myStudent.marks}</h1> */}
        {/* <button onClick={changesMarks}>Changes marks</button> */}

        </div>
    )
}

const mapStateToProps=(state)=>{
    return{
        myUser:state.user,
        myStudent:state.student 
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
    
// 
        newMarks:(marks)=>{ dispatch({type:'NEW_USER_MARKS',payload:marks}) }
        // newMarks:(marks)=>{ dispatch(getMarks(marks)) }

    }
}
export default connect(mapStateToProps,mapDispatchToProps)(App)
