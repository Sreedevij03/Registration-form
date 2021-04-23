import React ,{useRef} from 'react'
import {useForm , Controller} from 'react-hook-form'
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Gender from './Gender'
import District from './District'
import Alert from './Alert'
import { withRouter } from 'react-router-dom';
import LockSharpIcon from '@material-ui/icons/LockSharp';
// import { makeStyles } from '@material-ui/core/styles';
// import Alert from '@material-ui/lab/Alert';






function LoginPage(props) {
    const {register,handleSubmit,errors,control,watch} = useForm()
    const {Userupdate} = props
    const password = useRef({});
  password.current = watch("password", "");

    const formSubmit = (data) => {
        // console.log('my data',data)
        // Userupdate(data)
        console.log('user',data)
        // alert("Submitted succesfully")
        props.history.push('/user')

    
    
      };
        
    


    return (
        <div>
          <h2>Sign In</h2>
          <LockSharpIcon></LockSharpIcon>
            <form onSubmit={handleSubmit(formSubmit)} >
           
               <input type="text" 
              placeholder="Username" 
              name="username" 
              ref={register({required : 'Username is required!'})}/>
              {errors.username && <p className="error"> {errors.username.message}</p>}
              <br/>  
              <input
                name="password"
                type="password"
                placeholder="Password" 
                ref={register({
                required: "You must specify a password",
                minLength: {
                value: 8,
                message: "Password must have at least 8 characters"
            }
            })}
        />
        <br/>
            
             
              <input type="submit"  />

            </form>
           
            
        </div>
    )
}

export default withRouter(LoginPage);
