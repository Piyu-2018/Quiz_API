import React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';

import Center from './Center';
import useForm from '../hooks/useForm'
import { createAPIEndpoint, ENDPOINTS } from '../api'
import useStateContext from '../hooks/useStateContext'
import { useNavigate } from 'react-router'


const getFreshModel = () => ({
  name:'',
  email:''
})

export default function Login() {

  const {context, setContext} =useStateContext();
  const navigate = useNavigate();

  const {
    values,
    setValues,
    errors,
    setErrors,
    handleInputChange
  } = useForm(getFreshModel);

  const login = e => {
    e.preventDefault();
    if (validate())
        createAPIEndpoint(ENDPOINTS.participant)
            .post(values)
            .then(res => {
                setContext({ participantId: res.data.participantID })
                navigate('/quiz')
            })
            .catch(err => console.log(err))
}

  const validate = () =>{
    let temp = {}
    temp.email=(/\S+@\S+\.\S+/).test(values.email)?"":"Email is not valid."
    temp.name=values.name!==""?"":"This field is required."
    setErrors(temp)
    return Object.values(temp).every(x => x==="" )
  }

  return (
    <Center>
      <Card sx={{width:400}}>
        <CardContent sx={{textAlign:'center'}}>
          <Typography variant="h3" sx={{my:3}} >Quiz App</Typography>
          <Box sx={{'& .MuiTextField-root':{m:1,width:'90%'}}}>
            <form noValidate autoComplete='off' onSubmit={login}>
              <TextField name="email" label="Email" value={values.email} onChange={handleInputChange} variant="outlined" {...(errors.email && {error:true, helperText:errors.email})}/>
              <TextField name="name" label="Name" value={values.name} onChange={handleInputChange} variant="outlined" {...(errors.name && {error:true, helperText:errors.name})} />
              <Button type="submit" variant="contained" size="large" sx={{width:'90%'}}>Start</Button>
            </form>
          </Box>
        </CardContent>
      </Card> 
    </Center>
     
  )
}