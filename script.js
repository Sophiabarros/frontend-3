function init(){
    navUl = document.querySelector("nav ul")

    const user = JSON.parse(sessionStorage.getItem("user"))

    if (user) {
        navUl.innerHTML += `
        <li><h2>Usuário: ${user.name}</h2></li>
        <li><button id="logout" onclick="logout()">Sair</button></li>        
        `

        return
    }

    navUl.innerHTML += `
    <li>
        <a href="./pages/login/login.html">Login</a>
    </li>
    `
}

function logout() {
    sessionStorage.removeItem("user")
    window.location.reload()
}


init()


