  import axios from 'axios'
import React, { useContext, useState } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom';
// import {toast,ToastContainer  } from 'react-toastify';
import './css/add.css'
import { context } from '../App';

const Add = () => {
  let {data,setdata}=useContext(context)
const navigate=useNavigate()
  const [member, setmember]=useState("")
const [tournamentName, settournamentName]=useState("")
const [startDate, setstartDate]=useState("")
const [endDate  , setendDate  ]=useState("")

    
  const  handlechange=async(e)=>{
    e.preventDefault()
    const ans={member,startDate,endDate,tournamentName}
    console.log(ans)
setdata([...data,ans])
    await axios.post("https://6258573d0c918296a495a609.mockapi.io/datas",ans)
    .then((Response)=>{
       console.log(Response)
   })
   .catch((error)=>{
       console.log(error)
   })
navigate('/')

 }
  



console.log("context",data)   




  return (


    <>
        <div className="products">
      <div className="productsNav">
        <Link to="/add/view"> view </Link> 
      </div> 
      <Outlet />
    </div>
  
    <div className="container2">

   <div className='wrapper1'>
   
    
    <form   onSubmit={handlechange}>

    <h1>Add tournament</h1>
        <label>member</label>  
      
<input className='date' name='member'  placeholder='member' type='text' value={member} onChange={(e)=>{setmember(e.target.value)}}/>
    <label>tournamentName</label>  
      
<input className='date' name='tournamentName'  placeholder='tournamentName' type='text' value={tournamentName} onChange={(e)=>{settournamentName(e.target.value)}}/>
<label>startDate</label>
<input className='date' name='startDate' placeholder='startDate' type='date' value={startDate} onChange={(e)=>{setstartDate(e.target.value)}}/>
<lable>endDate</lable>
<input className='date' name='endDate' placeholder='endDate' type='date' value={endDate} onChange={(e)=>{setendDate(e.target.value)}}/>
<button type='onsubmit'>submit</button>

</form>
</div>
</div>
</>
  )
}

export default Add  