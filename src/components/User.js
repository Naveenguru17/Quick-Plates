import React from "react"
import UserClass from "./UserClass";

class User extends React.Component{
    constructor(){
        super()
        console.log("parent constructor");
    }
    componentDidMount(){
        console.log("parent did mount")
    }
    render(){
        console.log("parent render")
        return(
            <div class="user">
                <h1>Name</h1>
                <h2>Location</h2>
                <h3>Contact</h3>
            </div>
        )
    }
}




export default User;