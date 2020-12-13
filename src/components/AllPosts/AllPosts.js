import React, {Component} from 'react';
import UserServices from "../../services/UserService";
import Post from "./Post";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from 'react-router-dom'
import FullUser from "../AllUsers/WholeUsers";
import FullPost from "./WholePost";

class AllPosts extends Component {
    userService = new UserServices()
    state = {posts: []}

    async componentDidMount() {
        let posts = await this.userService.posts()
        this.setState({posts})
    }

    render() {
        let {posts} = this.state
        let {match: {url}} = this.props
        return (
            <div>
                <div>
                    <Switch>
                        <Route path={`${url}/:id`} render={(props) => {
                            let {match: {params: {id}}} = props
                            let post = posts.filter(post => post.id === +id)
                            console.log(post)
                            return <FullPost post={post[0]} id={id} />
                        }} />
                    </Switch>
                </div>
                {
                    posts.map(post => <Post post={post} key={post.id} />)
                }

            </div>
        );
    }
}

export default withRouter(AllPosts);