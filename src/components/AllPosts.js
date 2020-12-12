import React, {Component} from 'react';
import Post from "../components/PostComponent";
import {FetchPosts} from "../services/FetchPosts";

class AllPosts extends Component {
    state = {posts: []}
    fetchPosts = new FetchPosts()
    num = 5
    render() {
        let {posts} = this.state
        let deleteFunc = (id) => {
            let index = posts.findIndex(element => {
                return element.id === id
            })
            this.state.posts.splice(index, 1)
            this.setState({posts: this.state.posts})
        }
        return (
            <div>
                <button onClick={() => this.showPosts(this.num)}>Show {this.num} posts</button>
                {
                    posts.map(post => {
                        return <Post post={post} key={post.id} deleteFunc={deleteFunc}/>
                    })
                }
            </div>
        );
    }

    async showPosts(num) {
        let result = await this.fetchPosts.fetchPosts(this.num)
        for (let i = 0; i < num; i++) {
            this.state.posts.push(result[i])

        }
        this.setState({posts: this.state.posts})
    }
}

export default AllPosts;