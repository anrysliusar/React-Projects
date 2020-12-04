import React, {Component} from 'react';

class UserComponent extends Component {
    render() {
        let {item} = this.props
        return (
            <div>
                <div>{item.name}-{item.age}-{item.status.toString()}</div>
            </div>
        );
    }
}

export default UserComponent;