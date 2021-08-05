import React from 'react';
import {NavLink,useHistory,BrowserRouter as Router,Route,Link, Switch} from 'react-router-dom';
import Calculator from './Components/calculator';



function App(){
     
      return(
         <>
         <div>
            
            <Router>
           <Link to='/bmi'>GoTo </Link>
           </Router>
           
         </div>
         <div className='bmi-app'>
                    
             <Router>
               <Route exact path='/bmi'>
                    <Calculator/>
                 </Route>
               
            </Router> 

         </div>
         </>
      );


}


export default App;
