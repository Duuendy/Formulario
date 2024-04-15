function logar(){
    let username = document.getElementById('username').value
    let password = document.getElementById('password').value

    if(username === "admin" && password === "admin"){
        alert('Login bem-sucedido!');
    } else {
        alert('Nome de usuário ou senha incorretos!');
    }

}