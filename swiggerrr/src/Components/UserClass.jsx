import React from "react";
class UserClass extends React.Component{
    constructor(props){
        super(props)
        console.log(props)
        this.state={
            count:1,
            count2:2
        }
    }
    render(){
        return(
            <div className='user-card'>
            <h1 onClick={()=>{this.setState({
                count:this.state.count+1
            })}}> Count :{this.state.count}</h1>
            <h2> Name : {this.props.name}</h2>
            <h3>Location :Noida </h3>
            <h4>Contact :8084008229</h4>
          </div>
        )
    }

}
export default UserClass