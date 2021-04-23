import React ,{useState}from 'react'
import LoginForm from './LoginForm'
import { BrowserRouter,Route } from "react-router-dom"
import Header from './Header'
import Users from './Users'
import LoginPage from './LoginPage'





function App() {

  const data=[]

  const [users,setUsers]=useState([])
  const Userupdate=(newdata)=>{
    console.log('Userupdate',newdata)
    setUsers(predata=>[...predata,newdata])

  }

  const deleteItem=(id)=>{
    
    setUsers(predata=>[...predata.filter (users=> users.id !== id )])

  }


  
  


  return (
   <BrowserRouter>
    <div className="App">
      <center>
        {/* <Header/> */}
       
        
        <Route path='/' exact render = {props => (<LoginForm Userupdate={Userupdate}/>)}/>
        <Route path="/user" render = {props => (<Users myuser={users} deleteItem={deleteItem}/>)}/>
        
        <Route path="/loginpage" render = {props => (<LoginPage Userupdate={Userupdate}/>)}/>
      
      
     
      </center>
      
      
    
    </div>
   </BrowserRouter>
  );
}

export default App;
