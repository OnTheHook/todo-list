import boardFactory from './board.js';
import toDoFactory from './todo.js';

let lists = []
let tasks = boardFactory('Task')
let current = tasks
lists.push(tasks)

const tasksDiv = document.getElementById('tasks')

const title = document.getElementById('title')
const description = document.getElementById('description')
const date = document.getElementById('date')
const priority = document.getElementById('priority')

const submit = document.getElementById('submit')

const listDiv = document.querySelector('.list')

const newListName = document.getElementById('list-name')
const newListButton = document.getElementById('create-list')

const projectDiv = document.getElementById('projects')

const addItem = document.getElementById('add-item')

const formContainer = document.getElementById('form')
const form = document.getElementById('new-task')

const newProject = document.getElementById('new-project')

const newListFormContainer = document.getElementById('new-list')
const newListForm = document.createElement('new-list-form')

addItem.addEventListener('click', (e) => {
    formContainer.classList.remove('invisible')
})

newProject.addEventListener('click', (e) => {
    newListFormContainer.classList.remove('invisible')
})

function populateList(arg) {
    while (listDiv.firstChild) {
        listDiv.removeChild(listDiv.lastChild);
    }
    arg.list.forEach(element => {
        let newDiv = document.createElement('div')
        newDiv.textContent = element.title
        let button = document.createElement('button')
        button.textContent = 'Delete'

        newDiv.appendChild(button)


        button.addEventListener('click', (e) => {
            e.preventDefault()
            arg.deleteToDo(element)
            button.parentElement.remove()
        })

        listDiv.appendChild(newDiv)
    });
}

tasksDiv.addEventListener('click', (e) => {
    populateList(tasks)
    current = tasks
})

newListButton.addEventListener('click', (e) => {
    e.preventDefault()
    let name = newListName.value
    let newList = boardFactory(name)
    lists.push(newList)
    let newListDiv = document.createElement('div')
    newListDiv.textContent = name

    let deleteListButton = document.createElement('button')
    deleteListButton.textContent = 'DEL'
    newListDiv.appendChild(deleteListButton)    

    projectDiv.appendChild(newListDiv)

    deleteListButton.addEventListener('click', (e) => {
        e.preventDefault()
        populateList(tasks)
        current = tasks
        console.log(lists)
        lists.splice(lists.indexOf(newList), 1)
        deleteListButton.parentElement.remove()        
    })

    newListDiv.addEventListener('click', (e) => {
        populateList(newList)
        current = newList
    })

    newListFormContainer.classList.add('invisible')
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
    formContainer.classList.add('invisible')
    // form.reset()

})

