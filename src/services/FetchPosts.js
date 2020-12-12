export class FetchPosts {
    url = 'https://jsonplaceholder.typicode.com/posts'
    idStart = 1

    fetchAllPosts = () => {
        return fetch(this.url)
            .then(value => value.json())
            .then(posts => {
                return posts
            })
    }

    fetchPostById = (id) => {
        return fetch(`${this.url}/${id}`).then(value => value.json()).then(value => value)
    }

    async fetchPosts(num) {
        let arrOfPosts = []
        for (let i = 0; i < num; i++) {
            let post = await this.fetchPostById(this.idStart)
            arrOfPosts.push(post)
            this.idStart++
        }
        return arrOfPosts
    }
}