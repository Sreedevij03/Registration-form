import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

export default function RadioButtonsGroup({register}) {
  const [value, setValue] = React.useState('female');
  

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Gender</FormLabel>
      <RadioGroup aria-label="gender" name="gender1"  >
        <FormControlLabel value="female" control={<Radio inputRef={register({required : 'Gender is required!'})}/>} label="Female" />
        <FormControlLabel value="male" control={<Radio inputRef={register({required : 'Gender is required!'})}/>} label="Male" />
        <FormControlLabel value="other" control={<Radio inputRef={register({required : 'Gender is required!'})}/>} label="Other" />
        <FormControlLabel value="disabled" disabled control={<Radio inputRef={register}/>} label="(Disabled option)" />
      </RadioGroup>
    </FormControl>
  );
}