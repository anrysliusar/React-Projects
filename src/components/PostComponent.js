import React, {Component} from 'react';
import "./style/stylePost.css"

class PostComponent extends Component {
    render() {
        let {post, onSelectPost} = this.props
        return (
            <div>
                <h3 className={'post-title'}>{post.id}-{post.title}</h3>
                <p className={'post-body'}>{post.body}</p>
                <button onClick={() => onSelectPost(post.id)}>show this post below</button>
            </div>
        );
    }
}

export default PostComponent;