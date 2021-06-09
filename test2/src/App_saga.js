import {connect} from 'react-redux'
import React,{useState,useEffect} from 'react'
import {getData} from './Redux/action'

// let v = 'akash'
function App(props){
    const [inputValues,setInput] = useState('')
    console.log('from app props is ',props)
   const onChange = ({target}) =>setInput(target.value)
    const changesMarks=()=>{
        // console.log('Yess')
        props.newMarks(inputValues)
    }
    const [initialState, setstate] = useState('')
    // useEffect(()=>{
    //         // props.changeName('New user Name AKash ',count)
    //         // props.changeEmail(count)
            
    //         // props.newMarks(inputValues)
    //         fetch('https://restcountries.eu/rest/v2/all')
	// 		.then((data) => data.json())
	// 		.then((user_data) => {
	// 			console.log('main user data ', user_data);
	// 			// this.setState({ user_data });
    //             setstate({user_data})
	// 		})
	// 		.catch((error) => {
	// 			console.log(error);
	// 		});
    //       })
        // 
    console.log('country props', props.fetchData);
    console.log('input is :-> ',inputValues)
    console.log(props.fetchData)
    return(
        <div className='App'><br/>
        <h1><center>React + Redux + Saga  ok iljhsalkjfhsdlk</center></h1>

        <h2><center>Redux thunk vs Redux saga</center></h2>
        {/* <h1>Student makrs {props.myStudent.marks}</h1> */}
        <input value={inputValues} onChange={onChange} style={{background:'#fff'}}></input>
        <button onClick={changesMarks}>Changes marks</button>
        <div>
            {/*  */}
            {
                <div>
                    {/* {  this.state.user_data.map((data) => ( */}
                        {/* {  initialState.map((data) => (

									<div class="col-xl-3 col-lg-4 col-md-6 mb-4">
										<div class="bg-white rounded shadow-sm">
											<p>To do false</p>
											<img
												style={{ height: '300px', width: '300px' }}
												// src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
												src={data.flag}
												alt=""
												class="img-fluid card-img-top"
											/>
											<div class="p-4">
												<h5>
													{' '}
													<a href="#" class="text-dark">
														{data.name}
													</a>
												</h5>
												<p class="small text-muted mb-0">
													Lorem ipsum dolor sit amet, consectetur adipisicing elit
												</p>
												<div class="d-flex align-items-center justify-content-between rounded-pill bg-light px-3 py-2 mt-4">
													<p class="small mb-0">
														<i class="fa fa-picture-o mr-2" />
														<span class="font-weight-bold">JPG</span>
													</p>
													<div class="badge badge-danger px-3 rounded-pill font-weight-normal">
														New
													</div>
												</div>
											</div>
										</div>
									</div>
								)) } */}
                </div>
            }
            
            {/*  */}
            { 
			// console.log('type is ',typeof(props.fetchData.marks))
            //  props.fetchData || props.loadding == false ?
            // //  console.log(props.fetchData.marks[10].name)
            //     // <h1>hey</h1>
            //     props.fetchData.marks.map((e)=>(
            //         <p>{e.flag}</p>
                   
            //     ))
            //     :  <h1>hey ok</h1>

            }
			{
				props.fetchData.marks ?(
					<div>
						{
							props.fetchData.marks.map((e)=>(
								<p>{e.name}</p>
							))
						}
					</div>
				):<p>not</p>
			}
            
        </div>
        </div>
    )
}

const mapStateToProps=(state)=>{
    return{
        // myStudent:state.student 
		fetchData:state.country 

    }
}
const mapDispatchToProps=(dispatch)=>{
    return{   
// 
        // newMarks:(marks)=>{ dispatch({type:'NEW_USER_MARKS',payload:marks}) }
        newMarks:(marks)=>{ dispatch(getData(marks)) }

    }
}
export default connect(mapStateToProps,mapDispatchToProps)(App)
