import React from 'react';
import {Link} from 'react-router-dom';
import ls from 'local-storage';

class Mainpage extends React.Component{
    render(){
        return(
            <div>
                Welcome {ls.get('fname')} {ls.get('lname')}<br/>
                <Link to="/"> SIGN UP PAGE</Link><br/>
                <Link to="/login"> LOG IN PAGE</Link>
            </div>
        );
    }
}

export default Mainpage;