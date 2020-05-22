import React from 'react';
import axios from 'axios';
import './SignUp.css';
import { Link } from 'react-router-dom';


class SignUp extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            fname : "",
            lname : "",
            phone : "",
            password : "",
            className1 : "",
            className2 : "",
            className3 : "",
            className4 : ""
        }
    }

    changed = (event) => {
       console.log("ss");
        console.log( event.target.name);
        this.setState( {[event.target.name]:event.target.value } );
        console.log(this.state);
    }

    checkBeforeSubmit = (event) => {
        let back = true;
        if ( this.state.fname === ''){
            this.setState({className1 : 'incomplete '});
            back = false;
        }else{
            this.setState({className1 : ""});
        }
        
        if (this.state.lname === '') {
            this.state.className2 = 'incomplete ';
            back = false;
        } else {
            this.state.className2 = "";
        }
        
        if(this.state.phone === ''){
            this.state.className3 = 'incomplete ';
            back = false;
        }else {
            this.state.className3 = "";
        }

        if(this.state.password === ''){
            this.state.className4 = 'incomplete ';
            back = false;
        } else {
            this.state.className4 = "";
        }
        return back;
    }
    
    submitted = (event) => {
       if ( this.checkBeforeSubmit(event)){
        event.preventDefault();
            console.log("asdd"); 
            axios.post("http://localhost:3001/signup",this.state).then((resp)=>{
                console.log("data",resp.data);
                if (resp.data == ''){
                    alert("phone number is already register");
                }
                else{
                    alert("You have been successfully registered.");
                    this.props.history.push('/login');
                }
            })           
        }else{
            event.preventDefault();
        }
    }

    componentDidMount = ()=>{
        console.log("Props of Signup Comp.: "+JSON.stringify(this.props));
    }

    render(){

        return(
            <div className="Wrapper">
                <form  onSubmit={this.submitted} >
                    <label for="fname">First name:</label><br/>
                    
                    <input 
                        className = {this.state.className1}
                        type="text" 
                        name="fname" 
                        onChange = {this.changed}  /><br/>
                    
                    <label 
                        for="lname">Last name:</label><br/>
                    
                    <input 
                        className = {this.state.className2}
                        type="text" 
                        name="lname" 
                        onChange = {this.changed} /><br/>
                    
                    <label 
                        for="lname">Phone number:</label><br/>
                    
                    <input 
                        className = {this.state.className3}
                        type="text"  
                        name ="phone" 
                        onChange = {this.changed} /><br/>
                    
                    <label 
                        for="lname">Password:</label><br/>
                    
                    <input 
                        className = {this.state.className4}
                        type="text" 
                        name = "password" 
                        onChange = {this.changed} /><br/>
                    <input type="submit" value="Submit"/>
                    <Link to="/login">Login_Page</Link>
                </form> 
            </div>
        );
    }
}
export default SignUp;
 