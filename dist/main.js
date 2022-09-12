/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

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
    let list = []
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

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "accessInfo": () => (/* binding */ accessInfo),
/* harmony export */   "storageAvailable": () => (/* binding */ storageAvailable),
/* harmony export */   "storeInfo": () => (/* binding */ storeInfo)
/* harmony export */ });
/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./board */ "./src/board.js");


function storageAvailable(type) {
    let storage;
    try {
        storage = window[type];
        const x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch (e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            (storage && storage.length !== 0);
    }
}

function storeInfo(info) {
    if (storageAvailable('localStorage')) {
        // Yippee! We can use localStorage awesomeness
        console.log('stored')
        let stoList = []
        let stoObj = {}
        for (let i in info) {
            stoList.push(info[i].boardName)
            stoObj[info[i].boardName] = info[i].list.length
            for (let p in info[i].list) {
                localStorage.setItem(info[i].boardName + p, JSON.stringify(info[i].list[p]))
            }

        }
        let stoListSerialized = JSON.stringify(stoList)
        let stoObjSerialized = JSON.stringify(stoObj)
        localStorage.setItem('list', stoListSerialized)
        localStorage.setItem('lengths', stoObjSerialized)

    }
    else {
        // Too bad, no localStorage for us
    }
}

function accessInfo() {
    let accessList = JSON.parse(localStorage.getItem('list'))
    let accessObj = JSON.parse(localStorage.getItem('lengths'))
    let finalList
    for (let i in accessList) {
        let listLength = accessObj[accessList[i]]
        finalList = _board__WEBPACK_IMPORTED_MODULE_0__["default"][accessList[i]]
        for (let p = 0; p < listLength; p++) {
            let obj = JSON.parse(localStorage.getItem(accessList[i]+ p))
            let task = toDoFactory(obj.title, obj.description, obj.dueDate, obj.priority, obj.done)
            finalList.addToDo(task)

        }
    }

    return finalList
}



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
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _board_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./board.js */ "./src/board.js");
/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo.js */ "./src/todo.js");
/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./storage.js */ "./src/storage.js");
/* harmony import */ var _red_priority_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./red_priority.svg */ "./src/red_priority.svg");
/* harmony import */ var _orange_priority_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./orange_priority.svg */ "./src/orange_priority.svg");
/* harmony import */ var _yellow_priority_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./yellow_priority.svg */ "./src/yellow_priority.svg");








let lists = []
let tasks = (0,_board_js__WEBPACK_IMPORTED_MODULE_1__["default"])('Tasks')
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

if (localStorage.length !== 0) {
    lists = []
    let accessList = JSON.parse(localStorage.getItem('list'))
    let accessObj = JSON.parse(localStorage.getItem('lengths'))

    for (let i in accessList) {
        let listLength = accessObj[accessList[i]]
        let finalList = (0,_board_js__WEBPACK_IMPORTED_MODULE_1__["default"])(accessList[i])
        for (let p = 0; p < listLength; p++) {
            let obj = JSON.parse(localStorage.getItem(accessList[i] + p))
            let task = (0,_todo_js__WEBPACK_IMPORTED_MODULE_2__["default"])(obj.title, obj.description, obj.dueDate, obj.priority, obj.done)
            finalList.addToDo(task)
        }
        lists.push(finalList)
    }
    tasks = lists[0]
    populateList(tasks)
    populateProjects(lists)
}

let current = tasks

addItem.addEventListener('click', (e) => {
    formContainer.classList.remove('invisible')
})

newProject.addEventListener('click', (e) => {
    newListFormContainer.classList.remove('invisible')
})

closeDiv.addEventListener('click', () => {
    descriptionBG.style.display = 'none'
})

function updateLocalStorage() {
    localStorage.clear()
    ;(0,_storage_js__WEBPACK_IMPORTED_MODULE_3__.storeInfo)(lists)
}

