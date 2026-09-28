const checkbox = document.querySelector(".checkbox");
const emailInput = document.querySelector(".email");
const fullNameInput = document.querySelector(".fullname");
const confirmPasswordInput = document.querySelector(".confirm-password");
const password = document.querySelector(".password");
const form = document.querySelector('.register_form')
const registerButton = document.querySelector(".login-btn");



let users = []

registerButton.addEventListener('click', function(e){
e.preventDefault()



if(password.value === confirmPasswordInput.value ){
let newuser = {
    name : fullNameInput.value,
    email : emailInput.value,
    password: password.value
}

users.push(newuser)
alert('account successfully created')
form.reset()
window.location.href = "todo.html"
}else{
    alert('comfirm password or email or username')
}





console.log(users)

})