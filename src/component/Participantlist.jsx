import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { context } from '../App'

const Participantlist = () => {
  let {data}=useContext(context)
  console.log(data)
  const params=useParams()



  const [member, setmember]=useState("")
  




  const gets=async()=>{
   

       await axios.get("https://6258573d0c918296a495a609.mockapi.io/datas/"+ params.id)
      .then((res)=>{
          console.log(res.data)
          
setmember(res.data.member)




      })
      .catch((err)=>{
          console.log(err)
      })
  }


  useEffect(()=>{
      gets()
  },[])



return (
<div>

<table class="table table-dark">
  <thead>
    <tr>
      <th scope="col">member</th>
   
    </tr>
  </thead>
  <tbody>
    
    <tr >
         
        <td >{`participant name : ${member}`}</td>
      

      </tr>

  </tbody>
</table>


  
</div>


)
}

export default Participantlist