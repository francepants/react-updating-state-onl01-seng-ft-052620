// Code ClickityClick Component Here
import React, { Component } from 'react'

export class ClickityClick extends Component {
    constructor() {
        super()
        //define initial state
        this.state = {
            hasBeenClicked: false
        }
    }

    // To update our state, we use this.setState() and pass in an object. This object will get merged with the current state. When the state has been updated, our component re-renders automatically 
    handleClick = () => {
        this.setState({
            hasBeenClicked: true
        }, () => console.log(this.state.hasBeenClicked))
    }

    render() {
        return (
            <div>
                <p>I have {this.state.hasBeenClicked ? null : 'not'} been clicked!</p>
                <button onClick={this.handleClick}>Click me!</button>
            </div>
        )
    }
}

export default ClickityClick
