import React, {Component} from 'react';
import {Switch, Route, NavLink} from 'react-router-dom'
import './App.css'
import AllUsers from "./components/AllUsers/AllUsers";
import AllPosts from "./components/AllPosts/AllPosts";
import AllComments from "./components/AllComments/AllComments";

class App extends Component {

    render() {
        return (
            <div>
                <ul>
                    <li>
                        <NavLink to={"/users"}>users</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/posts"}>posts</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/comments"}>comments</NavLink>
                    </li>
                </ul>
                <div className={'app-route'}>
                    <Switch>
                        <Route path={'/users'} component={AllUsers}/>
                        <Route path={'/posts'} component={AllPosts}/>
                        <Route path={'/comments'} component={AllComments}/>>
                    </Switch>
                </div>
            </div>
        );
    }
}

export default App;
