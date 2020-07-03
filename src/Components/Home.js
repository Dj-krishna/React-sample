import React, {Component} from 'react';
import Table from './Table';

class Home extends Component{

    constructor(props) {
        super(props);
    }

    toLogout=()=>{
        this.props.history.push("/")
    }

    render() {
        return(
            <div>
                <span>Welcome to Home Page!</span><br /><br />
                <Table />
                <button onClick={this.toLogout}>Logout</button>
            </div>
        )
    }
}

export default Home
