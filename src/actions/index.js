import {getUserApi} from "../api/api"
//import { unstable_renderSubtreeIntoContainer } from "react-dom"

export const getUserAction = (users) => ({
    type: 'GET_USERS',
    users
})

export const deleteDataAction = (users) =>({
    type: 'DELETE_USERS',
    users
})

export const deleteData = () => dispatch => {
    getUserApi().then(data => {
        dispatch(deleteDataAction(data))
    }).catch(err=>{
        console.log("Error : "+err)
    })
}

export const getAllUsers = () => dispatch => {
    getUserApi().then(data => {
        dispatch(getUserAction(data))
    }).catch(err=>{
        console.log("Error : "+err)
    })
}