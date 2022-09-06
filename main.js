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



let lists = []
let tasks = (0,_board_js__WEBPACK_IMPORTED_MODULE_0__["default"])('Task')
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

    let task = (0,_todo_js__WEBPACK_IMPORTED_MODULE_1__["default"])(taskTitle, taskDescription, taskDate, taskPriority, false)
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


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsWUFBWTtBQUNaOztBQUVBLGlFQUFlOzs7Ozs7Ozs7Ozs7OztBQ3JCZjtBQUNBLFlBQVk7QUFDWjs7QUFFQSxpRUFBZTs7Ozs7O1VDSmY7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOc0M7QUFDRjs7QUFFcEM7QUFDQSxZQUFZLHFEQUFZO0FBQ3hCO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IscURBQVk7QUFDOUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGVBQWUsb0RBQVc7QUFDMUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUEsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9ib2FyZC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdG9kby5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYm9hcmRGYWN0b3J5ID0gKGJvYXJkTmFtZSkgPT4ge1xuICAgIGNvbnN0IGxpc3QgPSBbXVxuICAgIGNvbnN0IGFkZFRvRG8gPSAodG9EbykgPT4ge1xuICAgICAgICBsaXN0LnB1c2godG9EbylcbiAgICB9XG4gICAgY29uc3QgZGVsZXRlVG9EbyA9ICh0b0RvKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHRvRG8udGl0bGUpXG4gICAgICAgIGNvbnNvbGUudGFibGUobGlzdClcbiAgICAgICAgbGlzdC5zcGxpY2UobGlzdC5pbmRleE9mKHRvRG8pLCAxKVxuICAgICAgICBjb25zb2xlLnRhYmxlKGxpc3QpXG4gICAgfVxuICAgIGNvbnN0IHByaW50TGlzdCA9ICgpID0+IHtcbiAgICAgICAgZm9yKGxldCBpIGluIGxpc3QpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGxpc3RbaV0udGl0bGUpXG4gICAgICAgIH1cbiAgICB9XG4gICBcblxuICAgIHJldHVybiB7Ym9hcmROYW1lLCBsaXN0LCBhZGRUb0RvLCBkZWxldGVUb0RvLCBwcmludExpc3R9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGJvYXJkRmFjdG9yeSIsImNvbnN0IHRvRG9GYWN0b3J5ID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGRvbmUgPSBmYWxzZSkgPT4ge1xuICAgIHJldHVybiB7dGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgZG9uZX1cbn1cblxuZXhwb3J0IGRlZmF1bHQgdG9Eb0ZhY3RvcnkiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBib2FyZEZhY3RvcnkgZnJvbSAnLi9ib2FyZC5qcyc7XG5pbXBvcnQgdG9Eb0ZhY3RvcnkgZnJvbSAnLi90b2RvLmpzJztcblxubGV0IGxpc3RzID0gW11cbmxldCB0YXNrcyA9IGJvYXJkRmFjdG9yeSgnVGFzaycpXG5sZXQgY3VycmVudCA9IHRhc2tzXG5saXN0cy5wdXNoKHRhc2tzKVxuXG5jb25zdCB0YXNrc0RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrcycpXG5cbmNvbnN0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlJylcbmNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc2NyaXB0aW9uJylcbmNvbnN0IGRhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF0ZScpXG5jb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmlvcml0eScpXG5cbmNvbnN0IHN1Ym1pdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdWJtaXQnKVxuXG5jb25zdCBsaXN0RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpc3QnKVxuXG5jb25zdCBuZXdMaXN0TmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsaXN0LW5hbWUnKVxuY29uc3QgbmV3TGlzdEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjcmVhdGUtbGlzdCcpXG5cbmNvbnN0IHByb2plY3REaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdHMnKVxuXG5jb25zdCBhZGRJdGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC1pdGVtJylcblxuY29uc3QgZm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtJylcbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3LXRhc2snKVxuXG5jb25zdCBuZXdQcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ldy1wcm9qZWN0JylcblxuY29uc3QgbmV3TGlzdEZvcm1Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3LWxpc3QnKVxuY29uc3QgbmV3TGlzdEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduZXctbGlzdC1mb3JtJylcblxuYWRkSXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgZm9ybUNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdpbnZpc2libGUnKVxufSlcblxubmV3UHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgbmV3TGlzdEZvcm1Db250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnaW52aXNpYmxlJylcbn0pXG5cbmZ1bmN0aW9uIHBvcHVsYXRlTGlzdChhcmcpIHtcbiAgICB3aGlsZSAobGlzdERpdi5maXJzdENoaWxkKSB7XG4gICAgICAgIGxpc3REaXYucmVtb3ZlQ2hpbGQobGlzdERpdi5sYXN0Q2hpbGQpO1xuICAgIH1cbiAgICBhcmcubGlzdC5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBsZXQgbmV3RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgbmV3RGl2LnRleHRDb250ZW50ID0gZWxlbWVudC50aXRsZVxuICAgICAgICBsZXQgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAgICAgYnV0dG9uLnRleHRDb250ZW50ID0gJ0RlbGV0ZSdcblxuICAgICAgICBuZXdEaXYuYXBwZW5kQ2hpbGQoYnV0dG9uKVxuXG5cbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgYXJnLmRlbGV0ZVRvRG8oZWxlbWVudClcbiAgICAgICAgICAgIGJ1dHRvbi5wYXJlbnRFbGVtZW50LnJlbW92ZSgpXG4gICAgICAgIH0pXG5cbiAgICAgICAgbGlzdERpdi5hcHBlbmRDaGlsZChuZXdEaXYpXG4gICAgfSk7XG59XG5cbnRhc2tzRGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBwb3B1bGF0ZUxpc3QodGFza3MpXG4gICAgY3VycmVudCA9IHRhc2tzXG59KVxuXG5uZXdMaXN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICBsZXQgbmFtZSA9IG5ld0xpc3ROYW1lLnZhbHVlXG4gICAgbGV0IG5ld0xpc3QgPSBib2FyZEZhY3RvcnkobmFtZSlcbiAgICBsaXN0cy5wdXNoKG5ld0xpc3QpXG4gICAgbGV0IG5ld0xpc3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIG5ld0xpc3REaXYudGV4dENvbnRlbnQgPSBuYW1lXG5cbiAgICBsZXQgZGVsZXRlTGlzdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgZGVsZXRlTGlzdEJ1dHRvbi50ZXh0Q29udGVudCA9ICdERUwnXG4gICAgbmV3TGlzdERpdi5hcHBlbmRDaGlsZChkZWxldGVMaXN0QnV0dG9uKSAgICBcblxuICAgIHByb2plY3REaXYuYXBwZW5kQ2hpbGQobmV3TGlzdERpdilcblxuICAgIGRlbGV0ZUxpc3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgcG9wdWxhdGVMaXN0KHRhc2tzKVxuICAgICAgICBjdXJyZW50ID0gdGFza3NcbiAgICAgICAgY29uc29sZS5sb2cobGlzdHMpXG4gICAgICAgIGxpc3RzLnNwbGljZShsaXN0cy5pbmRleE9mKG5ld0xpc3QpLCAxKVxuICAgICAgICBkZWxldGVMaXN0QnV0dG9uLnBhcmVudEVsZW1lbnQucmVtb3ZlKCkgICAgICAgIFxuICAgIH0pXG5cbiAgICBuZXdMaXN0RGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgcG9wdWxhdGVMaXN0KG5ld0xpc3QpXG4gICAgICAgIGN1cnJlbnQgPSBuZXdMaXN0XG4gICAgfSlcblxuICAgIG5ld0xpc3RGb3JtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2ludmlzaWJsZScpXG59KVxuXG5zdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIGxldCB0YXNrVGl0bGUgPSB0aXRsZS52YWx1ZVxuICAgIGxldCB0YXNrRGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbi52YWx1ZVxuICAgIGxldCB0YXNrRGF0ZSA9IGRhdGUudmFsdWVcbiAgICBsZXQgdGFza1ByaW9yaXR5ID0gcHJpb3JpdHkudmFsdWVcblxuICAgIGxldCB0YXNrID0gdG9Eb0ZhY3RvcnkodGFza1RpdGxlLCB0YXNrRGVzY3JpcHRpb24sIHRhc2tEYXRlLCB0YXNrUHJpb3JpdHksIGZhbHNlKVxuICAgIGN1cnJlbnQuYWRkVG9Ebyh0YXNrKVxuXG4gICAgbGV0IG5ld0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgbmV3RGl2LnRleHRDb250ZW50ID0gdGFzay50aXRsZVxuICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9ICdEZWxldGUnXG5cbiAgICBuZXdEaXYuYXBwZW5kQ2hpbGQoYnV0dG9uKVxuXG5cbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgdGFza3MuZGVsZXRlVG9Ebyh0YXNrKVxuICAgICAgICBidXR0b24ucGFyZW50RWxlbWVudC5yZW1vdmUoKVxuICAgIH0pXG5cbiAgICBsaXN0RGl2LmFwcGVuZENoaWxkKG5ld0RpdilcbiAgICBmb3JtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2ludmlzaWJsZScpXG4gICAgLy8gZm9ybS5yZXNldCgpXG5cbn0pXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==