
import React from "react"

class UserClass extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            count: 0
        }
    }

    render(){
        const {name,location} = this.props
        return (
            <div className="text-bold"> 
                <p>Hey guys from class component </p>
                <p>{name}</p>
                <p>{location}</p>
                <p>Count : {this.state.count}</p>
                <button onClick={()=> {
                    this.setState({
                        count: this.state.count + 1
                    })
                }}> Increase Count </button>
            </div>
        )
    }
}

export default UserClass