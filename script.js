function createAccount(){
    let user_name = document.getElementById('signup_username').value;
    let password = document.getElementById('signup_password').value;

    let setLocalName = localStorage.setItem('User Name',user_name)
    let setLocalPass = localStorage.setItem('Password', password)

    alert("You have create an account :)")

    window.open('sign_in.html', '_blank')
}

var store_name = localStorage.getItem('User Name')
var store_pass = localStorage.getItem('Password')

function loginAccount(){
    let user_name = document.getElementById('signin_username').value;
    let password = document.getElementById('signin_password').value

    if (user_name == store_name && password == store_pass){
        var nickname = localStorage.setItem('Nickname', user_name)
        var dialog_box = localStorage.setItem('Dialog',1)
        alert("Succes")
        window.open('index.html', '_blank')
    }

    else if (user_name != store_name && password != store_pass){
        alert("All wrong")
    }

    else if (user_name != store_name){
        alert("Username is wrong")
    }

    else if (password != store_pass){
        alert("Password is wrong")
    }

}

var home_nickname = localStorage.getItem('Nickname')
var dialog = localStorage.getItem('Dialog')

document.getElementById('account_name').innerHTML = home_nickname.slice(0,1)

if (dialog == 1){
    document.getElementById('dialog_box').style.display = 'none'
}

function logout(){
    localStorage.clear()
    document.getElementById('account_name').innerHTML = ""
    document.getElementById('dialog_box').style.display = ''
}

function goto(){
    window.open('sign_up.html','_self')
}





