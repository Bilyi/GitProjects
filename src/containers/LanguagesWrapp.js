import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadGitData } from "../actions/index";

import Language from '../components/Language';



class LanguagesWrapp extends Component {

    render() {
        return(
            <div className="languages-wrapp">
                <ul className="languages-list">
                    {
                        this.props.languages.map((lang) => {
                            return (
                                <Language
                                    key={lang}
                                    lang={lang}
                                    loadData={this.props.loadData.bind(null, lang)}
                                    class={this.props.activeLanguage === lang ? 'active' : ''}
                                />
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        languages: state.gitReducer.languages,
        activeLanguage: state.gitReducer.activeLanguage
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        dispatch
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(LanguagesWrapp);