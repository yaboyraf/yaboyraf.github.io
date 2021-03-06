const form = document.getElementById('form')
const input = document.getElementById('input')
const submit = document.getElementById('submit')
const todoList = document.getElementById('todos')

const todo = []

function addTodo(newTodo) {
    const li = document.createElement('li')
    todo.push(newTodo)
    li.innerHTML = newTodo
    todoList.appendChild(li)

    //save in local storage
    localStorage.setItem('todos', JSON.stringify(todo))
}

submit.addEventListener('click', (e) => {
    e.preventDefault()
    addTodo(input.value)
    input.value = ''
})