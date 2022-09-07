import boardFactory from './board.js';
import toDoFactory from './todo.js';
import priorityOne from './red_priority.svg';
import priorityTwo from './orange_priority.svg';
import priorityThree from './yellow_priority.svg'

let lists = []
let tasks = boardFactory('Tasks')
let current = tasks
lists.push(tasks)

const tasksDiv = document.getElementById('tasks')

const title = document.getElementById('title')
const description = document.getElementById('description')
const date = document.getElementById('date')
const priorityForm = document.getElementById('priority')

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

const descriptionBG = document.querySelector('.bg-description')
const descriptionDiv = document.querySelector('.description-contents')
const closeDiv = document.querySelector('.close')

addItem.addEventListener('click', (e) => {
    formContainer.classList.remove('invisible')
})

newProject.addEventListener('click', (e) => {
    newListFormContainer.classList.remove('invisible')
})

closeDiv.addEventListener('click', () => {
    descriptionBG.style.display = 'none'
})

//function to display details of todo item
function showDetails(element) {
    while (descriptionDiv.firstChild) {
        descriptionDiv.removeChild(descriptionDiv.lastChild);
    }
    let detailsDiv = document.createElement('div')
    let titlePara = document.createElement('p')
    titlePara.textContent = element.title
    let descriptionPara = document.createElement('p')
    descriptionPara.textContent = element.description
    let dueDatePara = document.createElement('p')
    dueDatePara.textContent = element.dueDate
    let priorityPara = document.createElement('p')
    priorityPara.textContent = element.priority

    detailsDiv.appendChild(titlePara)
    detailsDiv.appendChild(descriptionPara)
    detailsDiv.appendChild(dueDatePara)
    detailsDiv.appendChild(priorityPara)

    detailsDiv.classList.add('details')
    descriptionDiv.appendChild(detailsDiv)
}

//function to display todo items in a list format
function populateList(arg) {
    while (listDiv.firstChild) {
        listDiv.removeChild(listDiv.lastChild);
    }

    let listTitle = document.createElement('h2')
    listTitle.textContent = arg.boardName
    listDiv.appendChild(listTitle)
    arg.list.forEach(element => {
        let newDiv = document.createElement('div')
        newDiv.textContent = element.title
        newDiv.classList.add('card')
        let completeDiv = document.createElement('div')
        let priorityImg = new Image()
        if (element.priority === '1') {
            priorityImg.src = priorityOne
        } else if (element.priority === '2') {
            priorityImg.src = priorityTwo
        } else {
            priorityImg.src = priorityThree
        }

        let detailsButton = document.createElement('button')
        detailsButton.textContent = 'Details'
        let button = document.createElement('button')
        button.textContent = 'Delete'
        newDiv.appendChild(completeDiv)
        newDiv.appendChild (priorityImg)
        newDiv.appendChild(detailsButton)
        newDiv.appendChild(button)
        

        if (element.done) {
            completeDiv.textContent = 'Complete';
            completeDiv.classList.add('complete')
            completeDiv.parentElement.classList.add('done')

        } else {
            completeDiv.classList.add('not-yet')
            completeDiv.textContent = 'Not Yet'
        }


        completeDiv.addEventListener('click', () => {
            if (element.done === false) {
                element.done = true
                completeDiv.classList.add('complete');
                completeDiv.classList.remove('not-yet');
                completeDiv.textContent = 'Complete';
                completeDiv.parentElement.classList.add('done')
            } else {
                element.done = false
                completeDiv.classList.add('not-yet');
                completeDiv.classList.remove('complete');
                completeDiv.textContent = 'Not Yet';
                completeDiv.parentElement.classList.remove('done')
            }
        })

        detailsButton.addEventListener('click', (e) =>{
            e.preventDefault()
            showDetails(element)
            descriptionBG.style.display = 'flex'
        })

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
        e.stopPropagation()
        populateList(tasks)
        current = tasks
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
    let taskPriority = priorityForm.value

    let task = toDoFactory(taskTitle, taskDescription, taskDate, taskPriority, false)
    current.addToDo(task)

    let newDiv = document.createElement('div')
    newDiv.textContent = task.title
    newDiv.classList.add('card')
    let completeDiv = document.createElement('div')
    completeDiv.textContent = 'Not Yet'
    completeDiv.classList.add('not-yet')
    let button = document.createElement('button')
    button.textContent = 'Delete'

    let priorityImg = new Image()
    if (task.priority === '1') {
        priorityImg.src = priorityOne
    } else if (task.priority === '2') {
        priorityImg.src = priorityTwo
    } else {
        priorityImg.src = priorityThree
    }

    newDiv.appendChild(completeDiv)
    newDiv.appendChild(priorityImg)
    newDiv.appendChild(button)

    completeDiv.addEventListener('click', () => {
        if (task.done === false) {
            task.done = true
            completeDiv.classList.add('complete');
            completeDiv.classList.remove('not-yet');
            completeDiv.textContent = 'Complete';
            completeDiv.parentElement.classList.add('done')
        } else {
            task.done = false
            completeDiv.classList.add('not-yet');
            completeDiv.classList.remove('complete');
            completeDiv.textContent = 'Not Yet';
            completeDiv.parentElement.classList.remove('done')
        }
    })

    button.addEventListener('click', (e) => {
        e.preventDefault()
        tasks.deleteToDo(task)
        button.parentElement.remove()
    })

    listDiv.appendChild(newDiv)
    formContainer.classList.add('invisible')
    // form.reset()

})

