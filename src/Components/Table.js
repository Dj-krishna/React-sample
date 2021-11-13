import React from 'react'
import './style.module.css'

const UserHeader = () => {
    return (<tr>
        <th>_id</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Role Name</th>
        <th>Active</th>
    </tr>)
}

const UserData = (props) => {
    return (<tr>
        <td>{props.user._id}</td>
        <td>{props.user.firstName}</td>
        <td>{props.user.lastName}</td>
        <td>{props.user.role}</td>
        <td><input type="checkbox" checked={props.user.isActive} /></td>
        <td><button>DELETE</button></td>
    </tr>)
}

const TableStyle = {
 //   textAlign: 'center',
 //   borderCollapse: 'collapse',
 //   border: '2px solid blue',
    width: '90%'
}

//const HeaderStyle={
//    border: '1px solid #ddd',
//  padding: '8px'
//}

const UserTable = (props) => {
    return (
        <div>
            <table style={TableStyle}>
                <UserHeader/>
                {
                    props.userData.map(user => {
                        return < UserData user={user} />
                    })
                }
            </table>
        </div>
    )
}

export default UserTable;




/*import React from 'react';
//import "./style.module.css";

 const details= [{isActive: true, _id: "5c4cc2109487b0003924f1e3", 
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

/*    const Theader = () =>{
        return(
            <tr>
            <th>_id</th>
            <th>role</th>
            <th>firstName</th>
            <th>lastName</th>
        </tr>
        )
    }
     
    const TableData = (props) => {
       return details.map((info, index)=> 
        { const { _id, role, firstName, lastName} = info

            return(
                <tr>
                    <td>{props.details._id}</td>
                    <td>{props.details.role}</td>
                    <td>{props.details.firstName}</td>
                    <td>{props.details.lastName}</td>
                </tr>
            )

        }
    
    const UserTable = (props) =>{
            return(
               
            <div>
                <table>
                    <Theader />
                    {
                        props.TableData.map(TableData =>{
                            return <TableData details={TableData} />
                        })
                       
                    }
                </table>
            </div>
           )
        }
    }

export default UserTable */
