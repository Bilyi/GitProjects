import React, { Component } from 'react';

import Pagination from './Pagination';


class PaginationWrapp extends Component {

    render() {

        return(
            <ul className="pagination-list">
                <li className="pagination" onClick={this.props.selectPage.bind(null, 1)}><i className="fa fa-angle-double-left" aria-hidden="true"></i></li>
                <li className="pagination" onClick={this.props.selectPage.bind(null, this.props.activePage === 1 ? 1 : this.props.activePage - 1)}><i className="fa fa-angle-left" aria-hidden="true"></i></li>
                {
                    this.props.pageNumber.map((page) => {
                        return (
                            <Pagination
                                key={page}
                                page={page}
                                class={page === this.props.activePage ? 'active' : ''}
                                selectPage={this.props.selectPage.bind(null, page)}
                            />
                        )
                    })
                }
                <li className="pagination" onClick={this.props.selectPage.bind(null, this.props.activePage === this.props.pages ? this.props.pages : this.props.activePage + 1)}><i className="fa fa-angle-right" aria-hidden="true"></i></li>
                <li className="pagination" onClick={this.props.selectPage.bind(null, this.props.pages)}><i className="fa fa-angle-double-right" aria-hidden="true"></i></li>
            </ul>
        )
    }
}

export default PaginationWrapp;