//function to populate Projects Div
function populateProjects(args) {
    for (let i = 1; i < args.length; i++) {
        let name = args[i].boardName
        let newListDiv = document.createElement('div')
        newListDiv.textContent = name

        let deleteListButton = document.createElement('button')
        deleteListButton.textContent = 'Delete'
        newListDiv.appendChild(deleteListButton)
        newListDiv.classList.add('project-title')

        projectDiv.appendChild(newListDiv)

        deleteListButton.addEventListener('click', (e) => {
            e.preventDefault()
            e.stopPropagation()
            populateList(tasks)
            let children = projectDiv.children
            Array.from(children).forEach(child => {
                child.classList.remove('current')
            })
            tasksDiv.classList.add('current')
            current = tasks
            lists.splice(lists.indexOf(args[i]), 1)
            updateLocalStorage()
            deleteListButton.parentElement.remove()
        })

        newListDiv.addEventListener('click', (e) => {
            populateList(args[i])
            current = args[i]
            let children = projectDiv.children
            Array.from(children).forEach(child => {
                child.classList.remove('current')
            })
            newListDiv.classList.add('current')
        })
    }

}

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
        priorityImg.src = _red_priority_svg__WEBPACK_IMPORTED_MODULE_4__
    } else if (element.priority === '2') {
        priorityImg.src = _orange_priority_svg__WEBPACK_IMPORTED_MODULE_5__
    } else {
        priorityImg.src = _yellow_priority_svg__WEBPACK_IMPORTED_MODULE_6__
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
        updateLocalStorage()
    })

    detailsButton.addEventListener('click', (e) => {
        e.preventDefault()
        showDetails(element)
        descriptionBG.style.display = 'flex'
    })

    button.addEventListener('click', (e) => {
        e.preventDefault()
        list.deleteToDo(element)
        updateLocalStorage()
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
    let newList = (0,_board_js__WEBPACK_IMPORTED_MODULE_1__["default"])(name)
    lists.push(newList)
    let newListDiv = document.createElement('div')
    newListDiv.textContent = name

    let deleteListButton = document.createElement('button')
    deleteListButton.textContent = 'Delete'
    newListDiv.appendChild(deleteListButton)
    newListDiv.classList.add('project-title')

    projectDiv.appendChild(newListDiv)

    deleteListButton.addEventListener('click', (e) => {
        e.preventDefault()
        e.stopPropagation()
        populateList(tasks)
        current = tasks
        let children = projectDiv.children
        Array.from(children).forEach(child => {
            child.classList.remove('current')
        })
        tasksDiv.classList.add('current')
        lists.splice(lists.indexOf(newList), 1)
        updateLocalStorage()
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
    updateLocalStorage()
    console.log(localStorage)
    newListFormContainer.classList.add('invisible')
})

submit.addEventListener('click', (e) => {
    e.preventDefault()
    let taskTitle = title.value
    let taskDescription = description.value
    let taskDate = date.value
    let taskPriority = priorityForm.value

    let task = (0,_todo_js__WEBPACK_IMPORTED_MODULE_2__["default"])(taskTitle, taskDescription, taskDate, taskPriority, false)
    current.addToDo(task)

    listDiv.appendChild(createToDoDiv(task))
    formContainer.classList.add('invisible')
    // form.reset()

    updateLocalStorage()
})


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQSwwQkFBMEIsOENBQVc7QUFDckMsTUFBTTtBQUNOLDBCQUEwQixpREFBVztBQUNyQyxNQUFNO0FBQ04sMEJBQTBCLGlEQUFhO0FBQ3ZDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU07QUFDTjtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IscURBQVk7QUFDOUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxlQUFlLG9EQUFXO0FBQzFCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzP2UzMjAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2JvYXJkLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdG9yYWdlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b2RvLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiY29uc3QgYm9hcmRGYWN0b3J5ID0gKGJvYXJkTmFtZSkgPT4ge1xuICAgIGxldCBsaXN0ID0gW11cbiAgICBjb25zdCBhZGRUb0RvID0gKHRvRG8pID0+IHtcbiAgICAgICAgbGlzdC5wdXNoKHRvRG8pXG4gICAgfVxuICAgIGNvbnN0IGRlbGV0ZVRvRG8gPSAodG9EbykgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyh0b0RvLnRpdGxlKVxuICAgICAgICBjb25zb2xlLnRhYmxlKGxpc3QpXG4gICAgICAgIGxpc3Quc3BsaWNlKGxpc3QuaW5kZXhPZih0b0RvKSwgMSlcbiAgICAgICAgY29uc29sZS50YWJsZShsaXN0KVxuICAgIH1cbiAgICBjb25zdCBwcmludExpc3QgPSAoKSA9PiB7XG4gICAgICAgIGZvcihsZXQgaSBpbiBsaXN0KSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhsaXN0W2ldLnRpdGxlKVxuICAgICAgICB9XG4gICAgfVxuICAgXG5cbiAgICByZXR1cm4ge2JvYXJkTmFtZSwgbGlzdCwgYWRkVG9EbywgZGVsZXRlVG9EbywgcHJpbnRMaXN0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBib2FyZEZhY3RvcnkiLCJpbXBvcnQgYm9hcmRGYWN0b3J5IGZyb20gXCIuL2JvYXJkXCI7XG5cbmZ1bmN0aW9uIHN0b3JhZ2VBdmFpbGFibGUodHlwZSkge1xuICAgIGxldCBzdG9yYWdlO1xuICAgIHRyeSB7XG4gICAgICAgIHN0b3JhZ2UgPSB3aW5kb3dbdHlwZV07XG4gICAgICAgIGNvbnN0IHggPSAnX19zdG9yYWdlX3Rlc3RfXyc7XG4gICAgICAgIHN0b3JhZ2Uuc2V0SXRlbSh4LCB4KTtcbiAgICAgICAgc3RvcmFnZS5yZW1vdmVJdGVtKHgpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIGUgaW5zdGFuY2VvZiBET01FeGNlcHRpb24gJiYgKFxuICAgICAgICAgICAgLy8gZXZlcnl0aGluZyBleGNlcHQgRmlyZWZveFxuICAgICAgICAgICAgZS5jb2RlID09PSAyMiB8fFxuICAgICAgICAgICAgLy8gRmlyZWZveFxuICAgICAgICAgICAgZS5jb2RlID09PSAxMDE0IHx8XG4gICAgICAgICAgICAvLyB0ZXN0IG5hbWUgZmllbGQgdG9vLCBiZWNhdXNlIGNvZGUgbWlnaHQgbm90IGJlIHByZXNlbnRcbiAgICAgICAgICAgIC8vIGV2ZXJ5dGhpbmcgZXhjZXB0IEZpcmVmb3hcbiAgICAgICAgICAgIGUubmFtZSA9PT0gJ1F1b3RhRXhjZWVkZWRFcnJvcicgfHxcbiAgICAgICAgICAgIC8vIEZpcmVmb3hcbiAgICAgICAgICAgIGUubmFtZSA9PT0gJ05TX0VSUk9SX0RPTV9RVU9UQV9SRUFDSEVEJykgJiZcbiAgICAgICAgICAgIC8vIGFja25vd2xlZGdlIFF1b3RhRXhjZWVkZWRFcnJvciBvbmx5IGlmIHRoZXJlJ3Mgc29tZXRoaW5nIGFscmVhZHkgc3RvcmVkXG4gICAgICAgICAgICAoc3RvcmFnZSAmJiBzdG9yYWdlLmxlbmd0aCAhPT0gMCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBzdG9yZUluZm8oaW5mbykge1xuICAgIGlmIChzdG9yYWdlQXZhaWxhYmxlKCdsb2NhbFN0b3JhZ2UnKSkge1xuICAgICAgICAvLyBZaXBwZWUhIFdlIGNhbiB1c2UgbG9jYWxTdG9yYWdlIGF3ZXNvbWVuZXNzXG4gICAgICAgIGNvbnNvbGUubG9nKCdzdG9yZWQnKVxuICAgICAgICBsZXQgc3RvTGlzdCA9IFtdXG4gICAgICAgIGxldCBzdG9PYmogPSB7fVxuICAgICAgICBmb3IgKGxldCBpIGluIGluZm8pIHtcbiAgICAgICAgICAgIHN0b0xpc3QucHVzaChpbmZvW2ldLmJvYXJkTmFtZSlcbiAgICAgICAgICAgIHN0b09ialtpbmZvW2ldLmJvYXJkTmFtZV0gPSBpbmZvW2ldLmxpc3QubGVuZ3RoXG4gICAgICAgICAgICBmb3IgKGxldCBwIGluIGluZm9baV0ubGlzdCkge1xuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGluZm9baV0uYm9hcmROYW1lICsgcCwgSlNPTi5zdHJpbmdpZnkoaW5mb1tpXS5saXN0W3BdKSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgICAgIGxldCBzdG9MaXN0U2VyaWFsaXplZCA9IEpTT04uc3RyaW5naWZ5KHN0b0xpc3QpXG4gICAgICAgIGxldCBzdG9PYmpTZXJpYWxpemVkID0gSlNPTi5zdHJpbmdpZnkoc3RvT2JqKVxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbGlzdCcsIHN0b0xpc3RTZXJpYWxpemVkKVxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbGVuZ3RocycsIHN0b09ialNlcmlhbGl6ZWQpXG5cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIC8vIFRvbyBiYWQsIG5vIGxvY2FsU3RvcmFnZSBmb3IgdXNcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGFjY2Vzc0luZm8oKSB7XG4gICAgbGV0IGFjY2Vzc0xpc3QgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsaXN0JykpXG4gICAgbGV0IGFjY2Vzc09iaiA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xlbmd0aHMnKSlcbiAgICBsZXQgZmluYWxMaXN0XG4gICAgZm9yIChsZXQgaSBpbiBhY2Nlc3NMaXN0KSB7XG4gICAgICAgIGxldCBsaXN0TGVuZ3RoID0gYWNjZXNzT2JqW2FjY2Vzc0xpc3RbaV1dXG4gICAgICAgIGZpbmFsTGlzdCA9IGJvYXJkRmFjdG9yeVthY2Nlc3NMaXN0W2ldXVxuICAgICAgICBmb3IgKGxldCBwID0gMDsgcCA8IGxpc3RMZW5ndGg7IHArKykge1xuICAgICAgICAgICAgbGV0IG9iaiA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oYWNjZXNzTGlzdFtpXSsgcCkpXG4gICAgICAgICAgICBsZXQgdGFzayA9IHRvRG9GYWN0b3J5KG9iai50aXRsZSwgb2JqLmRlc2NyaXB0aW9uLCBvYmouZHVlRGF0ZSwgb2JqLnByaW9yaXR5LCBvYmouZG9uZSlcbiAgICAgICAgICAgIGZpbmFsTGlzdC5hZGRUb0RvKHRhc2spXG5cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmaW5hbExpc3Rcbn1cblxuZXhwb3J0IHsgc3RvcmFnZUF2YWlsYWJsZSwgc3RvcmVJbmZvLCBhY2Nlc3NJbmZvIH0iLCJjb25zdCB0b0RvRmFjdG9yeSA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBkb25lID0gZmFsc2UpID0+IHtcbiAgICByZXR1cm4ge3RpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGRvbmV9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHRvRG9GYWN0b3J5IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCBib2FyZEZhY3RvcnkgZnJvbSAnLi9ib2FyZC5qcyc7XG5pbXBvcnQgdG9Eb0ZhY3RvcnkgZnJvbSAnLi90b2RvLmpzJztcbmltcG9ydCB7IHN0b3JhZ2VBdmFpbGFibGUsIHN0b3JlSW5mbywgYWNjZXNzSW5mbyB9IGZyb20gJy4vc3RvcmFnZS5qcyc7XG5pbXBvcnQgcHJpb3JpdHlPbmUgZnJvbSAnLi9yZWRfcHJpb3JpdHkuc3ZnJztcbmltcG9ydCBwcmlvcml0eVR3byBmcm9tICcuL29yYW5nZV9wcmlvcml0eS5zdmcnO1xuaW1wb3J0IHByaW9yaXR5VGhyZWUgZnJvbSAnLi95ZWxsb3dfcHJpb3JpdHkuc3ZnJ1xuXG5sZXQgbGlzdHMgPSBbXVxubGV0IHRhc2tzID0gYm9hcmRGYWN0b3J5KCdUYXNrcycpXG5saXN0cy5wdXNoKHRhc2tzKVxuXG5cblxuY29uc3QgdGFza3NEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza3MnKVxuXG5jb25zdCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZScpXG5jb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjcmlwdGlvbicpXG5jb25zdCBkYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhdGUnKVxuY29uc3QgcHJpb3JpdHlGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByaW9yaXR5JylcblxuY29uc3Qgc3VibWl0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1Ym1pdCcpXG5cbmNvbnN0IGxpc3REaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlzdCcpXG5cbmNvbnN0IG5ld0xpc3ROYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xpc3QtbmFtZScpXG5jb25zdCBuZXdMaXN0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NyZWF0ZS1saXN0JylcblxuY29uc3QgcHJvamVjdERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0cycpXG5cbmNvbnN0IGFkZEl0ZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLWl0ZW0nKVxuXG5jb25zdCBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm0nKVxuY29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXctdGFzaycpXG5cbmNvbnN0IG5ld1Byb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3LXByb2plY3QnKVxuXG5jb25zdCBuZXdMaXN0Rm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXctbGlzdCcpXG5jb25zdCBuZXdMaXN0Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25ldy1saXN0LWZvcm0nKVxuXG5jb25zdCBkZXNjcmlwdGlvbkJHID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJnLWRlc2NyaXB0aW9uJylcbmNvbnN0IGRlc2NyaXB0aW9uRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRlc2NyaXB0aW9uLWNvbnRlbnRzJylcbmNvbnN0IGNsb3NlRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3NlJylcblxuaWYgKGxvY2FsU3RvcmFnZS5sZW5ndGggIT09IDApIHtcbiAgICBsaXN0cyA9IFtdXG4gICAgbGV0IGFjY2Vzc0xpc3QgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsaXN0JykpXG4gICAgbGV0IGFjY2Vzc09iaiA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xlbmd0aHMnKSlcblxuICAgIGZvciAobGV0IGkgaW4gYWNjZXNzTGlzdCkge1xuICAgICAgICBsZXQgbGlzdExlbmd0aCA9IGFjY2Vzc09ialthY2Nlc3NMaXN0W2ldXVxuICAgICAgICBsZXQgZmluYWxMaXN0ID0gYm9hcmRGYWN0b3J5KGFjY2Vzc0xpc3RbaV0pXG4gICAgICAgIGZvciAobGV0IHAgPSAwOyBwIDwgbGlzdExlbmd0aDsgcCsrKSB7XG4gICAgICAgICAgICBsZXQgb2JqID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShhY2Nlc3NMaXN0W2ldICsgcCkpXG4gICAgICAgICAgICBsZXQgdGFzayA9IHRvRG9GYWN0b3J5KG9iai50aXRsZSwgb2JqLmRlc2NyaXB0aW9uLCBvYmouZHVlRGF0ZSwgb2JqLnByaW9yaXR5LCBvYmouZG9uZSlcbiAgICAgICAgICAgIGZpbmFsTGlzdC5hZGRUb0RvKHRhc2spXG4gICAgICAgIH1cbiAgICAgICAgbGlzdHMucHVzaChmaW5hbExpc3QpXG4gICAgfVxuICAgIHRhc2tzID0gbGlzdHNbMF1cbiAgICBwb3B1bGF0ZUxpc3QodGFza3MpXG4gICAgcG9wdWxhdGVQcm9qZWN0cyhsaXN0cylcbn1cblxubGV0IGN1cnJlbnQgPSB0YXNrc1xuXG5hZGRJdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBmb3JtQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2ludmlzaWJsZScpXG59KVxuXG5uZXdQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBuZXdMaXN0Rm9ybUNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdpbnZpc2libGUnKVxufSlcblxuY2xvc2VEaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgZGVzY3JpcHRpb25CRy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG59KVxuXG5mdW5jdGlvbiB1cGRhdGVMb2NhbFN0b3JhZ2UoKSB7XG4gICAgbG9jYWxTdG9yYWdlLmNsZWFyKClcbiAgICBzdG9yZUluZm8obGlzdHMpXG59XG5cbi8vZnVuY3Rpb24gdG8gcG9wdWxhdGUgUHJvamVjdHMgRGl2XG5mdW5jdGlvbiBwb3B1bGF0ZVByb2plY3RzKGFyZ3MpIHtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IG5hbWUgPSBhcmdzW2ldLmJvYXJkTmFtZVxuICAgICAgICBsZXQgbmV3TGlzdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIG5ld0xpc3REaXYudGV4dENvbnRlbnQgPSBuYW1lXG5cbiAgICAgICAgbGV0IGRlbGV0ZUxpc3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgICAgICBkZWxldGVMaXN0QnV0dG9uLnRleHRDb250ZW50ID0gJ0RlbGV0ZSdcbiAgICAgICAgbmV3TGlzdERpdi5hcHBlbmRDaGlsZChkZWxldGVMaXN0QnV0dG9uKVxuICAgICAgICBuZXdMaXN0RGl2LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtdGl0bGUnKVxuXG4gICAgICAgIHByb2plY3REaXYuYXBwZW5kQ2hpbGQobmV3TGlzdERpdilcblxuICAgICAgICBkZWxldGVMaXN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICAgICAgcG9wdWxhdGVMaXN0KHRhc2tzKVxuICAgICAgICAgICAgbGV0IGNoaWxkcmVuID0gcHJvamVjdERpdi5jaGlsZHJlblxuICAgICAgICAgICAgQXJyYXkuZnJvbShjaGlsZHJlbikuZm9yRWFjaChjaGlsZCA9PiB7XG4gICAgICAgICAgICAgICAgY2hpbGQuY2xhc3NMaXN0LnJlbW92ZSgnY3VycmVudCcpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgdGFza3NEaXYuY2xhc3NMaXN0LmFkZCgnY3VycmVudCcpXG4gICAgICAgICAgICBjdXJyZW50ID0gdGFza3NcbiAgICAgICAgICAgIGxpc3RzLnNwbGljZShsaXN0cy5pbmRleE9mKGFyZ3NbaV0pLCAxKVxuICAgICAgICAgICAgdXBkYXRlTG9jYWxTdG9yYWdlKClcbiAgICAgICAgICAgIGRlbGV0ZUxpc3RCdXR0b24ucGFyZW50RWxlbWVudC5yZW1vdmUoKVxuICAgICAgICB9KVxuXG4gICAgICAgIG5ld0xpc3REaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgcG9wdWxhdGVMaXN0KGFyZ3NbaV0pXG4gICAgICAgICAgICBjdXJyZW50ID0gYXJnc1tpXVxuICAgICAgICAgICAgbGV0IGNoaWxkcmVuID0gcHJvamVjdERpdi5jaGlsZHJlblxuICAgICAgICAgICAgQXJyYXkuZnJvbShjaGlsZHJlbikuZm9yRWFjaChjaGlsZCA9PiB7XG4gICAgICAgICAgICAgICAgY2hpbGQuY2xhc3NMaXN0LnJlbW92ZSgnY3VycmVudCcpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgbmV3TGlzdERpdi5jbGFzc0xpc3QuYWRkKCdjdXJyZW50JylcbiAgICAgICAgfSlcbiAgICB9XG5cbn1cblxuLy9mdW5jdGlvbiB0byBkaXNwbGF5IGRldGFpbHMgb2YgdG9kbyBpdGVtXG5mdW5jdGlvbiBzaG93RGV0YWlscyhlbGVtZW50KSB7XG4gICAgd2hpbGUgKGRlc2NyaXB0aW9uRGl2LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgZGVzY3JpcHRpb25EaXYucmVtb3ZlQ2hpbGQoZGVzY3JpcHRpb25EaXYubGFzdENoaWxkKTtcbiAgICB9XG4gICAgbGV0IGRldGFpbHNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGxldCB0aXRsZVBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICB0aXRsZVBhcmEudGV4dENvbnRlbnQgPSBlbGVtZW50LnRpdGxlXG4gICAgbGV0IGRlc2NyaXB0aW9uUGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIGRlc2NyaXB0aW9uUGFyYS50ZXh0Q29udGVudCA9IGVsZW1lbnQuZGVzY3JpcHRpb25cbiAgICBsZXQgZHVlRGF0ZVBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBkdWVEYXRlUGFyYS50ZXh0Q29udGVudCA9IGVsZW1lbnQuZHVlRGF0ZVxuICAgIGxldCBwcmlvcml0eVBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBwcmlvcml0eVBhcmEudGV4dENvbnRlbnQgPSBlbGVtZW50LnByaW9yaXR5XG5cbiAgICBkZXRhaWxzRGl2LmFwcGVuZENoaWxkKHRpdGxlUGFyYSlcbiAgICBkZXRhaWxzRGl2LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uUGFyYSlcbiAgICBkZXRhaWxzRGl2LmFwcGVuZENoaWxkKGR1ZURhdGVQYXJhKVxuICAgIGRldGFpbHNEaXYuYXBwZW5kQ2hpbGQocHJpb3JpdHlQYXJhKVxuXG4gICAgZGV0YWlsc0Rpdi5jbGFzc0xpc3QuYWRkKCdkZXRhaWxzJylcbiAgICBkZXNjcmlwdGlvbkRpdi5hcHBlbmRDaGlsZChkZXRhaWxzRGl2KVxufVxuXG4vL2Z1bmN0aW9uIHRvIGNyZWF0ZSB0byBkbyBpdGVtIGRpdlxuZnVuY3Rpb24gY3JlYXRlVG9Eb0RpdihlbGVtZW50LCBsaXN0KSB7XG4gICAgbGV0IG5ld0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgbmV3RGl2LnRleHRDb250ZW50ID0gZWxlbWVudC50aXRsZVxuICAgIG5ld0Rpdi5jbGFzc0xpc3QuYWRkKCdjYXJkJylcbiAgICBsZXQgY29tcGxldGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGxldCBwcmlvcml0eUltZyA9IG5ldyBJbWFnZSgpXG4gICAgaWYgKGVsZW1lbnQucHJpb3JpdHkgPT09ICcxJykge1xuICAgICAgICBwcmlvcml0eUltZy5zcmMgPSBwcmlvcml0eU9uZVxuICAgIH0gZWxzZSBpZiAoZWxlbWVudC5wcmlvcml0eSA9PT0gJzInKSB7XG4gICAgICAgIHByaW9yaXR5SW1nLnNyYyA9IHByaW9yaXR5VHdvXG4gICAgfSBlbHNlIHtcbiAgICAgICAgcHJpb3JpdHlJbWcuc3JjID0gcHJpb3JpdHlUaHJlZVxuICAgIH1cblxuICAgIGxldCBkZXRhaWxzQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBkZXRhaWxzQnV0dG9uLnRleHRDb250ZW50ID0gJ0RldGFpbHMnXG4gICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgYnV0dG9uLnRleHRDb250ZW50ID0gJ0RlbGV0ZSdcbiAgICBuZXdEaXYuYXBwZW5kQ2hpbGQoY29tcGxldGVEaXYpXG4gICAgbmV3RGl2LmFwcGVuZENoaWxkKHByaW9yaXR5SW1nKVxuICAgIG5ld0Rpdi5hcHBlbmRDaGlsZChkZXRhaWxzQnV0dG9uKVxuICAgIG5ld0Rpdi5hcHBlbmRDaGlsZChidXR0b24pXG5cblxuICAgIGlmIChlbGVtZW50LmRvbmUpIHtcbiAgICAgICAgY29tcGxldGVEaXYudGV4dENvbnRlbnQgPSAnQ29tcGxldGUnO1xuICAgICAgICBjb21wbGV0ZURpdi5jbGFzc0xpc3QuYWRkKCdjb21wbGV0ZScpXG4gICAgICAgIGNvbXBsZXRlRGl2LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZG9uZScpXG5cbiAgICB9IGVsc2Uge1xuICAgICAgICBjb21wbGV0ZURpdi5jbGFzc0xpc3QuYWRkKCdub3QteWV0JylcbiAgICAgICAgY29tcGxldGVEaXYudGV4dENvbnRlbnQgPSAnTm90IFlldCdcbiAgICB9XG5cblxuICAgIGNvbXBsZXRlRGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBpZiAoZWxlbWVudC5kb25lID09PSBmYWxzZSkge1xuICAgICAgICAgICAgZWxlbWVudC5kb25lID0gdHJ1ZVxuICAgICAgICAgICAgY29tcGxldGVEaXYuY2xhc3NMaXN0LmFkZCgnY29tcGxldGUnKTtcbiAgICAgICAgICAgIGNvbXBsZXRlRGl2LmNsYXNzTGlzdC5yZW1vdmUoJ25vdC15ZXQnKTtcbiAgICAgICAgICAgIGNvbXBsZXRlRGl2LnRleHRDb250ZW50ID0gJ0NvbXBsZXRlJztcbiAgICAgICAgICAgIGNvbXBsZXRlRGl2LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZG9uZScpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlbGVtZW50LmRvbmUgPSBmYWxzZVxuICAgICAgICAgICAgY29tcGxldGVEaXYuY2xhc3NMaXN0LmFkZCgnbm90LXlldCcpO1xuICAgICAgICAgICAgY29tcGxldGVEaXYuY2xhc3NMaXN0LnJlbW92ZSgnY29tcGxldGUnKTtcbiAgICAgICAgICAgIGNvbXBsZXRlRGl2LnRleHRDb250ZW50ID0gJ05vdCBZZXQnO1xuICAgICAgICAgICAgY29tcGxldGVEaXYucGFyZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdkb25lJylcbiAgICAgICAgfVxuICAgICAgICB1cGRhdGVMb2NhbFN0b3JhZ2UoKVxuICAgIH0pXG5cbiAgICBkZXRhaWxzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIHNob3dEZXRhaWxzKGVsZW1lbnQpXG4gICAgICAgIGRlc2NyaXB0aW9uQkcuc3R5bGUuZGlzcGxheSA9ICdmbGV4J1xuICAgIH0pXG5cbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgbGlzdC5kZWxldGVUb0RvKGVsZW1lbnQpXG4gICAgICAgIHVwZGF0ZUxvY2FsU3RvcmFnZSgpXG4gICAgICAgIGJ1dHRvbi5wYXJlbnRFbGVtZW50LnJlbW92ZSgpXG4gICAgfSlcblxuICAgIHJldHVybiBuZXdEaXZcblxufVxuXG4vL2Z1bmN0aW9uIHRvIGRpc3BsYXkgdG9kbyBpdGVtcyBpbiBhIGxpc3QgZm9ybWF0XG5mdW5jdGlvbiBwb3B1bGF0ZUxpc3QoYXJnKSB7XG4gICAgLy9kZWxldGVzIGFsbCB0aGUgY3VycmVudCBjaGlsZHJlbiBpbiB0aGUgZGl2IGNvbnRhaW5pbmcgdGhlIGxpc3RcbiAgICB3aGlsZSAobGlzdERpdi5maXJzdENoaWxkKSB7XG4gICAgICAgIGxpc3REaXYucmVtb3ZlQ2hpbGQobGlzdERpdi5sYXN0Q2hpbGQpO1xuICAgIH1cblxuICAgIGxldCBsaXN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXG4gICAgbGlzdFRpdGxlLnRleHRDb250ZW50ID0gYXJnLmJvYXJkTmFtZVxuICAgIGxpc3REaXYuYXBwZW5kQ2hpbGQobGlzdFRpdGxlKVxuICAgIGFyZy5saXN0LmZvckVhY2goZWxlID0+IHtcbiAgICAgICAgbGlzdERpdi5hcHBlbmRDaGlsZChjcmVhdGVUb0RvRGl2KGVsZSwgYXJnKSlcbiAgICB9KTtcbn1cblxudGFza3NEaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIHBvcHVsYXRlTGlzdCh0YXNrcylcbiAgICBjdXJyZW50ID0gdGFza3NcbiAgICBsZXQgY2hpbGRyZW4gPSBwcm9qZWN0RGl2LmNoaWxkcmVuXG4gICAgQXJyYXkuZnJvbShjaGlsZHJlbikuZm9yRWFjaChjaGlsZCA9PiB7XG4gICAgICAgIGNoaWxkLmNsYXNzTGlzdC5yZW1vdmUoJ2N1cnJlbnQnKVxuICAgIH0pXG4gICAgdGFza3NEaXYuY2xhc3NMaXN0LmFkZCgnY3VycmVudCcpXG59KVxuXG5uZXdMaXN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICBsZXQgbmFtZSA9IG5ld0xpc3ROYW1lLnZhbHVlXG4gICAgbGV0IG5ld0xpc3QgPSBib2FyZEZhY3RvcnkobmFtZSlcbiAgICBsaXN0cy5wdXNoKG5ld0xpc3QpXG4gICAgbGV0IG5ld0xpc3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIG5ld0xpc3REaXYudGV4dENvbnRlbnQgPSBuYW1lXG5cbiAgICBsZXQgZGVsZXRlTGlzdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgZGVsZXRlTGlzdEJ1dHRvbi50ZXh0Q29udGVudCA9ICdEZWxldGUnXG4gICAgbmV3TGlzdERpdi5hcHBlbmRDaGlsZChkZWxldGVMaXN0QnV0dG9uKVxuICAgIG5ld0xpc3REaXYuY2xhc3NMaXN0LmFkZCgncHJvamVjdC10aXRsZScpXG5cbiAgICBwcm9qZWN0RGl2LmFwcGVuZENoaWxkKG5ld0xpc3REaXYpXG5cbiAgICBkZWxldGVMaXN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgcG9wdWxhdGVMaXN0KHRhc2tzKVxuICAgICAgICBjdXJyZW50ID0gdGFza3NcbiAgICAgICAgbGV0IGNoaWxkcmVuID0gcHJvamVjdERpdi5jaGlsZHJlblxuICAgICAgICBBcnJheS5mcm9tKGNoaWxkcmVuKS5mb3JFYWNoKGNoaWxkID0+IHtcbiAgICAgICAgICAgIGNoaWxkLmNsYXNzTGlzdC5yZW1vdmUoJ2N1cnJlbnQnKVxuICAgICAgICB9KVxuICAgICAgICB0YXNrc0Rpdi5jbGFzc0xpc3QuYWRkKCdjdXJyZW50JylcbiAgICAgICAgbGlzdHMuc3BsaWNlKGxpc3RzLmluZGV4T2YobmV3TGlzdCksIDEpXG4gICAgICAgIHVwZGF0ZUxvY2FsU3RvcmFnZSgpXG4gICAgICAgIGRlbGV0ZUxpc3RCdXR0b24ucGFyZW50RWxlbWVudC5yZW1vdmUoKVxuICAgIH0pXG5cbiAgICBuZXdMaXN0RGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgcG9wdWxhdGVMaXN0KG5ld0xpc3QpXG4gICAgICAgIGN1cnJlbnQgPSBuZXdMaXN0XG4gICAgICAgIGxldCBjaGlsZHJlbiA9IHByb2plY3REaXYuY2hpbGRyZW5cbiAgICAgICAgQXJyYXkuZnJvbShjaGlsZHJlbikuZm9yRWFjaChjaGlsZCA9PiB7XG4gICAgICAgICAgICBjaGlsZC5jbGFzc0xpc3QucmVtb3ZlKCdjdXJyZW50JylcbiAgICAgICAgfSlcbiAgICAgICAgbmV3TGlzdERpdi5jbGFzc0xpc3QuYWRkKCdjdXJyZW50JylcbiAgICB9KVxuICAgIHVwZGF0ZUxvY2FsU3RvcmFnZSgpXG4gICAgY29uc29sZS5sb2cobG9jYWxTdG9yYWdlKVxuICAgIG5ld0xpc3RGb3JtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2ludmlzaWJsZScpXG59KVxuXG5zdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIGxldCB0YXNrVGl0bGUgPSB0aXRsZS52YWx1ZVxuICAgIGxldCB0YXNrRGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbi52YWx1ZVxuICAgIGxldCB0YXNrRGF0ZSA9IGRhdGUudmFsdWVcbiAgICBsZXQgdGFza1ByaW9yaXR5ID0gcHJpb3JpdHlGb3JtLnZhbHVlXG5cbiAgICBsZXQgdGFzayA9IHRvRG9GYWN0b3J5KHRhc2tUaXRsZSwgdGFza0Rlc2NyaXB0aW9uLCB0YXNrRGF0ZSwgdGFza1ByaW9yaXR5LCBmYWxzZSlcbiAgICBjdXJyZW50LmFkZFRvRG8odGFzaylcblxuICAgIGxpc3REaXYuYXBwZW5kQ2hpbGQoY3JlYXRlVG9Eb0Rpdih0YXNrKSlcbiAgICBmb3JtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2ludmlzaWJsZScpXG4gICAgLy8gZm9ybS5yZXNldCgpXG5cbiAgICB1cGRhdGVMb2NhbFN0b3JhZ2UoKVxufSlcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9