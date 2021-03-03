import { Octokit } from "https://cdn.skypack.dev/@octokit/rest";

const octokit = new Octokit();

octokit.request('GET /repos/Joaquinuriel/joaquinuriel.github.io/contents/db.json')
    .then(({ data }) => console.log(atob(data.content)))

let cont = btoa(JSON.stringify({
    name: "Joaquin",
    nickname: "Joaco",
    age: 16
}))

let sha = octokit.request('GET /repos/Joaquinuriel/joaquinuriel.github.io/contents/db.json')
    .then(({ data }) => data.sha)

const update = async (id) => octokit.request('PUT /repos/Joaquinuriel/joaquinuriel.github.io/contents/db.json', {
    message: "updated",
    content: cont,
    sha: id,
    committer: {
        name: "joaquinuriel",
        email: "joaquinuriel94@gmail.com",
        author: {
            name: "joaquinuriel",
            email: "joaquinuriel94@gmail.com"
        }
    }
}).then(({ data }) => console.log(atob(data.content)))


let doo = async () => update(await sha)
doo()