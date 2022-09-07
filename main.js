/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/board.js":
/*!**********************!*\
  !*** ./src/board.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const boardFactory = (boardName) => {
    const list = []
    const addToDo = (toDo) => {
        list.push(toDo)
    }
    const deleteToDo = (toDo) => {
        console.log(toDo.title)
        console.table(list)
        list.splice(list.indexOf(toDo), 1)
        console.table(list)
    }
    const printList = () => {
        for(let i in list) {
            console.log(list[i].title)
        }
    }
   

    return {boardName, list, addToDo, deleteToDo, printList}
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (boardFactory);

/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const toDoFactory = (title, description, dueDate, priority, done = false) => {
    return {title, description, dueDate, priority, done}
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toDoFactory);

/***/ }),

/***/ "./src/orange_priority.svg":
/*!*********************************!*\
  !*** ./src/orange_priority.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "910e88525d3e9659745f.svg";

/***/ }),

/***/ "./src/red_priority.svg":
/*!******************************!*\
  !*** ./src/red_priority.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8ddb40426cb96a84f41c.svg";

/***/ }),

/***/ "./src/yellow_priority.svg":
/*!*********************************!*\
  !*** ./src/yellow_priority.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b99efea07293b8172073.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _board_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./board.js */ "./src/board.js");
/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo.js */ "./src/todo.js");
/* harmony import */ var _red_priority_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./red_priority.svg */ "./src/red_priority.svg");
/* harmony import */ var _orange_priority_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./orange_priority.svg */ "./src/orange_priority.svg");
/* harmony import */ var _yellow_priority_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./yellow_priority.svg */ "./src/yellow_priority.svg");






