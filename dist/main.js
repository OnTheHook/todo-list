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

//function to create to do item div
function createToDoDiv(element, list) {
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
    newDiv.appendChild(priorityImg)
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

    detailsButton.addEventListener('click', (e) => {
        e.preventDefault()
        showDetails(element)
        descriptionBG.style.display = 'flex'
    })

    button.addEventListener('click', (e) => {
        e.preventDefault()
        list.deleteToDo(element)
        button.parentElement.remove()
    })

    return newDiv

}

//function to display todo items in a list format
function populateList(arg) {
    //deletes all the current children in the div containing the list
    while (listDiv.firstChild) {
        listDiv.removeChild(listDiv.lastChild);
    }

    let listTitle = document.createElement('h2')
    listTitle.textContent = arg.boardName
    listDiv.appendChild(listTitle)
    arg.list.forEach(ele => {
        listDiv.appendChild(createToDoDiv(ele, arg))
    });
}

tasksDiv.addEventListener('click', (e) => {
    populateList(tasks)
    current = tasks
    let children = projectDiv.children
    Array.from(children).forEach(child => {
        child.classList.remove('current')
    })
    tasksDiv.classList.add('current')
})

newListButton.addEventListener('click', (e) => {
    e.preventDefault()
    let name = newListName.value
    let newList = (0,_board_js__WEBPACK_IMPORTED_MODULE_0__["default"])(name)
    lists.push(newList)
    let newListDiv = document.createElement('div')
    newListDiv.textContent = name

    let deleteListButton = document.createElement('button')
    deleteListButton.textContent = 'Delete'
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
        let children = projectDiv.children
        Array.from(children).forEach(child => {
            child.classList.remove('current')
        })
        newListDiv.classList.add('current')
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

    listDiv.appendChild(createToDoDiv(task))
    formContainer.classList.add('invisible')
    // form.reset()

})


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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IndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdG9kby5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGJvYXJkRmFjdG9yeSA9IChib2FyZE5hbWUpID0+IHtcbiAgICBjb25zdCBsaXN0ID0gW11cbiAgICBjb25zdCBhZGRUb0RvID0gKHRvRG8pID0+IHtcbiAgICAgICAgbGlzdC5wdXNoKHRvRG8pXG4gICAgfVxuICAgIGNvbnN0IGRlbGV0ZVRvRG8gPSAodG9EbykgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyh0b0RvLnRpdGxlKVxuICAgICAgICBjb25zb2xlLnRhYmxlKGxpc3QpXG4gICAgICAgIGxpc3Quc3BsaWNlKGxpc3QuaW5kZXhPZih0b0RvKSwgMSlcbiAgICAgICAgY29uc29sZS50YWJsZShsaXN0KVxuICAgIH1cbiAgICBjb25zdCBwcmludExpc3QgPSAoKSA9PiB7XG4gICAgICAgIGZvcihsZXQgaSBpbiBsaXN0KSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhsaXN0W2ldLnRpdGxlKVxuICAgICAgICB9XG4gICAgfVxuICAgXG5cbiAgICByZXR1cm4ge2JvYXJkTmFtZSwgbGlzdCwgYWRkVG9EbywgZGVsZXRlVG9EbywgcHJpbnRMaXN0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBib2FyZEZhY3RvcnkiLCJjb25zdCB0b0RvRmFjdG9yeSA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBkb25lID0gZmFsc2UpID0+IHtcbiAgICByZXR1cm4ge3RpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGRvbmV9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHRvRG9GYWN0b3J5IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0IGJvYXJkRmFjdG9yeSBmcm9tICcuL2JvYXJkLmpzJztcbmltcG9ydCB0b0RvRmFjdG9yeSBmcm9tICcuL3RvZG8uanMnO1xuaW1wb3J0IHByaW9yaXR5T25lIGZyb20gJy4vcmVkX3ByaW9yaXR5LnN2Zyc7XG5pbXBvcnQgcHJpb3JpdHlUd28gZnJvbSAnLi9vcmFuZ2VfcHJpb3JpdHkuc3ZnJztcbmltcG9ydCBwcmlvcml0eVRocmVlIGZyb20gJy4veWVsbG93X3ByaW9yaXR5LnN2ZydcblxubGV0IGxpc3RzID0gW11cbmxldCB0YXNrcyA9IGJvYXJkRmFjdG9yeSgnVGFza3MnKVxubGV0IGN1cnJlbnQgPSB0YXNrc1xubGlzdHMucHVzaCh0YXNrcylcblxuY29uc3QgdGFza3NEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza3MnKVxuXG5jb25zdCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZScpXG5jb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjcmlwdGlvbicpXG5jb25zdCBkYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhdGUnKVxuY29uc3QgcHJpb3JpdHlGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByaW9yaXR5JylcblxuY29uc3Qgc3VibWl0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1Ym1pdCcpXG5cbmNvbnN0IGxpc3REaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlzdCcpXG5cbmNvbnN0IG5ld0xpc3ROYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xpc3QtbmFtZScpXG5jb25zdCBuZXdMaXN0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NyZWF0ZS1saXN0JylcblxuY29uc3QgcHJvamVjdERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0cycpXG5cbmNvbnN0IGFkZEl0ZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLWl0ZW0nKVxuXG5jb25zdCBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm0nKVxuY29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXctdGFzaycpXG5cbmNvbnN0IG5ld1Byb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3LXByb2plY3QnKVxuXG5jb25zdCBuZXdMaXN0Rm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXctbGlzdCcpXG5jb25zdCBuZXdMaXN0Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25ldy1saXN0LWZvcm0nKVxuXG5jb25zdCBkZXNjcmlwdGlvbkJHID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJnLWRlc2NyaXB0aW9uJylcbmNvbnN0IGRlc2NyaXB0aW9uRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRlc2NyaXB0aW9uLWNvbnRlbnRzJylcbmNvbnN0IGNsb3NlRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3NlJylcblxuYWRkSXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgZm9ybUNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdpbnZpc2libGUnKVxufSlcblxubmV3UHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgbmV3TGlzdEZvcm1Db250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnaW52aXNpYmxlJylcbn0pXG5cbmNsb3NlRGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGRlc2NyaXB0aW9uQkcuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xufSlcblxuLy9mdW5jdGlvbiB0byBkaXNwbGF5IGRldGFpbHMgb2YgdG9kbyBpdGVtXG5mdW5jdGlvbiBzaG93RGV0YWlscyhlbGVtZW50KSB7XG4gICAgd2hpbGUgKGRlc2NyaXB0aW9uRGl2LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgZGVzY3JpcHRpb25EaXYucmVtb3ZlQ2hpbGQoZGVzY3JpcHRpb25EaXYubGFzdENoaWxkKTtcbiAgICB9XG4gICAgbGV0IGRldGFpbHNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGxldCB0aXRsZVBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICB0aXRsZVBhcmEudGV4dENvbnRlbnQgPSBlbGVtZW50LnRpdGxlXG4gICAgbGV0IGRlc2NyaXB0aW9uUGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIGRlc2NyaXB0aW9uUGFyYS50ZXh0Q29udGVudCA9IGVsZW1lbnQuZGVzY3JpcHRpb25cbiAgICBsZXQgZHVlRGF0ZVBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBkdWVEYXRlUGFyYS50ZXh0Q29udGVudCA9IGVsZW1lbnQuZHVlRGF0ZVxuICAgIGxldCBwcmlvcml0eVBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBwcmlvcml0eVBhcmEudGV4dENvbnRlbnQgPSBlbGVtZW50LnByaW9yaXR5XG5cbiAgICBkZXRhaWxzRGl2LmFwcGVuZENoaWxkKHRpdGxlUGFyYSlcbiAgICBkZXRhaWxzRGl2LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uUGFyYSlcbiAgICBkZXRhaWxzRGl2LmFwcGVuZENoaWxkKGR1ZURhdGVQYXJhKVxuICAgIGRldGFpbHNEaXYuYXBwZW5kQ2hpbGQocHJpb3JpdHlQYXJhKVxuXG4gICAgZGV0YWlsc0Rpdi5jbGFzc0xpc3QuYWRkKCdkZXRhaWxzJylcbiAgICBkZXNjcmlwdGlvbkRpdi5hcHBlbmRDaGlsZChkZXRhaWxzRGl2KVxufVxuXG4vL2Z1bmN0aW9uIHRvIGNyZWF0ZSB0byBkbyBpdGVtIGRpdlxuZnVuY3Rpb24gY3JlYXRlVG9Eb0RpdihlbGVtZW50LCBsaXN0KSB7XG4gICAgbGV0IG5ld0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgbmV3RGl2LnRleHRDb250ZW50ID0gZWxlbWVudC50aXRsZVxuICAgIG5ld0Rpdi5jbGFzc0xpc3QuYWRkKCdjYXJkJylcbiAgICBsZXQgY29tcGxldGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGxldCBwcmlvcml0eUltZyA9IG5ldyBJbWFnZSgpXG4gICAgaWYgKGVsZW1lbnQucHJpb3JpdHkgPT09ICcxJykge1xuICAgICAgICBwcmlvcml0eUltZy5zcmMgPSBwcmlvcml0eU9uZVxuICAgIH0gZWxzZSBpZiAoZWxlbWVudC5wcmlvcml0eSA9PT0gJzInKSB7XG4gICAgICAgIHByaW9yaXR5SW1nLnNyYyA9IHByaW9yaXR5VHdvXG4gICAgfSBlbHNlIHtcbiAgICAgICAgcHJpb3JpdHlJbWcuc3JjID0gcHJpb3JpdHlUaHJlZVxuICAgIH1cblxuICAgIGxldCBkZXRhaWxzQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBkZXRhaWxzQnV0dG9uLnRleHRDb250ZW50ID0gJ0RldGFpbHMnXG4gICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgYnV0dG9uLnRleHRDb250ZW50ID0gJ0RlbGV0ZSdcbiAgICBuZXdEaXYuYXBwZW5kQ2hpbGQoY29tcGxldGVEaXYpXG4gICAgbmV3RGl2LmFwcGVuZENoaWxkKHByaW9yaXR5SW1nKVxuICAgIG5ld0Rpdi5hcHBlbmRDaGlsZChkZXRhaWxzQnV0dG9uKVxuICAgIG5ld0Rpdi5hcHBlbmRDaGlsZChidXR0b24pXG5cblxuICAgIGlmIChlbGVtZW50LmRvbmUpIHtcbiAgICAgICAgY29tcGxldGVEaXYudGV4dENvbnRlbnQgPSAnQ29tcGxldGUnO1xuICAgICAgICBjb21wbGV0ZURpdi5jbGFzc0xpc3QuYWRkKCdjb21wbGV0ZScpXG4gICAgICAgIGNvbXBsZXRlRGl2LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZG9uZScpXG5cbiAgICB9IGVsc2Uge1xuICAgICAgICBjb21wbGV0ZURpdi5jbGFzc0xpc3QuYWRkKCdub3QteWV0JylcbiAgICAgICAgY29tcGxldGVEaXYudGV4dENvbnRlbnQgPSAnTm90IFlldCdcbiAgICB9XG5cblxuICAgIGNvbXBsZXRlRGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBpZiAoZWxlbWVudC5kb25lID09PSBmYWxzZSkge1xuICAgICAgICAgICAgZWxlbWVudC5kb25lID0gdHJ1ZVxuICAgICAgICAgICAgY29tcGxldGVEaXYuY2xhc3NMaXN0LmFkZCgnY29tcGxldGUnKTtcbiAgICAgICAgICAgIGNvbXBsZXRlRGl2LmNsYXNzTGlzdC5yZW1vdmUoJ25vdC15ZXQnKTtcbiAgICAgICAgICAgIGNvbXBsZXRlRGl2LnRleHRDb250ZW50ID0gJ0NvbXBsZXRlJztcbiAgICAgICAgICAgIGNvbXBsZXRlRGl2LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZG9uZScpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlbGVtZW50LmRvbmUgPSBmYWxzZVxuICAgICAgICAgICAgY29tcGxldGVEaXYuY2xhc3NMaXN0LmFkZCgnbm90LXlldCcpO1xuICAgICAgICAgICAgY29tcGxldGVEaXYuY2xhc3NMaXN0LnJlbW92ZSgnY29tcGxldGUnKTtcbiAgICAgICAgICAgIGNvbXBsZXRlRGl2LnRleHRDb250ZW50ID0gJ05vdCBZZXQnO1xuICAgICAgICAgICAgY29tcGxldGVEaXYucGFyZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdkb25lJylcbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICBkZXRhaWxzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIHNob3dEZXRhaWxzKGVsZW1lbnQpXG4gICAgICAgIGRlc2NyaXB0aW9uQkcuc3R5bGUuZGlzcGxheSA9ICdmbGV4J1xuICAgIH0pXG5cbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgbGlzdC5kZWxldGVUb0RvKGVsZW1lbnQpXG4gICAgICAgIGJ1dHRvbi5wYXJlbnRFbGVtZW50LnJlbW92ZSgpXG4gICAgfSlcblxuICAgIHJldHVybiBuZXdEaXZcblxufVxuXG4vL2Z1bmN0aW9uIHRvIGRpc3BsYXkgdG9kbyBpdGVtcyBpbiBhIGxpc3QgZm9ybWF0XG5mdW5jdGlvbiBwb3B1bGF0ZUxpc3QoYXJnKSB7XG4gICAgLy9kZWxldGVzIGFsbCB0aGUgY3VycmVudCBjaGlsZHJlbiBpbiB0aGUgZGl2IGNvbnRhaW5pbmcgdGhlIGxpc3RcbiAgICB3aGlsZSAobGlzdERpdi5maXJzdENoaWxkKSB7XG4gICAgICAgIGxpc3REaXYucmVtb3ZlQ2hpbGQobGlzdERpdi5sYXN0Q2hpbGQpO1xuICAgIH1cblxuICAgIGxldCBsaXN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXG4gICAgbGlzdFRpdGxlLnRleHRDb250ZW50ID0gYXJnLmJvYXJkTmFtZVxuICAgIGxpc3REaXYuYXBwZW5kQ2hpbGQobGlzdFRpdGxlKVxuICAgIGFyZy5saXN0LmZvckVhY2goZWxlID0+IHtcbiAgICAgICAgbGlzdERpdi5hcHBlbmRDaGlsZChjcmVhdGVUb0RvRGl2KGVsZSwgYXJnKSlcbiAgICB9KTtcbn1cblxudGFza3NEaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIHBvcHVsYXRlTGlzdCh0YXNrcylcbiAgICBjdXJyZW50ID0gdGFza3NcbiAgICBsZXQgY2hpbGRyZW4gPSBwcm9qZWN0RGl2LmNoaWxkcmVuXG4gICAgQXJyYXkuZnJvbShjaGlsZHJlbikuZm9yRWFjaChjaGlsZCA9PiB7XG4gICAgICAgIGNoaWxkLmNsYXNzTGlzdC5yZW1vdmUoJ2N1cnJlbnQnKVxuICAgIH0pXG4gICAgdGFza3NEaXYuY2xhc3NMaXN0LmFkZCgnY3VycmVudCcpXG59KVxuXG5uZXdMaXN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICBsZXQgbmFtZSA9IG5ld0xpc3ROYW1lLnZhbHVlXG4gICAgbGV0IG5ld0xpc3QgPSBib2FyZEZhY3RvcnkobmFtZSlcbiAgICBsaXN0cy5wdXNoKG5ld0xpc3QpXG4gICAgbGV0IG5ld0xpc3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIG5ld0xpc3REaXYudGV4dENvbnRlbnQgPSBuYW1lXG5cbiAgICBsZXQgZGVsZXRlTGlzdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgZGVsZXRlTGlzdEJ1dHRvbi50ZXh0Q29udGVudCA9ICdEZWxldGUnXG4gICAgbmV3TGlzdERpdi5hcHBlbmRDaGlsZChkZWxldGVMaXN0QnV0dG9uKVxuXG4gICAgcHJvamVjdERpdi5hcHBlbmRDaGlsZChuZXdMaXN0RGl2KVxuXG4gICAgZGVsZXRlTGlzdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgIHBvcHVsYXRlTGlzdCh0YXNrcylcbiAgICAgICAgY3VycmVudCA9IHRhc2tzXG4gICAgICAgIGxpc3RzLnNwbGljZShsaXN0cy5pbmRleE9mKG5ld0xpc3QpLCAxKVxuICAgICAgICBkZWxldGVMaXN0QnV0dG9uLnBhcmVudEVsZW1lbnQucmVtb3ZlKClcbiAgICB9KVxuXG4gICAgbmV3TGlzdERpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIHBvcHVsYXRlTGlzdChuZXdMaXN0KVxuICAgICAgICBjdXJyZW50ID0gbmV3TGlzdFxuICAgICAgICBsZXQgY2hpbGRyZW4gPSBwcm9qZWN0RGl2LmNoaWxkcmVuXG4gICAgICAgIEFycmF5LmZyb20oY2hpbGRyZW4pLmZvckVhY2goY2hpbGQgPT4ge1xuICAgICAgICAgICAgY2hpbGQuY2xhc3NMaXN0LnJlbW92ZSgnY3VycmVudCcpXG4gICAgICAgIH0pXG4gICAgICAgIG5ld0xpc3REaXYuY2xhc3NMaXN0LmFkZCgnY3VycmVudCcpXG4gICAgfSlcblxuICAgIG5ld0xpc3RGb3JtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2ludmlzaWJsZScpXG59KVxuXG5zdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIGxldCB0YXNrVGl0bGUgPSB0aXRsZS52YWx1ZVxuICAgIGxldCB0YXNrRGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbi52YWx1ZVxuICAgIGxldCB0YXNrRGF0ZSA9IGRhdGUudmFsdWVcbiAgICBsZXQgdGFza1ByaW9yaXR5ID0gcHJpb3JpdHlGb3JtLnZhbHVlXG5cbiAgICBsZXQgdGFzayA9IHRvRG9GYWN0b3J5KHRhc2tUaXRsZSwgdGFza0Rlc2NyaXB0aW9uLCB0YXNrRGF0ZSwgdGFza1ByaW9yaXR5LCBmYWxzZSlcbiAgICBjdXJyZW50LmFkZFRvRG8odGFzaylcblxuICAgIGxpc3REaXYuYXBwZW5kQ2hpbGQoY3JlYXRlVG9Eb0Rpdih0YXNrKSlcbiAgICBmb3JtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2ludmlzaWJsZScpXG4gICAgLy8gZm9ybS5yZXNldCgpXG5cbn0pXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==