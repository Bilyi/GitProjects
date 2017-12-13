import React, { Component } from 'react';

class Pagination extends Component {

    render() {
        return(
            <li className={`pagination ${this.props.class}`} onClick={this.props.selectPage}>
                {this.props.page}
            </li>
        )
    }
}

export default Pagination;