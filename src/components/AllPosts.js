import React, {Component} from 'react';
import Post from "../components/PostComponent";
import {FetchPosts} from "../services/FetchPosts";

class AllPosts extends Component {
    state = {posts: [], num: 5}
    fetchPosts = new FetchPosts()

    showPosts = async (num)=>{
        let posts = await this.fetchPosts.fetchPosts(num)
        this.setState({posts})
    }

    deleteFunc = (id) => {
        const {posts : oldPosts} = this.state;
        let posts = oldPosts.filter(element => element.id !== id)
        this.setState({posts})
    }

    render() {
        let {posts, num} = this.state

        return (
            <div>
                <button onClick={() => this.showPosts(num)}>Show {num} posts</button>
                {
                    posts.map(post => {
                        return <Post post={post} key={post.id} deleteFunc={this.deleteFunc}/>
                    })
                }
            </div>
        );
    }


}

export default AllPosts;
