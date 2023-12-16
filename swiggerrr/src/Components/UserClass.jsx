import React from "react";
class UserClass extends React.Component{
    constructor(props){
        super(props) 
        this.state={
            UserDetails:{
                name:"",

            }
        }

    }
     async componentDidMount(){
        const data = await  fetch("https://api.github.com/users/mahkumar13")
        const json= await data.json()
        console.log(json)
       this.setState({
        UserDetails:json
       })
    }
    render(){
        return(
            <div>
             <img alt="logo" src={this.state.UserDetails.avatar_url} style={{height:"400px",margin:"10px"}}></img>   
            <h2> Name : {this.state.UserDetails.name} </h2>
            <h3>Location :{this.state.UserDetails.location} </h3>
            <h2>Bio :{this.state.UserDetails.bio}</h2>
            <h3> Followers :{ this.state.UserDetails.followers}</h3>
            <h3>Company :{this.state.UserDetails.company}</h3>
            <h4>Contact :8084008229</h4>
           </div>
         
        )
    }
}

export default UserClass