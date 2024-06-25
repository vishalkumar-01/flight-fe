import React, { useEffect, useState } from 'react';
import { Button, Checkbox, FormControlLabel, TextField, Typography } from '@mui/material';
import './signup.css';
import axios from 'axios';

const SignUp = () => {
  const [name,setName]=useState("");
  const [uname,setUname]=useState("");
  const [email,setEmail]=useState("");
  const [phn,setPhn]=useState("");
  const [address,setAddress]=useState("");
  const [pass,setPass]=useState("");
  const [cpass,setCpass]=useState("");
  
  const handleClick=(e)=>{
    
    axios.post("http://localhost:8000/users",{name,uname,email,phn,address,pass,cpass})
    .then((res)=>{
      alert("Data inserted successfully");
      clear();
      e.preventDefault();
    })
    .catch((err)=>{
      alert(`Error fetching data : ${err}`);
    })
  }
  const clear=()=>{
    setName("");
    setUname("");
    setEmail("");
    setPhn("");
    setAddress("");
    setPass("");
    setCpass("");
  }

  // useEffect(()=>{
  //     handleread();
  // },[])

  return (
    <div style={{ paddingLeft: '15rem',paddingBottom:'5rem'}}>
      <br /><br />

      <div className="Auth" style={{width:' 850px',height: '760px'}}>
        <img style={{height:'100%',width:'47%'}}  src="https://img.freepik.com/free-photo/closeup-hands-writing-with-computer-keyboard_144627-46920.jpg?size=626&ext=jpg&ga=GA1.1.1803636316.1707955200&semt=ais" alt="" />
        <form>
          <Typography variant='h4'>Sign Up</Typography>
          <p>Explore new Features !</p>

          <div className="formgroup">

            <TextField
              type='text' label="Name" color="success" variant="outlined" fullWidth margin="normal" onChange={(e)=>{setName(e.target.value)}}/>
            {/* <Typography color="error" variant='span'>{errors?.name && errors.name.message}</Typography> */}

            <TextField
              type='text' label="Username" color="success" variant="outlined" fullWidth margin="normal" onChange={(e)=>{setUname(e.target.value)}}/>
            {/* <Typography color="error" variant='span'>{errors?.username && errors.username.message}</Typography> */}

            <TextField
              type='email' label="Email" color="success" variant="outlined" fullWidth margin="normal" onChange={(e)=>{setEmail(e.target.value)}}/>
            {/* <Typography color="error" variant='span'>{errors?.email && errors.email.message}</Typography> */}

            <TextField
              type='tel' label="Phone Number" color="success" variant="outlined" fullWidth margin="normal" onChange={(e)=>{setPhn(e.target.value)}}/>
            {/* <Typography color="error" variant='span'>{errors?.phone && errors.phone.message}</Typography> */}

            <TextField
              type='text' label="Address" color="success" variant="outlined" fullWidth margin="normal" onChange={(e)=>{setAddress(e.target.value)}}/>
            {/* <Typography color="error" variant='span'>{errors?.address && errors.address.message}</Typography> */}

            <TextField
              type='password' label="Password" color="success" variant="outlined" fullWidth margin="normal" onChange={(e)=>{setPass(e.target.value)}}/>
            {/* <Typography color="error" variant='span'>{errors?.psw && errors.psw.message}</Typography> */}

            <TextField
              type='password' label="Confirm Password" color="success" variant="outlined" fullWidth margin="normal" onChange={(e)=>{setCpass(e.target.value)}}/>
            {/* <Typography color="error" variant='span'>{errors?.confirmPsw && errors.confirmPsw.message}</Typography> */}

            <FormControlLabel control={<Checkbox color="success" />} label="Remember Me" />
            <Button type='submit' variant="contained" onClick={handleClick}>Create Account</Button>

          </div>
        </form>
        <br/><br/><br/>
      </div>
    </div>
  )
}

export default SignUp;
