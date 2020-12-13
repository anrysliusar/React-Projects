import React, {Component} from 'react';
import UserServices from "../../services/UserService";
import User from "./User";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from 'react-router-dom'
import FullUser from "./WholeUsers";

class AllUsers extends Component {
    userService = new UserServices()
    state = {users: []}
    async componentDidMount() {
        let users = await this.userService.users()
        this.setState({users})
    }

    render() {
        let {users} = this.state
        let { match: {url} } = this.props
        return (
            <div>
                {
                    users.map(user => <User user={user} key={user.id} />)
                }

                <div>
                    <Switch>
                        <Route path={`${url}/:id`} render={(props) => {
                            let {match: {params: {id}}} = props
                            return <FullUser id={id} />
                        }
                        } />
                    </Switch>
                </div>
            </div>
        );
    }
}

export default withRouter(AllUsers);