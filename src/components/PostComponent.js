import React, {Component} from 'react';

class Post extends Component {
    render() {
        let {post, deleteFunc} = this.props
        return (
            <div>
                {post.id} - {post.title}
                <button onClick={() => deleteFunc(post.id)}>Delete</button>
            </div>
        );
    }
}

export default Post;