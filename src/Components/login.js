import React, {Component} from 'react';

class login extends Component{
    constructor (props){
        super(props);
    }
    clickHere = () =>{
        this.props.hostory.push("/Home")
    }
    render() {
        return(
            <div>
                <button onChange= {this.clickHere}>Login</button><br/><br/>
        
            </div>
        );
    }

}

export default login;