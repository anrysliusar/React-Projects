import React, {Component} from 'react';
import UserServices from "../../services/UserService";
import Comment from "./Comment";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from 'react-router-dom'
import WholeComment from "./WholeCommment";

class AllComments extends Component {

    userService = new UserServices()
    state = {comments: []}
    async componentDidMount() {
        let comments = await this.userService.comments()
        this.setState({comments})
    }

    render() {
        let {comments} = this.state
        let {match: {url}} = this.props
        return (
            <div>
                <div>
                    <Route path={`${url}/:id`} render={(props) => {
                        let {match: {params: {id}}} = props
                        let comment = comments.filter(comment => comment.id === +id)
                        return <WholeComment comment={comment[0]} />
                    }} />
                </div>
                {
                    comments.map(comment => <Comment comment={comment} />)
                }
            </div>
        );
    }
}

export default withRouter(AllComments);