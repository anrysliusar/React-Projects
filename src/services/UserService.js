export default class UserServices {
    url = 'https://jsonplaceholder.typicode.com'

    findUserById(id){
        return fetch(`${this.url}/users/${id}`)
            .then(value => value.json())
    }

    async users() {
        return fetch(`${this.url}/users`)
            .then(value => value.json())
    }

    async posts() {
        return fetch(`${this.url}/posts`)
            .then(value => value.json())
    }

    async comments() {
        return fetch(`${this.url}/comments`)
            .then(value => value.json())
    }
}
