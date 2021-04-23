import React ,{useRef} from 'react'
import {useForm , Controller} from 'react-hook-form'
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Gender from './Gender'
import Alert from './Alert'
import { withRouter } from 'react-router-dom';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

// import { makeStyles } from '@material-ui/core/styles';
// import Alert from '@material-ui/lab/Alert';






function LoginForm(props) {
    const {register,handleSubmit,errors,control,watch} = useForm()
    const {Userupdate} = props
    const password = useRef({});
  password.current = watch("password", "");

    const formSubmit = (data) => {
        // console.log('my data',data)
        Userupdate(data)
        // console.log('user',data)
        // alert("Submitted succesfully")
        props.history.push('/loginpage')

    
    
      };
      const styles = {

        largeIcon: {
          width: 60,
          height: 60,
        },
      
      };
        
    


    return (
        <div>
           <AccountCircleIcon style={styles.largeIcon}> </AccountCircleIcon>
            <h1>Registration</h1>
            <form onSubmit={handleSubmit(formSubmit)} >
            <input type="text" 
              placeholder="Name" 
              name="name" 
              ref={register({required : 'Name is required!'})}/>
              {errors.name && <p className="error"> {errors.name.message}</p>}
              <br/>  
                
            <input type="text" 
              placeholder="Email" 
              name="email" 
              ref={register({required : 'Email is required!'})}/>
              {errors.email && <p className="error"> {errors.email.message}</p>}
              <br/>
              <input type="text" 
              placeholder="Mobile Number" 
              name="mobile" 
              ref={register({required : 'Mobile is required!'})}/>
               {errors.mobile && <p className="error"> {errors.mobile.message}</p>}
               <br/>
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
        {errors.password && <p>{errors.password.message}</p>}
        <br/>
        <input
        name="password_repeat"
        type="password"
        placeholder="ConfirmPassword" 
        ref={register({
          validate: value =>
            value === password.current || "The passwords do not match"
        })}
      />
      {errors.password_repeat && <p>{errors.password_repeat.message}</p>}

              <br/>
              
              <TextareaAutosize aria-label="minimum height" rowsMin={3} placeholder="Address" 
              name="address"
              ref={register({required : 'Address is required!'})}/>;
              {errors.address && <p className="error"> {errors.address.message}</p>}
              <br/>
              <Gender register={register} />
              <br/>
              
              <input type="submit"  />

            </form>
            
        </div>
    )
}

export default withRouter(LoginForm);
