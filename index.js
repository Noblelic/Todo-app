const emailInput = document.querySelector(".email");
const loginButton = document.querySelector(".login-btn");
const passwordInput = document.querySelector(".password");
const rememberMe = document.querySelector(".checkbox");


users = JSON.parse(localStorage.getItem('users') ?? [])
let Active_user;


loginButton.addEventListener('click', function(e){
e.preventDefault()

 Active_user = users.find(function(users){
   return users.email === emailInput.value && users.password === passwordInput.value  
})
localStorage.setItem('Active_user', JSON.stringify(Active_user))

if(Active_user ){
       alert('correct password login succesfully')
       window.location.href = "dashboard.html"
}else{
  alert('incorrect loggin details try again')

}


})



