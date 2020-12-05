import React, {Component} from 'react';
import PostComponent from "./PostComponent";
import "./style/stylePost.css"

class AllPosts extends Component {
    state  = {posts : [], selectedPost: null}
    numOfPosts = 5

    render() {
        let {posts, selectedPost} = this.state
        posts = posts.filter(post => {
            if (post.id <= this.numOfPosts){
                return post
            }
        })

        return (
            <div>
                {
                    posts.map(post => {
                        return <PostComponent
                            post= {post}
                            key = {post.id}
                            onSelectPost = {this.onSelectPost}/>
                    })
                }
                <hr/>
                {
                    selectedPost && <div className={'selected-post'}>
                        <h3>{selectedPost.title}</h3>
                        <p>{selectedPost.body}</p>

                    </div>
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
    onSelectPost = (id) =>{
        let {posts} = this.state
        let foundPost = posts.find(post => post.id === id)
        this.setState({selectedPost: foundPost})
    }


}

export default AllPosts;