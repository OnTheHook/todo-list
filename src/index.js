import boardFactory from './board.js';
import toDoFactory from './todo.js';

let lists = []
let tasks = boardFactory('Task')
let current = tasks
lists.push(tasks)

const title = document.getElementById('title')
const description = document.getElementById('description')
const date = document.getElementById('date')
const priority = document.getElementById('priority')

const submit = document.getElementById('submit')

const listDiv = document.querySelector('.list')

const newListName = document.getElementById('list-name')
const newListButton = document.getElementById('create-list')

const projectDiv = document.getElementById('projects')

newListButton.addEventListener('click', (e) => {
    e.preventDefault()
    let name = newListName.value
    let newList = boardFactory(name)
    lists.push(newList)
    let newListDiv = document.createElement('div')
    newListDiv.textContent = name
    projectDiv.appendChild(newListDiv)
    
    newListDiv.addEventListener('click', (e) => {
        while(listDiv.firstChild) {
            listDiv.removeChild(listDiv.lastChild);
        }
        current = newList
        console.log(lists)

    })
})

submit.addEventListener('click', (e) => {
    e.preventDefault()
    let taskTitle = title.value
    let taskDescription = description.value
    let taskDate = date.value
    let taskPriority = priority.value

    let task = toDoFactory(taskTitle, taskDescription, taskDate, taskPriority, false)
    current.addToDo(task)

    let newDiv = document.createElement('div')
    newDiv.textContent = task.title
    let button = document.createElement('button')
    button.textContent = 'Delete'

    newDiv.appendChild(button)


    button.addEventListener('click', (e) => {
        e.preventDefault()
        tasks.deleteToDo(task)
        button.parentElement.remove()
    })

    listDiv.appendChild(newDiv)

})

