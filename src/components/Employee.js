import React from "react";
import { FirstComponenet } from "../MyComponent";
class Employee extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            firstName: "Syed",
            lastName: "Rizvi",
            email: "syed@gmail.com"
        }    
    }


      updateEmployee(){
         this.setState({
            firstName: "Shazan",
            lastName: "Rizvi",
            email: "shazan@gmail.com"

         })
      }
    render() {
        return(
            <div>
               <h1>Employee Details</h1> 
               <p>{this.state.firstName}</p>
               <p>{this.state.lastName}</p>
               <p>{this.state.email}</p>
               <button onClick={() => this.updateEmployee()}>Update Employee</button>
            </div>
        )
    }
}
export default Employee