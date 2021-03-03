import { Octokit } from "https://cdn.skypack.dev/@octokit/rest";

const octokit = new Octokit();

octokit.request('GET /repos/Joaquinuriel/joaquinuriel.github.io/contents/db.json')
    .then(({ data }) => console.log(JSON.parse(atob(data.content))))

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
    },
    author: {
        name: "joaquinuriel",
        email: "joaquinuriel94@gmail.com"
    }
}).then(({ data }) => console.log(atob(data.content)))


let doo = async () => update(await sha)
// doo()


// octokit.request("PATCH /user").then(user => console.log(user))


// LOCAL DB

fetch("/db.json")
	.then((file) => file.json())
    .then((jason) => {
        // LOG ENTRIES
        Object.keys(jason).forEach((key) => console.log({ [key]: jason[key] }));
        // LOG SORTED ENTRIES
		// Object.keys(jason).sort().forEach((key) => console.log({ [key]: jason[key] }));
	});