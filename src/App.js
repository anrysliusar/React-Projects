import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom'
import './App.css'
import AllUsers from "./components/AllUsers/AllUsers";
import AllPosts from "./components/AllPosts/AllPosts";
import AllComments from "./components/AllComments/AllComments";

class App extends Component {

    render() {
        return (
            <Router>
                <div>
                    <div>
                        <Link to={"/users"}>users</Link>
                    </div>
                    <div>
                        <Link to={"/posts"}>posts</Link>
                    </div>
                    <div>
                        <Link to={"/comments"}>comments</Link>
                    </div>
                </div>
                <div className={'app-route'}>
                    <Switch>
                        <Route path={'/users'} render={() => <AllUsers />}/>
                        <Route path={'/posts'} render={() => <AllPosts />}/>
                        <Route path={'/comments'} render={() => <AllComments />}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;