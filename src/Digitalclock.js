import React, { Component } from 'react';

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            CurrentTime: new Date().toLocaleString()
        }
        this.updateTime();

    }
    updateTime() {
        setInterval( () => {
            this.setState({
                CurrentTime: new Date().toLocaleString()
            })
        }, 1000)
    }
    render() {
        return (
            <h1> {this.state.CurrentTime} </h1>
        )
    }
}
export default Clock;