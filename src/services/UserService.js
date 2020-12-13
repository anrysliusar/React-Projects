export default class UserServices {
    url = 'https://jsonplaceholder.typicode.com'


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