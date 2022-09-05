import boardFactory from './board.js';
import toDoFactory from './todo.js';


let tasks = boardFactory('Task')

const title = document.getElementById('title')
const description = document.getElementById('description')
const date = document.getElementById('date')
const priority = document.getElementById('priority')

const submit = document.getElementById('submit')

const listDiv = document.querySelector('.list')

submit.addEventListener('click', (e) => {
    e.preventDefault()
    let taskTitle = title.value
    let taskDescription = description.value
    let taskDate = date.value
    let taskPriority = priority.value

    let task = toDoFactory(taskTitle, taskDescription, taskDate, taskPriority, false)
    tasks.addToDo(task)

    while (listDiv.firstChild) {
        listDiv.removeChild(listDiv.lastChild);
    }
    
    for(let i in tasks.list) {
        let newDiv = document.createElement('div')
        let button = document.createElement('button')
        button.textContent = 'Delete'
        button.addEventListener('click', (e) => {
            e.preventDefault()
            tasks.deleteToDo(tasks[i])
        })
        newDiv.textContent = tasks.list[i].title
        newDiv.appendChild(button)
        listDiv.appendChild(newDiv)
    }
})

