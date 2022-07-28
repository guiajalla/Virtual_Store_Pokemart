class User {
    constructor(name, email, password){
        this.name = name;
        this.email = email;
        this.password = password;
    }
}

function signUp(){
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;

        var regexEmail = /^[\w\d._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/i;

        if(name==""){
            alert('Você não digitou seu nome!');
            return false;
        }
        if (!regexEmail.test(email)) {
            alert('Email inválido');
            return false;
        }
        if(password==""){
            alert('Você não digitou sua senha!');
            return false;
        }

        userObj = new User(name, email, password);
        
        let user = JSON.stringify(userObj);        
        $.getJSON('../php/signUp.php', {user: user}, function(data){
                if(data.check == 1){
                    alert(`E-mail (${data.email}) já está cadastrado!`);
                } else {
                    alert(`Cadastro realizado com sucesso!`);
                }
        });
}

function login(){
    let email = document.getElementById("emailLogin").value;
    let password = document.getElementById("passwordLogin").value;

    var regexEmail = /^[\w\d._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/i;

    if (!regexEmail.test(email)) {
        alert('Email inválido');
        return false;
    }
    if(password==""){
        alert('Você não digitou sua senha!');
        return false;
    }
    $.getJSON('../php/login.php', {email: email, password: password}, function(data){
        
        console.log(data);
});
}