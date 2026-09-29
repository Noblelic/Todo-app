'use strict';



let age = 12
let name = 'peace'
let fruit = "Apple"

localStorage.setItem('fruit')

localStorage.setItem('age', age)

localStorage.setItem('name', name)


localStorage.getItem('age')
localStorage.getItem('name')
localStorage.getItem('fruit')




arr = [2,3,5,6,7,8,7]
user = { 
    name : "prince",
    password: '436363rte',
    age: 24
}

localStorage.setItem("arr", JSON.stringify(arr) )
localStorage.setItem('user', JSON.stringify(user))


JSON.parse(localStorage.getItem(arr))

JSON.parse(localStorage.getItem(user))