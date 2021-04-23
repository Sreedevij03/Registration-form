import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import Deletebuttton from './Deletebutton';
import Deletebutton from './Deletebutton';




function Users({myuser,deleteItem}) {
    const styles={
      border:"2px solid black"
    }
    console.log('myuser',myuser)
    return (
         
    // <div style={{ height: 400, width: '100%' }}>
        
    //   <DataGrid  checkboxSelection rows={myuser} columns={columns}  pageSize={5}   />
      
     
      
    // </div>
    
    <table style={styles} >
      <caption><h2>User Details</h2></caption>
    <tbody >
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Mobile Number</th>
        <th>Username</th>
        <th>Gender</th>
    
      
       
      </tr>
      {myuser.map(user => {
        return (
          <tr>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.mobile}</td>
            <td>{user.username}</td>
            <td>{user.gender1}</td>
          
        
  
          </tr>
        );
      })}
    </tbody>
  </table>
   
         );
         
        
    
}

export default Users

