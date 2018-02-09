import React, { Component } from 'react';

class Clocks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Currenttime: new Date().toLocaleString()
        }
        this.updateTime();

    }
    updateTime(){
        setInterval(()=>{
            this.setState({
                Currenttime: new Date().toLocaleString()
            })
        }
        ,1000)
    }




    render() {
        return (
            <h1> {this.state.Currenttime} </h1>
        )
    }
}
export default Clocks;