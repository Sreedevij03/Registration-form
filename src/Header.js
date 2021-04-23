import React from 'react'
import {Link} from 'react-router-dom'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

 function Header() {
    const styles = {

        largeIcon: {
          width: 60,
          height: 60,
        },
      
      };
    return (
        <div>
            <>
            <AccountCircleIcon style={styles.largeIcon}> </AccountCircleIcon>
            <h1>Registration</h1>
            {/* <Link to="/" style={linkStyle}>Home</Link>| */}
            {/* <Link to="/user" style={linkStyle}>Users</Link>
            <Link to="/loginpage" style={linkStyle}>LogIn</Link> */}
            </>

        </div>
    )
}
const linkStyle = {
    background: 'darkgray',
    color: 'white',
    textAlign:'center',
    

}

export default Header
