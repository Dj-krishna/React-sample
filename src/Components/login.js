import React, { Component } from 'react';

class login extends Component{
 
  constructor(props){
      super(props);

      this.state={
          userName: '',
          password: ''
      }
  }

  forUsername= e => {
      this.setState(
          {
              userName: e.target.value
          }
      )
  }

  forPassword= e => {
      this.setState(
          {
              password: e.target.value
          }
      )
  }

  toLogin= () =>
  (
   this.props.history.push(("/home"), {userName: this.state.userName})
  )
 
    render() {
        return(
            <div style={{}}>
                <span style={{color:'red'}}><b>Please login!</b></span><br />
                <span>User Name:</span>&nbsp;
                <input type="text" placeholder="username" onChange={this.forUsername} value={this.state.userName} required/><br />
                <span>Password&nbsp;&nbsp;&nbsp;:&nbsp;</span>
                <input type="text" placeholder="password" onChange={this.forPassword} value={this.state.password} required/><br /><br />
                <button style={{color: 'blue'}} onClick={this.toLogin}>Login</button>
            </div>
        )
    }
}

export default login
