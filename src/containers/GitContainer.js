import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadGitData, selectLanguage, deleteData } from "../actions/index";

import LanguagesWrapp from './LanguagesWrapp';
import ProjectsWrapp from './ProjectsWrapp';
import Loading from '../components/Loading';

import {lang_en, lang_ua} from "../assets/lang/lang"


class GitContainer extends Component {
    constructor(props) {
        super(props);

        this.loadData = this.loadData.bind(this);
    }

    componentWillMount() {
        this.loadData();
    }

    loadData(language) {
        this.props.onloadGitData(language);
        this.props.onSelectLanguage(language);
    }

    renderGitInfo() {
        const lang = this.props.lang === 'en' ? lang_en : lang_ua;
        if(Object.keys(this.props.projects).length === 0) {
            return (
                <Loading lang={lang}/>
            )
        } else {
            return (
                <div className="container">
                    <LanguagesWrapp
                        loadData={this.loadData}
                        lang={lang}
                    />
                    <ProjectsWrapp lang={lang}/>
                </div>
            )
        }
    }

    render() {
        return(
            <div className="container-wrapp">
                {this.renderGitInfo()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        projects: state.gitReducer.projects,
        lang: state.gitReducer.lang,
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        onloadGitData: bindActionCreators(loadGitData, dispatch),
        onSelectLanguage: bindActionCreators(selectLanguage, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(GitContainer);