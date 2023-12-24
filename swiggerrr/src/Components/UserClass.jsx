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
            <div className="flex justify-center items-center  ">
             <img  className=""
             alt="logo" src={this.state.UserDetails.avatar_url} >
                </img> 
            </div>
            <div className= " m-4 text-center items-center">
            <h2 className="text-lg "> Name : {this.state.UserDetails.name} </h2>
            <h3>Location :{this.state.UserDetails.location} </h3>
            <h2>Bio :{this.state.UserDetails.bio}</h2>
            <h3> Followers :{ this.state.UserDetails.followers}</h3>
            <h3>Company :{this.state.UserDetails.company}</h3>
            <h4>Contact :8084008229</h4>
           </div>
           </div>
         
        )
    }
}

export default UserClass