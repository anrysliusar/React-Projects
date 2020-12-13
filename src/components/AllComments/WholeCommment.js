import React, {Component} from 'react';

class WholeComment extends Component {
    render() {
        let {email, body} = this.props.comment !== undefined ? this.props.comment : ""
        return (
            <div>
                <h5>{email}</h5>
                <p>{body}</p>
            </div>
        );
    }
}

export default WholeComment;