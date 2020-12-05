import React, {Component} from 'react';
import PostComponent from "./PostComponent";

class AllPosts extends Component {
    state  = {posts : []}
    numOfPosts = 10

    render() {
        let {posts} = this.state
        posts = posts.filter(post => {
            if (post.id < this.numOfPosts){
                return post
            }
        })
        return (
            <div>
                {
                    posts.map(post => {
                        return <PostComponent
                            item = {post}
                            key = {post.id}/>
                    })
                }
            </div>
        );
    }
    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(value => value.json())
            .then(postsFromAPI => {
                this.setState({posts : postsFromAPI})
            })

    }
}

export default AllPosts;