import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Calculator from './Components/calculator';

class App extends React.Component{
    
    render(){
      return(
         <div className='bmi-app'>
            <Router>
               <Route exact path='/bmi'>
                    <Calculator/>
                </Route>  
            </Router> 

         </div>
      );

    }

}


export default App;
