const emailInput = document.querySelector(".email");
const loginButton = document.querySelector(".login-btn");
const passwordInput = document.querySelector(".password");
const rememberMe = document.querySelector(".checkbox");


users = JSON.parse(localStorage.getItem('users') ?? [])



loginButton.addEventListener('click', function(e){
e.preventDefault()

let Active_user = users.find(function(users){
    if(users.email === emailInput.value && users.password === passwordInput.value ){
       alert('correct password login succesfully')
       window.location.href = "dashboard.html"
    }else{
      return   alert('incorrect loggin details try again')

    }
})


})
