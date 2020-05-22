import React from 'react';
import Axios from 'axios';
import ls from 'local-storage';
import { Link } from 'react-router-dom';

class Login extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            phone : "",
            password : ""
        }
    }

    changed = (event) => {
        this.setState( { [event.target.name]:event.target.value } );
    }

    submitted = (event) => {
        event.preventDefault();
        // console.log("login"+this.state.phone);
        Axios.post('http://localhost:3001/login',this.state).then((resp) => {
            if(resp.data[0] == undefined ){
                alert("Incorrect phone and password");
            }else{
                ls.set('fname',resp.data[0].fname);
                ls.set('lname',resp.data[0].lname);
                this.props.history.push('/MainPage');
            }
        })
    }

    render(){
        return(
            <div>
                <form onSubmit={this.submitted}>
                
                    <label for="phone">Phone number:</label><br/>
                    
                    <input 
                        type="text" 
                        name="phone"  
                        onChange={this.changed}/><br/>
                    
                    <label for="password">Password:</label><br/>
                    
                    <input 
                        type="text" 
                        name="password" 
                        onChange={this.changed}/><br/>
                    <input type="submit" value="Submit"/>
                    <Link to="/">SIGN UP</Link>
                </form>
            </div>
        );
    }
}

export default Login; 