// Code YouTubeDebugger Component Here
import React, { Component } from 'react'

class YouTubeDebugger extends Component{
    state = {
        errors: [],
        user: null,
        settings: {
            bitrate: 8,
            video: {
            resolution: '1080p'
            }
        }
    }

    handleBitrateClick = (e) => {
        this.setState ({
            settings:{
                ...this.state.settings,
                bitrate: 12
            }
        })
    }

    handleResolutionClick = (e) => {
        this.setState ({
            settings:{
                ...this.state.settings,
                video:{
                    ...this.state.settings.video,
                    resolution:'720p'
                }
            }
        })
    }
    render(){
        return (
            <div>
                <button
                    className='bitrate'
                    onClick={this.handleBitrateClick}
                >bitrate!</button>
                <button
                    className='resolution'
                    onClick={this.handleResolutionClick}
                >Resolution!</button>
            </div>
        )
    }
}

export default YouTubeDebugger; 