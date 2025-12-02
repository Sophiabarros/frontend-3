document.addEventListener("DOMContentLoaded", () => {
const button = document.querySelector("button")
button.onclick = (event) => {
    event.preventDefault()
    signUpUser()
}

async function signUpUser() {
    const name = document.querySelector("#name").value
    const nickname = document.querySelector("#nickname").value
    const email = document.querySelector("#email").value
    const password = document.querySelector("#password").value

    const user = {
        name,
        nickname,
        email,
        password
    }

    const response = await fetch("https://backend-3-i13i.vercel.app/cadastrar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ user })
    })
    .then(response => response.json())

    alert(response.message)

    window.location.href = "../../index.html"
}
})
