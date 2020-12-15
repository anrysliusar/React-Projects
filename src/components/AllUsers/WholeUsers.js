import React, {Component} from 'react';
import UserServices from "../../services/UserService";

class WholeUser extends Component {
    state = {user: null}
    userService = new UserServices()
    componentDidMount() {
        const{id} =this.props

        setTimeout(()=>{
            this
                .userService
                .findUserById(id)
                .then(user => this.setState({user}))
        },2000)
    }

    render() {
        const {user} = this.state;
        console.log(user);
        return (
            <div>
                {
                    user
                    ? <div>{`${user.name} --- ${user.id} --- ${user.email} `}</div>
                        : <h1> LOADING...</h1>
                }
            </div>
        );
    }
}

export default WholeUser;
