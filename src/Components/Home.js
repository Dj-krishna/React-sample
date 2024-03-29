import React, {Component} from 'react';
import {getAllUsers} from '../actions/index';
import {deleteData} from '../actions/index';
import {connect} from 'react-redux';
import UserTable from './Table';

class Home extends Component{

    constructor(props) {
        super(props);
        }

    toLogout=()=>{
        this.props.history.push("/")
    }

    componentDidMount () {
        this.props.getAllUsers()
    }


    render() {
        debugger;
        console.log(this.props.fetchUsers)
        return(
            <div>
                <span>Welcome to Home Page!</span><br /><br />
                <UserTable userData = {this.props.state.fetchUsers}/>
                <button onClick={this.toLogout}>Logout</button>
            </div>
        )
    }
}

const mapStateToProps = state => {return {state}}
export default connect(mapStateToProps, {getAllUsers, deleteData}) (Home)
