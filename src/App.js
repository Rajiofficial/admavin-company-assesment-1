import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './component/Home';
import Add from './component/Add';
import Update from './component/Update';
import Participantlist from './component/Participantlist';
import New from './component/New';
import { createContext, useState } from 'react';
export const context=createContext()

function App() {
const[data,setdata]=useState([])  
  return (
    
    
    <context.Provider value={{data,setdata}}>
<BrowserRouter> 
<Routes>
<Route path='/' element={<Home/>}/>
<Route path='/new' element={<New/>}/>
<Route path='/add' element={<Add/>}/>
<Route path='/update/:id' element={<Update/>}/>
<Route path='/part/:id' element={<Participantlist/>}/>



</Routes>


</BrowserRouter>
</context.Provider>
  );
}

export default App;
