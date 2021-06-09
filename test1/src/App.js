// import React,{useState,useEffect} from 'react'
// import './App.css'
// import {updateName,addUser,updateEmail,updateStuName} from './Redux/action'

// import {connect} from 'react-redux'


// // 
// function App(props){
//   console.log('from app ',props)
//   var [count,setCount] = useState(0)
//   useEffect(()=>{
//     props.changeName('New user Name AKash ',count)
//     props.changeEmail(count)
    

//   },[count])
// // 
// const updateUserName=()=>{
//   props.newUser('NEw USer shubham')
// }

// //student 
// const update_name=()=>{
//   props.changeStuName('Nick')
// }
// const update_email=()=>{
//   // props.changeEmail(69)
//   props.changeEmail()

// }

//   return(<div>
//     <div className="App">
//         <button onClick={()=>setCount(prev=>prev+1)}>Add count {count}</button>
//         <button onClick={updateUserName}>Add New user</button>
   
//       <p>Name is {props.user.name}</p>
   
//       <p>Student name is {props.student.name} & the email is {props.student.email}</p>

//     {/* for student  */}
//     <h1>Councrty are</h1>
   
//     <button onClick={update_name}>change stu name</button>
//         <button onClick={update_email}>change email name</button>
   
    
//     </div>
//   </div>)
// }

// const mapStateToProps = (state)=>{
//   console.log('map state to props ',state)  
//   return{
  
//     user:state.user,
//     student:state.student
//   }
// }
// const mapDispatchToProps = (dispatch)=>{
//   // this function is used pass value or update values
//   return{
//     // 
  
//     changeName:(name)=>{ dispatch(updateName(name)) },
//     newUser:(name)=>{dispatch(addUser(name))},
//     changeStuName:(name)=>{dispatch(updateStuName(name))},
//     changeEmail:(email)=>{dispatch(updateEmail(email))}
//   }
// }



// export default connect(mapStateToProps,mapDispatchToProps)(App)


// _______--------_____________________________________________
import App_test from './App_saga'
import React from 'react'
export default function App(){
  return(<div>
    <App_test/>
  </div>)
}