let lists = []
let tasks = (0,_board_js__WEBPACK_IMPORTED_MODULE_0__["default"])('Tasks')
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
            priorityImg.src = _red_priority_svg__WEBPACK_IMPORTED_MODULE_2__
        } else if (element.priority === '2') {
            priorityImg.src = _orange_priority_svg__WEBPACK_IMPORTED_MODULE_3__
        } else {
            priorityImg.src = _yellow_priority_svg__WEBPACK_IMPORTED_MODULE_4__
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
    let newList = (0,_board_js__WEBPACK_IMPORTED_MODULE_0__["default"])(name)
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

    let task = (0,_todo_js__WEBPACK_IMPORTED_MODULE_1__["default"])(taskTitle, taskDescription, taskDate, taskPriority, false)
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
        priorityImg.src = _red_priority_svg__WEBPACK_IMPORTED_MODULE_2__
    } else if (task.priority === '2') {
        priorityImg.src = _orange_priority_svg__WEBPACK_IMPORTED_MODULE_3__
    } else {
        priorityImg.src = _yellow_priority_svg__WEBPACK_IMPORTED_MODULE_4__
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


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvYm9hcmQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RvZG8uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBib2FyZEZhY3RvcnkgPSAoYm9hcmROYW1lKSA9PiB7XG4gICAgY29uc3QgbGlzdCA9IFtdXG4gICAgY29uc3QgYWRkVG9EbyA9ICh0b0RvKSA9PiB7XG4gICAgICAgIGxpc3QucHVzaCh0b0RvKVxuICAgIH1cbiAgICBjb25zdCBkZWxldGVUb0RvID0gKHRvRG8pID0+IHtcbiAgICAgICAgY29uc29sZS5sb2codG9Eby50aXRsZSlcbiAgICAgICAgY29uc29sZS50YWJsZShsaXN0KVxuICAgICAgICBsaXN0LnNwbGljZShsaXN0LmluZGV4T2YodG9EbyksIDEpXG4gICAgICAgIGNvbnNvbGUudGFibGUobGlzdClcbiAgICB9XG4gICAgY29uc3QgcHJpbnRMaXN0ID0gKCkgPT4ge1xuICAgICAgICBmb3IobGV0IGkgaW4gbGlzdCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2cobGlzdFtpXS50aXRsZSlcbiAgICAgICAgfVxuICAgIH1cbiAgIFxuXG4gICAgcmV0dXJuIHtib2FyZE5hbWUsIGxpc3QsIGFkZFRvRG8sIGRlbGV0ZVRvRG8sIHByaW50TGlzdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgYm9hcmRGYWN0b3J5IiwiY29uc3QgdG9Eb0ZhY3RvcnkgPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgZG9uZSA9IGZhbHNlKSA9PiB7XG4gICAgcmV0dXJuIHt0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBkb25lfVxufVxuXG5leHBvcnQgZGVmYXVsdCB0b0RvRmFjdG9yeSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCBib2FyZEZhY3RvcnkgZnJvbSAnLi9ib2FyZC5qcyc7XG5pbXBvcnQgdG9Eb0ZhY3RvcnkgZnJvbSAnLi90b2RvLmpzJztcbmltcG9ydCBwcmlvcml0eU9uZSBmcm9tICcuL3JlZF9wcmlvcml0eS5zdmcnO1xuaW1wb3J0IHByaW9yaXR5VHdvIGZyb20gJy4vb3JhbmdlX3ByaW9yaXR5LnN2Zyc7XG5pbXBvcnQgcHJpb3JpdHlUaHJlZSBmcm9tICcuL3llbGxvd19wcmlvcml0eS5zdmcnXG5cbmxldCBsaXN0cyA9IFtdXG5sZXQgdGFza3MgPSBib2FyZEZhY3RvcnkoJ1Rhc2tzJylcbmxldCBjdXJyZW50ID0gdGFza3Ncbmxpc3RzLnB1c2godGFza3MpXG5cbmNvbnN0IHRhc2tzRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tzJylcblxuY29uc3QgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGUnKVxuY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzY3JpcHRpb24nKVxuY29uc3QgZGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXRlJylcbmNvbnN0IHByaW9yaXR5Rm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmlvcml0eScpXG5cbmNvbnN0IHN1Ym1pdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdWJtaXQnKVxuXG5jb25zdCBsaXN0RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpc3QnKVxuXG5jb25zdCBuZXdMaXN0TmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsaXN0LW5hbWUnKVxuY29uc3QgbmV3TGlzdEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjcmVhdGUtbGlzdCcpXG5cbmNvbnN0IHByb2plY3REaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdHMnKVxuXG5jb25zdCBhZGRJdGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC1pdGVtJylcblxuY29uc3QgZm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtJylcbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3LXRhc2snKVxuXG5jb25zdCBuZXdQcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ldy1wcm9qZWN0JylcblxuY29uc3QgbmV3TGlzdEZvcm1Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3LWxpc3QnKVxuY29uc3QgbmV3TGlzdEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduZXctbGlzdC1mb3JtJylcblxuY29uc3QgZGVzY3JpcHRpb25CRyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5iZy1kZXNjcmlwdGlvbicpXG5jb25zdCBkZXNjcmlwdGlvbkRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZXNjcmlwdGlvbi1jb250ZW50cycpXG5jb25zdCBjbG9zZURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZScpXG5cbmFkZEl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGZvcm1Db250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnaW52aXNpYmxlJylcbn0pXG5cbm5ld1Byb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIG5ld0xpc3RGb3JtQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2ludmlzaWJsZScpXG59KVxuXG5jbG9zZURpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBkZXNjcmlwdGlvbkJHLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbn0pXG5cbi8vZnVuY3Rpb24gdG8gZGlzcGxheSBkZXRhaWxzIG9mIHRvZG8gaXRlbVxuZnVuY3Rpb24gc2hvd0RldGFpbHMoZWxlbWVudCkge1xuICAgIHdoaWxlIChkZXNjcmlwdGlvbkRpdi5maXJzdENoaWxkKSB7XG4gICAgICAgIGRlc2NyaXB0aW9uRGl2LnJlbW92ZUNoaWxkKGRlc2NyaXB0aW9uRGl2Lmxhc3RDaGlsZCk7XG4gICAgfVxuICAgIGxldCBkZXRhaWxzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBsZXQgdGl0bGVQYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgdGl0bGVQYXJhLnRleHRDb250ZW50ID0gZWxlbWVudC50aXRsZVxuICAgIGxldCBkZXNjcmlwdGlvblBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBkZXNjcmlwdGlvblBhcmEudGV4dENvbnRlbnQgPSBlbGVtZW50LmRlc2NyaXB0aW9uXG4gICAgbGV0IGR1ZURhdGVQYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgZHVlRGF0ZVBhcmEudGV4dENvbnRlbnQgPSBlbGVtZW50LmR1ZURhdGVcbiAgICBsZXQgcHJpb3JpdHlQYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgcHJpb3JpdHlQYXJhLnRleHRDb250ZW50ID0gZWxlbWVudC5wcmlvcml0eVxuXG4gICAgZGV0YWlsc0Rpdi5hcHBlbmRDaGlsZCh0aXRsZVBhcmEpXG4gICAgZGV0YWlsc0Rpdi5hcHBlbmRDaGlsZChkZXNjcmlwdGlvblBhcmEpXG4gICAgZGV0YWlsc0Rpdi5hcHBlbmRDaGlsZChkdWVEYXRlUGFyYSlcbiAgICBkZXRhaWxzRGl2LmFwcGVuZENoaWxkKHByaW9yaXR5UGFyYSlcblxuICAgIGRldGFpbHNEaXYuY2xhc3NMaXN0LmFkZCgnZGV0YWlscycpXG4gICAgZGVzY3JpcHRpb25EaXYuYXBwZW5kQ2hpbGQoZGV0YWlsc0Rpdilcbn1cblxuLy9mdW5jdGlvbiB0byBkaXNwbGF5IHRvZG8gaXRlbXMgaW4gYSBsaXN0IGZvcm1hdFxuZnVuY3Rpb24gcG9wdWxhdGVMaXN0KGFyZykge1xuICAgIHdoaWxlIChsaXN0RGl2LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgbGlzdERpdi5yZW1vdmVDaGlsZChsaXN0RGl2Lmxhc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgbGV0IGxpc3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcbiAgICBsaXN0VGl0bGUudGV4dENvbnRlbnQgPSBhcmcuYm9hcmROYW1lXG4gICAgbGlzdERpdi5hcHBlbmRDaGlsZChsaXN0VGl0bGUpXG4gICAgYXJnLmxpc3QuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgbGV0IG5ld0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIG5ld0Rpdi50ZXh0Q29udGVudCA9IGVsZW1lbnQudGl0bGVcbiAgICAgICAgbmV3RGl2LmNsYXNzTGlzdC5hZGQoJ2NhcmQnKVxuICAgICAgICBsZXQgY29tcGxldGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBsZXQgcHJpb3JpdHlJbWcgPSBuZXcgSW1hZ2UoKVxuICAgICAgICBpZiAoZWxlbWVudC5wcmlvcml0eSA9PT0gJzEnKSB7XG4gICAgICAgICAgICBwcmlvcml0eUltZy5zcmMgPSBwcmlvcml0eU9uZVxuICAgICAgICB9IGVsc2UgaWYgKGVsZW1lbnQucHJpb3JpdHkgPT09ICcyJykge1xuICAgICAgICAgICAgcHJpb3JpdHlJbWcuc3JjID0gcHJpb3JpdHlUd29cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHByaW9yaXR5SW1nLnNyYyA9IHByaW9yaXR5VGhyZWVcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBkZXRhaWxzQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAgICAgZGV0YWlsc0J1dHRvbi50ZXh0Q29udGVudCA9ICdEZXRhaWxzJ1xuICAgICAgICBsZXQgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAgICAgYnV0dG9uLnRleHRDb250ZW50ID0gJ0RlbGV0ZSdcbiAgICAgICAgbmV3RGl2LmFwcGVuZENoaWxkKGNvbXBsZXRlRGl2KVxuICAgICAgICBuZXdEaXYuYXBwZW5kQ2hpbGQgKHByaW9yaXR5SW1nKVxuICAgICAgICBuZXdEaXYuYXBwZW5kQ2hpbGQoZGV0YWlsc0J1dHRvbilcbiAgICAgICAgbmV3RGl2LmFwcGVuZENoaWxkKGJ1dHRvbilcbiAgICAgICAgXG5cbiAgICAgICAgaWYgKGVsZW1lbnQuZG9uZSkge1xuICAgICAgICAgICAgY29tcGxldGVEaXYudGV4dENvbnRlbnQgPSAnQ29tcGxldGUnO1xuICAgICAgICAgICAgY29tcGxldGVEaXYuY2xhc3NMaXN0LmFkZCgnY29tcGxldGUnKVxuICAgICAgICAgICAgY29tcGxldGVEaXYucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdkb25lJylcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29tcGxldGVEaXYuY2xhc3NMaXN0LmFkZCgnbm90LXlldCcpXG4gICAgICAgICAgICBjb21wbGV0ZURpdi50ZXh0Q29udGVudCA9ICdOb3QgWWV0J1xuICAgICAgICB9XG5cblxuICAgICAgICBjb21wbGV0ZURpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGlmIChlbGVtZW50LmRvbmUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5kb25lID0gdHJ1ZVxuICAgICAgICAgICAgICAgIGNvbXBsZXRlRGl2LmNsYXNzTGlzdC5hZGQoJ2NvbXBsZXRlJyk7XG4gICAgICAgICAgICAgICAgY29tcGxldGVEaXYuY2xhc3NMaXN0LnJlbW92ZSgnbm90LXlldCcpO1xuICAgICAgICAgICAgICAgIGNvbXBsZXRlRGl2LnRleHRDb250ZW50ID0gJ0NvbXBsZXRlJztcbiAgICAgICAgICAgICAgICBjb21wbGV0ZURpdi5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2RvbmUnKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmRvbmUgPSBmYWxzZVxuICAgICAgICAgICAgICAgIGNvbXBsZXRlRGl2LmNsYXNzTGlzdC5hZGQoJ25vdC15ZXQnKTtcbiAgICAgICAgICAgICAgICBjb21wbGV0ZURpdi5jbGFzc0xpc3QucmVtb3ZlKCdjb21wbGV0ZScpO1xuICAgICAgICAgICAgICAgIGNvbXBsZXRlRGl2LnRleHRDb250ZW50ID0gJ05vdCBZZXQnO1xuICAgICAgICAgICAgICAgIGNvbXBsZXRlRGl2LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZG9uZScpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgZGV0YWlsc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PntcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgc2hvd0RldGFpbHMoZWxlbWVudClcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uQkcuc3R5bGUuZGlzcGxheSA9ICdmbGV4J1xuICAgICAgICB9KVxuXG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgIGFyZy5kZWxldGVUb0RvKGVsZW1lbnQpXG4gICAgICAgICAgICBidXR0b24ucGFyZW50RWxlbWVudC5yZW1vdmUoKVxuICAgICAgICB9KVxuXG4gICAgICAgIGxpc3REaXYuYXBwZW5kQ2hpbGQobmV3RGl2KVxuICAgIH0pO1xufVxuXG50YXNrc0Rpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgcG9wdWxhdGVMaXN0KHRhc2tzKVxuICAgIGN1cnJlbnQgPSB0YXNrc1xufSlcblxubmV3TGlzdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgbGV0IG5hbWUgPSBuZXdMaXN0TmFtZS52YWx1ZVxuICAgIGxldCBuZXdMaXN0ID0gYm9hcmRGYWN0b3J5KG5hbWUpXG4gICAgbGlzdHMucHVzaChuZXdMaXN0KVxuICAgIGxldCBuZXdMaXN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBuZXdMaXN0RGl2LnRleHRDb250ZW50ID0gbmFtZVxuXG4gICAgbGV0IGRlbGV0ZUxpc3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIGRlbGV0ZUxpc3RCdXR0b24udGV4dENvbnRlbnQgPSAnREVMJ1xuICAgIG5ld0xpc3REaXYuYXBwZW5kQ2hpbGQoZGVsZXRlTGlzdEJ1dHRvbilcblxuICAgIHByb2plY3REaXYuYXBwZW5kQ2hpbGQobmV3TGlzdERpdilcblxuICAgIGRlbGV0ZUxpc3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICBwb3B1bGF0ZUxpc3QodGFza3MpXG4gICAgICAgIGN1cnJlbnQgPSB0YXNrc1xuICAgICAgICBsaXN0cy5zcGxpY2UobGlzdHMuaW5kZXhPZihuZXdMaXN0KSwgMSlcbiAgICAgICAgZGVsZXRlTGlzdEJ1dHRvbi5wYXJlbnRFbGVtZW50LnJlbW92ZSgpXG4gICAgfSlcblxuICAgIG5ld0xpc3REaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBwb3B1bGF0ZUxpc3QobmV3TGlzdClcbiAgICAgICAgY3VycmVudCA9IG5ld0xpc3RcbiAgICB9KVxuXG4gICAgbmV3TGlzdEZvcm1Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnaW52aXNpYmxlJylcbn0pXG5cbnN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgbGV0IHRhc2tUaXRsZSA9IHRpdGxlLnZhbHVlXG4gICAgbGV0IHRhc2tEZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uLnZhbHVlXG4gICAgbGV0IHRhc2tEYXRlID0gZGF0ZS52YWx1ZVxuICAgIGxldCB0YXNrUHJpb3JpdHkgPSBwcmlvcml0eUZvcm0udmFsdWVcblxuICAgIGxldCB0YXNrID0gdG9Eb0ZhY3RvcnkodGFza1RpdGxlLCB0YXNrRGVzY3JpcHRpb24sIHRhc2tEYXRlLCB0YXNrUHJpb3JpdHksIGZhbHNlKVxuICAgIGN1cnJlbnQuYWRkVG9Ebyh0YXNrKVxuXG4gICAgbGV0IG5ld0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgbmV3RGl2LnRleHRDb250ZW50ID0gdGFzay50aXRsZVxuICAgIG5ld0Rpdi5jbGFzc0xpc3QuYWRkKCdjYXJkJylcbiAgICBsZXQgY29tcGxldGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbXBsZXRlRGl2LnRleHRDb250ZW50ID0gJ05vdCBZZXQnXG4gICAgY29tcGxldGVEaXYuY2xhc3NMaXN0LmFkZCgnbm90LXlldCcpXG4gICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgYnV0dG9uLnRleHRDb250ZW50ID0gJ0RlbGV0ZSdcblxuICAgIGxldCBwcmlvcml0eUltZyA9IG5ldyBJbWFnZSgpXG4gICAgaWYgKHRhc2sucHJpb3JpdHkgPT09ICcxJykge1xuICAgICAgICBwcmlvcml0eUltZy5zcmMgPSBwcmlvcml0eU9uZVxuICAgIH0gZWxzZSBpZiAodGFzay5wcmlvcml0eSA9PT0gJzInKSB7XG4gICAgICAgIHByaW9yaXR5SW1nLnNyYyA9IHByaW9yaXR5VHdvXG4gICAgfSBlbHNlIHtcbiAgICAgICAgcHJpb3JpdHlJbWcuc3JjID0gcHJpb3JpdHlUaHJlZVxuICAgIH1cblxuICAgIG5ld0Rpdi5hcHBlbmRDaGlsZChjb21wbGV0ZURpdilcbiAgICBuZXdEaXYuYXBwZW5kQ2hpbGQocHJpb3JpdHlJbWcpXG4gICAgbmV3RGl2LmFwcGVuZENoaWxkKGJ1dHRvbilcblxuICAgIGNvbXBsZXRlRGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBpZiAodGFzay5kb25lID09PSBmYWxzZSkge1xuICAgICAgICAgICAgdGFzay5kb25lID0gdHJ1ZVxuICAgICAgICAgICAgY29tcGxldGVEaXYuY2xhc3NMaXN0LmFkZCgnY29tcGxldGUnKTtcbiAgICAgICAgICAgIGNvbXBsZXRlRGl2LmNsYXNzTGlzdC5yZW1vdmUoJ25vdC15ZXQnKTtcbiAgICAgICAgICAgIGNvbXBsZXRlRGl2LnRleHRDb250ZW50ID0gJ0NvbXBsZXRlJztcbiAgICAgICAgICAgIGNvbXBsZXRlRGl2LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZG9uZScpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0YXNrLmRvbmUgPSBmYWxzZVxuICAgICAgICAgICAgY29tcGxldGVEaXYuY2xhc3NMaXN0LmFkZCgnbm90LXlldCcpO1xuICAgICAgICAgICAgY29tcGxldGVEaXYuY2xhc3NMaXN0LnJlbW92ZSgnY29tcGxldGUnKTtcbiAgICAgICAgICAgIGNvbXBsZXRlRGl2LnRleHRDb250ZW50ID0gJ05vdCBZZXQnO1xuICAgICAgICAgICAgY29tcGxldGVEaXYucGFyZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdkb25lJylcbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgdGFza3MuZGVsZXRlVG9Ebyh0YXNrKVxuICAgICAgICBidXR0b24ucGFyZW50RWxlbWVudC5yZW1vdmUoKVxuICAgIH0pXG5cbiAgICBsaXN0RGl2LmFwcGVuZENoaWxkKG5ld0RpdilcbiAgICBmb3JtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2ludmlzaWJsZScpXG4gICAgLy8gZm9ybS5yZXNldCgpXG5cbn0pXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==