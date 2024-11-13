document.getElementById("login-form").addEventListener("submit",function(event){
    event.preventDefault()

    const username = document.querySelector('username').value
    const password = document.querySelector('password').value

    if (username === '' , password === ''){
        alert("Kérjük,töltse ki a mezőket")
        return;
    }
    if (username != username.value, password != password.value){
        alert("A felhasználónév vagy a jelszó nem egyezik!")
        return;
    }

    window.location.href = "main.html"
})