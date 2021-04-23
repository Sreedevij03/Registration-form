// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import IconButton from '@material-ui/core/IconButton';
// import DeleteIcon from '@material-ui/icons/Delete';

// function Deletebutton() {
//     return (
//         <div >
//         <IconButton aria-label="delete">
//           <DeleteIcon />
//         </IconButton>
            
//         </div>
//     )
// }

// export default Deletebutton 


import React from 'react'

const btnStyle= {
  backgroundColor:'#ff0000',
  color: '#fff',
  border: 'none',
  padding: '5px 10px',
  borderRadius: '50%',
  cursor: 'pointer',
  float: 'right'
}
 
function Deletebutton(user,deleteItem){

return (

  <div>
      
     
      <p>
    
      <button style={btnStyle}  onClick={ () => deleteItem(user.id)} >X</button>
     
      </p>
      
  </div>
)



}

export default Deletebutton;







