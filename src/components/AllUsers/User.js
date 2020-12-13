import React, {Component} from 'react';
import {Link, withRouter} from "react-router-dom";

class User extends Component {
    render() {
        let {user, match: {url} } = this.props
        return (
            <div>
                { user.name } - <Link to={`${url}/${user.id}`}>details</Link>
            </div>
        );
    }
}

export default withRouter(User);