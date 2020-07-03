import React, { Component } from 'react';
//import "./style.module.css";

class Table extends Component{
    constructor(props){
        super(props);
        this.state = {
            details: [{isActive: true, _id: "5c4cc2109487b0003924f1e3", 
                                        role: "Administrator", 
                                        firstName: "Test", 
                                        lastName: "Admin"}, 
                      {isActive: true, _id: "5e2cc6df7a91aaf820510a55", 
                                        role: "Volunteer", 
                                        firstName: "Sidd", 
                                        lastName: "Test"}, 
                      {isActive: true, _id: "5ede6be453a0480017164a5b", 
                                        role: "Volunteer", 
                                        firstName: "Volunteer 1", 
                                        lastName: "Test"}]
        }
    }

   /*renderTableHeader(){
        let header = Object.keys(this.state.details)
        return header.map((key, index) => {
            return <th key={index}>
                {key.toUpperCase()}
            </th>
        })
    }*/
  /* tableHeader(){
            return(
                <tr>
                    <th>_id</th>
                    <th>role</th>
                    <th>firstName</th>
                    <th>lastName</th>
                </tr>
            )
    }*/
    
    renderTableData() {
        return this.state.details.map((info, index)=> 
        { const { _id, role, firstName, lastName} = info

            return(
                <tr key = {index}>
                    <td>{_id}</td>
                    <td>{role}</td>
                    <td>{firstName}</td>
                    <td>{lastName}</td>
                </tr>
            )

        })
    }
    render() {
        return(
            <div className="container">
                <h3>React Dynamic Table!</h3>
                <div style={{paddingLeft:"33%"}}>
                <table id='details' style={{borderCollapse: "collapse"}} 
                                    style={{border: "2px solid blue"}}>
                    <thead>
                        <tr>
                            <th>_id</th>
                            <th>role</th>
                            <th>firstName</th>
                            <th>lastName</th>
                        </tr>
                    </thead>
                    <tbody>
                          {this.renderTableData()}
                    </tbody>
                </table>
                </div>
            </div>
        )
    }
}

export default Table