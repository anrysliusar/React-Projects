import React, {Component} from 'react';
import {Link, withRouter} from "react-router-dom";

class Comment extends Component {
    render() {
        let {email, body, id} = this.props.comment
        let {match: {url}} = this.props
        return (
            <div>
                <h6>{email}</h6>
                <p>{body}</p>
                <Link to={`${url}/${id}`}>details</Link>
            </div>
        );
    }
}

export default withRouter(Comment);