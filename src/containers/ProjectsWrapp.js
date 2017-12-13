import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectPage, searchData, changeLang } from "../actions/index";

import Project from '../components/Project';
import PaginationWrapp from '../components/PaginationWrapp';


class ProjectsWrapp extends Component {
    constructor(props) {
        super(props);

        this.selectPage = this.selectPage.bind(this);
        this.search = this.search.bind(this);
        this.changeLang = this.changeLang.bind(this);
    }

    selectPage(page) {
        this.props.onSelectPage(page);
    }

    search(e) {
        this.props.onSearch(e.target.value);
    }
    changeLang(e) {
        this.props.onChangeLang(e.target.value);
    }
    render() {
        const noImg = 'https://www.google.com.ua/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwiK76WYh_DXAhVDSZoKHYF6CGMQjRwIBw&url=http%3A%2F%2Fwap.shet-audany.gov.kz%2Fen%2F&psig=AOvVaw0xQb2rFFsw3OtfmCdDt5TO&ust=1512466566618619';
        const per_page = 10;
        const pages = Math.ceil(this.props.projects.length / per_page);
        const start_offset = (this.props.activePage - 1) * per_page;
        let start_count = 0;
        let pageNumber = [];
        for (let i = 1; i <= pages; i++) {
            pageNumber.push(i);
        }
        return(
            <div className="projects-wrapp">
                <div className="lang">
                    <button value='en' onClick={this.changeLang}>EN</button>
                    <button value='ua' onClick={this.changeLang}>UA</button>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th className="avatar-head">{this.props.lang.tableHeader.avatar}</th>
                            <th className="project-name-head">
                                <input onChange={this.search} placeholder={this.props.lang.tableHeader.project_name}/>
                            </th>
                            <th className="author-head">{this.props.lang.tableHeader.author}</th>
                            <th className="stars-head">{this.props.lang.tableHeader.stars}</th>
                            <th className="issues-head">{this.props.lang.tableHeader.issues}</th>
                            <th className="private-head">{this.props.lang.tableHeader.private}</th>
                            <th className="repo-head">{this.props.lang.tableHeader.link}</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        this.props.projects.map((p, index) => {
                            if (index >= start_offset && start_count < per_page) {
                                start_count++;
                                return (
                                    <Project
                                        key={p.id}
                                        projectName={p.name}
                                        author={p.owner.login}
                                        avatar={p.owner.avatar_url ? p.owner.avatar_url : noImg}
                                        projectUrl={p.url}
                                        stars={p.stargazers_count}
                                        language={p.language}
                                        issues={p.has_issues ? p.open_issues : 'no issues'}
                                        private={p.private ? 'Private' : 'Pablic'}
                                        url={p.html_url}
                                    />
                                )
                            }
                        })
                    }
                    </tbody>
                </table>
                <PaginationWrapp
                    projects={this.props.projects}
                    pageNumber={pageNumber}
                    pages={pages}
                    selectPage={this.selectPage}
                    activePage={this.props.activePage}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        projects: state.gitReducer.data,
        activePage: state.gitReducer.activePage,
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        onSelectPage: bindActionCreators(selectPage, dispatch),
        onSearch: bindActionCreators(searchData, dispatch),
        onChangeLang: bindActionCreators(changeLang, dispatch),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsWrapp);