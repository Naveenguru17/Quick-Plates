import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);
        console.log("child constructor");
        this.state={
            userInfo:{
                name:"Dummy",
                location:"Default",
            }
        }
    }
    async componentDidMount(){
        const data=await fetch("https://api.github.com/users/naveenguru17");
        const json=await data.json();
        console.log(json);
        this.setState({
            userInfo:json,
        });

    }
    render(){
        console.log("child render");
        const {login,email}=this.state.userInfo;
        return(
            <div className="user-class">
                <h1>{login}</h1>
                <h1>{email}</h1>
    
                
            </div>
        )
    }
}

export default UserClass;