import React, { Component } from 'react';


class Loading extends Component {

    render() {
        return(
            <div className="loading">
                <h1>{this.props.lang.loading}</h1>
            </div>
        )
    }
}

export default Loading;