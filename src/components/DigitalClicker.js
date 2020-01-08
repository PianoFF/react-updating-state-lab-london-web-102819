// Code DigitalClicker Component Here
import React, { Component } from 'react'

class DigitalClicker extends Component{
    state = {
        timesClicked: 0
    }
    handleClicker = (e) => {
        this.setState( previousState => {
            return {
                timesClicked: previousState.timesClicked + 1
            }
        })
    }
    render(){
        return(
            <button 
            id="clicker" 
            onClick={this.handleClicker}
            >{this.state.timesClicked}</button>
        )
    }
}
export default DigitalClicker; 