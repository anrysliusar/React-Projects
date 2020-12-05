import React, {Component} from 'react';
import "./style/stylePost.css"

class PostComponent extends Component {
    render() {
        let {item} = this.props
        return (
            <div>
                <h3 className={'post-title'}>{item.id}-{item.title}</h3>
                <p className={'post-body'}>{item.body}</p>
            </div>
        );
    }
}

export default PostComponent;