import React, {Component} from 'react';
import {NavLink, withRouter} from "react-router-dom";

const User=({user, match: {url} })=> {

        return (
            <div>
                { user.name } - <NavLink to={`${url}/${user.id}`}>details</NavLink>
            </div>
        )
}

export default withRouter(User);
