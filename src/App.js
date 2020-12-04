import React, {Component} from 'react';
import {cars} from "./dataBase/cars";
import CarComponent from "./components/CarComponent"
import {users} from "./dataBase/users";
import UserComponent from "./components/UserComponent";


class App extends Component {
    render() {
        return (
            <div>
                <div><h2>Автомобілі</h2>
                    <hr/>

                    {
                        cars.map((car, index) =>{
                            return <CarComponent
                                item = {car}
                                key = {index}/>
                        })
                    }
                    <hr/>
                </div>
                <div><h2>Користувачі</h2>
                    <hr/>
                    {
                        users.map((user, index) =>{
                            return <UserComponent
                                item = {user}
                                key = {index}/>
                        })
                    }
                    <hr/>
                </div>
            </div>

        );
    }
}

export default App;