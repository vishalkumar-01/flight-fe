// // import React from 'react';
// // import { Button, Checkbox, FormControlLabel, TextField, Typography } from '@mui/material';
// // import '../signup/signup.css';

// // const Login = () => {

// //   return (
// //     <div style={{ paddingLeft: '15rem' ,maxHeight: '500px'}}>
// //       <br/><br/><br/><br/><br/>
// //       <div className="Auth" style={{width:' 850px',height: '360px'}}>
// //         <img style={{height:'100%',width:'47%'}} src="https://img.freepik.com/free-photo/closeup-hands-writing-with-computer-keyboard_144627-46920.jpg?size=626&ext=jpg&ga=GA1.1.1803636316.1707955200&semt=ais" alt="" />
// //         <form>
// //           <Typography variant='h4'>Login</Typography>
// //           <p>Welcome back!</p>
          
// //           <div className="formgroup">
          
// //             <TextField 
// //               type='email' 
// //               label="Email" 
// //               color="success" 
// //               variant="outlined" 
// //             />
// //             {/* <Typography color="error" variant='span'>{errors?.email && errors.email.message}</Typography> */}

// //             <TextField 
// //               type='password' 
// //               label="Password" 
// //               color="success" 
// //               variant="outlined" 
// //             />
// //             {/* <Typography color="error" variant='span'>{errors?.psw && errors.psw.message}</Typography> */}

// //             <FormControlLabel 
// //               control={<Checkbox color="success" />} 
// //               label="Remember Me" 
// //             />
// //             <Button type='submit' variant="contained">Login</Button>

// //           </div>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Login;



// import React, { useState } from 'react';
// import { Button, Checkbox, FormControlLabel, TextField, Typography } from '@mui/material';
// import '../signup/signup.css';
// import axios from 'axios';

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     axios.post("http://localhost:8000/login", { email, pass: password })
//       .then((res) => {

//         console.log("Login successful:", res.data.message);
//         window.location.href = "/"
//       })
//       .catch((err) => {
//         console.error(`Login error: ${err.response.data.message}`);
//         alert(err.response.data.message);
//       });
//   };

//   return (
//     <div style={{ paddingLeft: '15rem', maxHeight: '500px' }}>
//       <br /><br /><br /><br /><br />
//       <div className="Auth" style={{ width: ' 850px', height: '360px' }}>
//         <img style={{ height: '100%', width: '47%' }} src="https://img.freepik.com/free-photo/closeup-hands-writing-with-computer-keyboard_144627-46920.jpg?size=626&ext=jpg&ga=GA1.1.1803636316.1707955200&semt=ais" alt="" />
//         <form onSubmit={handleSubmit}>
//           <Typography variant='h4'>Login</Typography>
//           <p>Welcome back!</p>

//           <div className="formgroup">

//             <TextField
//               type='email'
//               label="Email"
//               color="success"
//               variant="outlined"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//             {/* <Typography color="error" variant='span'>{errors?.email && errors.email.message}</Typography> */}

//             <TextField
//               type='password'
//               label="Password"
//               color="success"
//               variant="outlined"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//             {/* <Typography color="error" variant='span'>{errors?.psw && errors.psw.message}</Typography> */}

//             <FormControlLabel
//               control={<Checkbox color="success" />}
//               label="Remember Me"
//             />
//             <Button type='submit' variant="contained">Login</Button>

//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;


import React, { useState } from 'react';
import { Button, Checkbox, FormControlLabel, TextField, Typography } from '@mui/material';
import '../signup/signup.css';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post("http://localhost:8000/login", { email, pass: password })
      .then((res) => {
        console.log("Login successful:", res.data.message);
        alert("Login success...");
        window.location.href = "/";
      })
      .catch((err) => {
        console.error(`Login error: ${err.response.data.message}`);
        alert(err.response.data.message);
      });
  };

  return (
    <div style={{ paddingLeft: '15rem', maxHeight: '500px' }}>
      <br /><br /><br /><br /><br />
      <div className="Auth" style={{ width: '850px', height: '360px' }}>
        <img style={{ height: '100%', width: '47%' }} src="https://img.freepik.com/free-photo/closeup-hands-writing-with-computer-keyboard_144627-46920.jpg?size=626&ext=jpg&ga=GA1.1.1803636316.1707955200&semt=ais" alt="" />
        <form onSubmit={handleSubmit}>
          <Typography variant='h4'>Login</Typography>
          <p>Welcome back!</p>

          <div className="formgroup">

            <TextField
              type='email'
              label="Email"
              color="success"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <TextField
              type='password'
              label="Password"
              color="success"
              variant="outlined"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <FormControlLabel
              control={<Checkbox color="success" />}
              label="Remember Me"
            />
            <Button type='submit' variant="contained">Login</Button>

          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
