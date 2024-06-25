import React from "react";
import { FaDownLeftAndUpRightToCenter } from "react-icons/fa6";
import Navbar from "./Navbar";
import ContactFrm from './contct';
import Footer from './footer';
import About from './about';
import Nav from './nav';
import Partner from './partner';
import Destination from './dest';
import LoginPage from './login';
import TodoList from "./todo";
function Home(){
    return(
        <div>
            <React.Fragment>
			<Navbar/>
			{/* <LoginPage/> */}
			<div style={{paddingTop : '70px'}}>
			<About/><hr />
			<Partner/>
			<Destination/>
			{/* <TodoList/><br/><br/><br/> */}
			</div>
			<Footer/>
            </React.Fragment>
        </div>
    )
}
export default Home;


// import React from 'react';
// import { BrowserRouter as Router, Routes} from 'react-router-dom';
// import Navbar from './Navbar';
// import Footer from './footer';
// import About from './about';
// import Partner from './partner';
// import Destination from './dest';
// import ContactFrm from './contct';
// import LoginPage from './login';
// import TodoList from './todo';

// function Home() {
//   return (
//     <>
//       <Navbar />
//       <div style={{ paddingTop: '70px' }}>
//         <Switch>
//           <Route exact path="/" component={About} />
//           <Route path="/partners" component={Partner} />
//           <Route path="/destinations" component={Destination} />
//           <Route path="/contact" component={ContactFrm} />
//           <Route path="/login" component={LoginPage} />
//           <Route path="/todo" component={TodoList} />
//         </Switch>
//       </div>
//       <Footer />
//     </Router>
//   );
// }

// export default Home;
