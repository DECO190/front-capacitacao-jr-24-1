
async function getUsers() {
    let options = {
        method: "GET",
        headers: {name: "deco"}
    }

    let response = await fetch("http://localhost:8000/users", options)
    let json = await response.json()

    return json
}

(async () => {
    let users = (await getUsers()).users
    let container = document.querySelector(".users-container")
    for (let user of users) {
        container.innerHTML += `
            <div class="user">
                <p>${user.name}</p>
                <p>${user.adress}</p>
                <p>${user.age}</p>
                <p>${user.balance}</p>
            </div>
        `
    }
})()


async function createUser() {
    let options = {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            name: "Andre",
            age: 12,
            adress: "Rua quata",
            balance: 12
        })
    }

    let response = await fetch("http://localhost:8000/users", options)
    let json = await response.json()

    console.log(json)
}

// createUser()
