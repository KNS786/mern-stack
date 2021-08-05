import React from 'react';
import axios from 'axios';
import './calculator.css';

class calculator extends React.Component{
     constructor(props){
         super(props);
         this.state={
           weight:0,
           height:0,
           formsubmit:false
         };
        
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);

     }

     handleChange(event){
     
         this.setState({
             [event.target.name]:event.target.value
         })
         
     }
     handleSubmit(event){
        const weight=Number(this.state.weight);
        const height=Number(this.state.height)/100;
        const BMI=weight/(height * height);
        if((weight > 0 && height > 0 )|| (weight < 300 && height > 300)) {
            axios.post('/bmi',{weight,height,bmi:BMI}).then(res=>{
                console.log(res.data);

            })

            if(BMI < 18.5) alert("Your underweight");
            else if(BMI > 18.5 && BMI < 26) alert("Your Normal");
            else if(BMI < 25 && BMI > 30) alert("Your overweight"); 
            else alert("Obsese"); 
            
        }else{
            alert("Enter valid input");
        }
       
   
         event.preventDefault();
     }
     

     render(){ 
            

         return(
         <div className="form-control">
              <h1>BMI Calculator</h1>
             <form onSubmit={this.handleSubmit}>
              <label>Weight(kg){` `}
               <input type='number' name='weight' value={this.state.value} onChange={this.handleChange} /><br/>
               </label>
               <label>Height(cm){` `}
               <input type='number' name='height' value={this.state.value} onChange={this.handleChange}/><br/>
               </label>
               <br/>
               <button type='submit'>Submit</button>
             </form>
          </div>


         );
     }


}
export default calculator;