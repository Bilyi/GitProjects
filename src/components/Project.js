import React, { Component } from 'react';


class Project extends Component {

    render() {

        return(
            <tr>
                <td className="avatar-body">
                    <img
                        className="avatar"
                        src={this.props.avatar}
                        alt={'Avatar for ' + this.props.projectName}
                    />
                </td>
                <td className="project-name-body">{this.props.projectName}</td>
                <td className="author-body">{this.props.author}</td>
                <td className="stars-body">{this.props.stars}</td>
                <td className="issues-body">{this.props.issues}</td>
                <td className="private-body">{this.props.private}</td>
                <td className="repo-body"><a href={this.props.url} target="_blanck"><i className="fa fa-link" aria-hidden="true"></i></a></td>
            </tr>
        )
    }
}

export default Project;