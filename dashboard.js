let username = document.querySelector('.Username')
let icon = document.querySelector('.profile-icon')
let tast_container = document.querySelector('.task-item')
let Total = document.querySelector('.Total')
let pending = document.querySelector('.pending')





const Active_user = JSON.parse(localStorage.getItem('Active_user'))


username.textContent = Active_user.email

let profile_icon = Active_user.email.split('')[0].toUpperCase()

icon.textContent = profile_icon


Active_user.tasks = [];






const Add_task = function(Tittle, Des, status){

    let todo = {
        tittle : Tittle,
        des : Des,
        status : status
    }

    Active_user.tasks.push(todo)





    let type = status === '' ? "complete" : "pending"
    let task = `
    <div class="task-item">

     <div class="task-info">

                        <h3>${Tittle}</h3>

                        <p>${Des}</p>

                    </div>

                    <span class="task-status pending-status">
                        ${type}
                    </span>
                    </div>
                    
                    `
                    tast_container.insertAdjacentHTML('beforebegin', task)
                    return task


}

Add_task("buy garry please", "garri is very important")
Add_task("buy Beans please", "garri is very important")
Add_task("buy fruit please", "garri is very important")
Add_task("buy fruit please", "garri is very important")

Total.textContent = Active_user.tasks.length 



console.log(Active_user)

