import React, { Component } from "react";

class Home extends Component{
    constructor(props){
        super(props);
    }

    clickLogout = () => {
        this.props.history.push("/")
    }
    render() {
        return(
            <div>
                 <h1>Welcome to Home Page!</h1>
                 <span>Click here to Looout</span>
                 <button onChange={this.clickLogout}>Logout</button>
            </div>
        );
    }
}

export default Home;