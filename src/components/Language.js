import React, { Component } from 'react';

class Language extends Component {

    render() {

        return(
            <li className={`language ${this.props.class}`} onClick={this.props.loadData}>
                {this.props.lang}
            </li>
        )
    }
}

export default Language;