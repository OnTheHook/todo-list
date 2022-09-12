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
/* harmony import */ var _board_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./board.js */ "./src/board.js");
/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo.js */ "./src/todo.js");
/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage.js */ "./src/storage.js");
/* harmony import */ var _red_priority_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./red_priority.svg */ "./src/red_priority.svg");
/* harmony import */ var _orange_priority_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./orange_priority.svg */ "./src/orange_priority.svg");
/* harmony import */ var _yellow_priority_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./yellow_priority.svg */ "./src/yellow_priority.svg");







let lists = []
let tasks = (0,_board_js__WEBPACK_IMPORTED_MODULE_0__["default"])('Tasks')
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
        let finalList = (0,_board_js__WEBPACK_IMPORTED_MODULE_0__["default"])(accessList[i])
        for (let p = 0; p < listLength; p++) {
            let obj = JSON.parse(localStorage.getItem(accessList[i] + p))
            let task = (0,_todo_js__WEBPACK_IMPORTED_MODULE_1__["default"])(obj.title, obj.description, obj.dueDate, obj.priority, obj.done)
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
    ;(0,_storage_js__WEBPACK_IMPORTED_MODULE_2__.storeInfo)(lists)
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
        priorityImg.src = _red_priority_svg__WEBPACK_IMPORTED_MODULE_3__
    } else if (element.priority === '2') {
        priorityImg.src = _orange_priority_svg__WEBPACK_IMPORTED_MODULE_4__
    } else {
        priorityImg.src = _yellow_priority_svg__WEBPACK_IMPORTED_MODULE_5__
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
    let newList = (0,_board_js__WEBPACK_IMPORTED_MODULE_0__["default"])(name)
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

    let task = (0,_todo_js__WEBPACK_IMPORTED_MODULE_1__["default"])(taskTitle, taskDescription, taskDate, taskPriority, false)
    current.addToDo(task)

    listDiv.appendChild(createToDoDiv(task))
    formContainer.classList.add('invisible')
    // form.reset()

    updateLocalStorage()
})


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFXO0FBQ3JDLE1BQU07QUFDTiwwQkFBMEIsaURBQVc7QUFDckMsTUFBTTtBQUNOLDBCQUEwQixpREFBYTtBQUN2Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNO0FBQ047QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHFEQUFZO0FBQzlCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZUFBZSxvREFBVztBQUMxQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2JvYXJkLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdG9yYWdlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b2RvLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYm9hcmRGYWN0b3J5ID0gKGJvYXJkTmFtZSkgPT4ge1xuICAgIGxldCBsaXN0ID0gW11cbiAgICBjb25zdCBhZGRUb0RvID0gKHRvRG8pID0+IHtcbiAgICAgICAgbGlzdC5wdXNoKHRvRG8pXG4gICAgfVxuICAgIGNvbnN0IGRlbGV0ZVRvRG8gPSAodG9EbykgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyh0b0RvLnRpdGxlKVxuICAgICAgICBjb25zb2xlLnRhYmxlKGxpc3QpXG4gICAgICAgIGxpc3Quc3BsaWNlKGxpc3QuaW5kZXhPZih0b0RvKSwgMSlcbiAgICAgICAgY29uc29sZS50YWJsZShsaXN0KVxuICAgIH1cbiAgICBjb25zdCBwcmludExpc3QgPSAoKSA9PiB7XG4gICAgICAgIGZvcihsZXQgaSBpbiBsaXN0KSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhsaXN0W2ldLnRpdGxlKVxuICAgICAgICB9XG4gICAgfVxuICAgXG5cbiAgICByZXR1cm4ge2JvYXJkTmFtZSwgbGlzdCwgYWRkVG9EbywgZGVsZXRlVG9EbywgcHJpbnRMaXN0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBib2FyZEZhY3RvcnkiLCJpbXBvcnQgYm9hcmRGYWN0b3J5IGZyb20gXCIuL2JvYXJkXCI7XG5cbmZ1bmN0aW9uIHN0b3JhZ2VBdmFpbGFibGUodHlwZSkge1xuICAgIGxldCBzdG9yYWdlO1xuICAgIHRyeSB7XG4gICAgICAgIHN0b3JhZ2UgPSB3aW5kb3dbdHlwZV07XG4gICAgICAgIGNvbnN0IHggPSAnX19zdG9yYWdlX3Rlc3RfXyc7XG4gICAgICAgIHN0b3JhZ2Uuc2V0SXRlbSh4LCB4KTtcbiAgICAgICAgc3RvcmFnZS5yZW1vdmVJdGVtKHgpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIGUgaW5zdGFuY2VvZiBET01FeGNlcHRpb24gJiYgKFxuICAgICAgICAgICAgLy8gZXZlcnl0aGluZyBleGNlcHQgRmlyZWZveFxuICAgICAgICAgICAgZS5jb2RlID09PSAyMiB8fFxuICAgICAgICAgICAgLy8gRmlyZWZveFxuICAgICAgICAgICAgZS5jb2RlID09PSAxMDE0IHx8XG4gICAgICAgICAgICAvLyB0ZXN0IG5hbWUgZmllbGQgdG9vLCBiZWNhdXNlIGNvZGUgbWlnaHQgbm90IGJlIHByZXNlbnRcbiAgICAgICAgICAgIC8vIGV2ZXJ5dGhpbmcgZXhjZXB0IEZpcmVmb3hcbiAgICAgICAgICAgIGUubmFtZSA9PT0gJ1F1b3RhRXhjZWVkZWRFcnJvcicgfHxcbiAgICAgICAgICAgIC8vIEZpcmVmb3hcbiAgICAgICAgICAgIGUubmFtZSA9PT0gJ05TX0VSUk9SX0RPTV9RVU9UQV9SRUFDSEVEJykgJiZcbiAgICAgICAgICAgIC8vIGFja25vd2xlZGdlIFF1b3RhRXhjZWVkZWRFcnJvciBvbmx5IGlmIHRoZXJlJ3Mgc29tZXRoaW5nIGFscmVhZHkgc3RvcmVkXG4gICAgICAgICAgICAoc3RvcmFnZSAmJiBzdG9yYWdlLmxlbmd0aCAhPT0gMCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBzdG9yZUluZm8oaW5mbykge1xuICAgIGlmIChzdG9yYWdlQXZhaWxhYmxlKCdsb2NhbFN0b3JhZ2UnKSkge1xuICAgICAgICAvLyBZaXBwZWUhIFdlIGNhbiB1c2UgbG9jYWxTdG9yYWdlIGF3ZXNvbWVuZXNzXG4gICAgICAgIGNvbnNvbGUubG9nKCdzdG9yZWQnKVxuICAgICAgICBsZXQgc3RvTGlzdCA9IFtdXG4gICAgICAgIGxldCBzdG9PYmogPSB7fVxuICAgICAgICBmb3IgKGxldCBpIGluIGluZm8pIHtcbiAgICAgICAgICAgIHN0b0xpc3QucHVzaChpbmZvW2ldLmJvYXJkTmFtZSlcbiAgICAgICAgICAgIHN0b09ialtpbmZvW2ldLmJvYXJkTmFtZV0gPSBpbmZvW2ldLmxpc3QubGVuZ3RoXG4gICAgICAgICAgICBmb3IgKGxldCBwIGluIGluZm9baV0ubGlzdCkge1xuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGluZm9baV0uYm9hcmROYW1lICsgcCwgSlNPTi5zdHJpbmdpZnkoaW5mb1tpXS5saXN0W3BdKSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgICAgIGxldCBzdG9MaXN0U2VyaWFsaXplZCA9IEpTT04uc3RyaW5naWZ5KHN0b0xpc3QpXG4gICAgICAgIGxldCBzdG9PYmpTZXJpYWxpemVkID0gSlNPTi5zdHJpbmdpZnkoc3RvT2JqKVxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbGlzdCcsIHN0b0xpc3RTZXJpYWxpemVkKVxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbGVuZ3RocycsIHN0b09ialNlcmlhbGl6ZWQpXG5cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIC8vIFRvbyBiYWQsIG5vIGxvY2FsU3RvcmFnZSBmb3IgdXNcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGFjY2Vzc0luZm8oKSB7XG4gICAgbGV0IGFjY2Vzc0xpc3QgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsaXN0JykpXG4gICAgbGV0IGFjY2Vzc09iaiA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xlbmd0aHMnKSlcbiAgICBsZXQgZmluYWxMaXN0XG4gICAgZm9yIChsZXQgaSBpbiBhY2Nlc3NMaXN0KSB7XG4gICAgICAgIGxldCBsaXN0TGVuZ3RoID0gYWNjZXNzT2JqW2FjY2Vzc0xpc3RbaV1dXG4gICAgICAgIGZpbmFsTGlzdCA9IGJvYXJkRmFjdG9yeVthY2Nlc3NMaXN0W2ldXVxuICAgICAgICBmb3IgKGxldCBwID0gMDsgcCA8IGxpc3RMZW5ndGg7IHArKykge1xuICAgICAgICAgICAgbGV0IG9iaiA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oYWNjZXNzTGlzdFtpXSsgcCkpXG4gICAgICAgICAgICBsZXQgdGFzayA9IHRvRG9GYWN0b3J5KG9iai50aXRsZSwgb2JqLmRlc2NyaXB0aW9uLCBvYmouZHVlRGF0ZSwgb2JqLnByaW9yaXR5LCBvYmouZG9uZSlcbiAgICAgICAgICAgIGZpbmFsTGlzdC5hZGRUb0RvKHRhc2spXG5cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmaW5hbExpc3Rcbn1cblxuZXhwb3J0IHsgc3RvcmFnZUF2YWlsYWJsZSwgc3RvcmVJbmZvLCBhY2Nlc3NJbmZvIH0iLCJjb25zdCB0b0RvRmFjdG9yeSA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBkb25lID0gZmFsc2UpID0+IHtcbiAgICByZXR1cm4ge3RpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGRvbmV9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHRvRG9GYWN0b3J5IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0IGJvYXJkRmFjdG9yeSBmcm9tICcuL2JvYXJkLmpzJztcbmltcG9ydCB0b0RvRmFjdG9yeSBmcm9tICcuL3RvZG8uanMnO1xuaW1wb3J0IHsgc3RvcmFnZUF2YWlsYWJsZSwgc3RvcmVJbmZvLCBhY2Nlc3NJbmZvIH0gZnJvbSAnLi9zdG9yYWdlLmpzJztcbmltcG9ydCBwcmlvcml0eU9uZSBmcm9tICcuL3JlZF9wcmlvcml0eS5zdmcnO1xuaW1wb3J0IHByaW9yaXR5VHdvIGZyb20gJy4vb3JhbmdlX3ByaW9yaXR5LnN2Zyc7XG5pbXBvcnQgcHJpb3JpdHlUaHJlZSBmcm9tICcuL3llbGxvd19wcmlvcml0eS5zdmcnXG5cbmxldCBsaXN0cyA9IFtdXG5sZXQgdGFza3MgPSBib2FyZEZhY3RvcnkoJ1Rhc2tzJylcbmxpc3RzLnB1c2godGFza3MpXG5cblxuXG5jb25zdCB0YXNrc0RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrcycpXG5cbmNvbnN0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlJylcbmNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc2NyaXB0aW9uJylcbmNvbnN0IGRhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF0ZScpXG5jb25zdCBwcmlvcml0eUZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJpb3JpdHknKVxuXG5jb25zdCBzdWJtaXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VibWl0JylcblxuY29uc3QgbGlzdERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saXN0JylcblxuY29uc3QgbmV3TGlzdE5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGlzdC1uYW1lJylcbmNvbnN0IG5ld0xpc3RCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3JlYXRlLWxpc3QnKVxuXG5jb25zdCBwcm9qZWN0RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RzJylcblxuY29uc3QgYWRkSXRlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtaXRlbScpXG5cbmNvbnN0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybScpXG5jb25zdCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ldy10YXNrJylcblxuY29uc3QgbmV3UHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXctcHJvamVjdCcpXG5cbmNvbnN0IG5ld0xpc3RGb3JtQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ldy1saXN0JylcbmNvbnN0IG5ld0xpc3RGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmV3LWxpc3QtZm9ybScpXG5cbmNvbnN0IGRlc2NyaXB0aW9uQkcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmctZGVzY3JpcHRpb24nKVxuY29uc3QgZGVzY3JpcHRpb25EaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGVzY3JpcHRpb24tY29udGVudHMnKVxuY29uc3QgY2xvc2VEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2UnKVxuXG5pZiAobG9jYWxTdG9yYWdlLmxlbmd0aCAhPT0gMCkge1xuICAgIGxpc3RzID0gW11cbiAgICBsZXQgYWNjZXNzTGlzdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xpc3QnKSlcbiAgICBsZXQgYWNjZXNzT2JqID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbGVuZ3RocycpKVxuXG4gICAgZm9yIChsZXQgaSBpbiBhY2Nlc3NMaXN0KSB7XG4gICAgICAgIGxldCBsaXN0TGVuZ3RoID0gYWNjZXNzT2JqW2FjY2Vzc0xpc3RbaV1dXG4gICAgICAgIGxldCBmaW5hbExpc3QgPSBib2FyZEZhY3RvcnkoYWNjZXNzTGlzdFtpXSlcbiAgICAgICAgZm9yIChsZXQgcCA9IDA7IHAgPCBsaXN0TGVuZ3RoOyBwKyspIHtcbiAgICAgICAgICAgIGxldCBvYmogPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGFjY2Vzc0xpc3RbaV0gKyBwKSlcbiAgICAgICAgICAgIGxldCB0YXNrID0gdG9Eb0ZhY3Rvcnkob2JqLnRpdGxlLCBvYmouZGVzY3JpcHRpb24sIG9iai5kdWVEYXRlLCBvYmoucHJpb3JpdHksIG9iai5kb25lKVxuICAgICAgICAgICAgZmluYWxMaXN0LmFkZFRvRG8odGFzaylcbiAgICAgICAgfVxuICAgICAgICBsaXN0cy5wdXNoKGZpbmFsTGlzdClcbiAgICB9XG4gICAgdGFza3MgPSBsaXN0c1swXVxuICAgIHBvcHVsYXRlTGlzdCh0YXNrcylcbiAgICBwb3B1bGF0ZVByb2plY3RzKGxpc3RzKVxufVxuXG5sZXQgY3VycmVudCA9IHRhc2tzXG5cbmFkZEl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGZvcm1Db250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnaW52aXNpYmxlJylcbn0pXG5cbm5ld1Byb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIG5ld0xpc3RGb3JtQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2ludmlzaWJsZScpXG59KVxuXG5jbG9zZURpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBkZXNjcmlwdGlvbkJHLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbn0pXG5cbmZ1bmN0aW9uIHVwZGF0ZUxvY2FsU3RvcmFnZSgpIHtcbiAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKVxuICAgIHN0b3JlSW5mbyhsaXN0cylcbn1cblxuLy9mdW5jdGlvbiB0byBwb3B1bGF0ZSBQcm9qZWN0cyBEaXZcbmZ1bmN0aW9uIHBvcHVsYXRlUHJvamVjdHMoYXJncykge1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgbmFtZSA9IGFyZ3NbaV0uYm9hcmROYW1lXG4gICAgICAgIGxldCBuZXdMaXN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgbmV3TGlzdERpdi50ZXh0Q29udGVudCA9IG5hbWVcblxuICAgICAgICBsZXQgZGVsZXRlTGlzdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgICAgIGRlbGV0ZUxpc3RCdXR0b24udGV4dENvbnRlbnQgPSAnRGVsZXRlJ1xuICAgICAgICBuZXdMaXN0RGl2LmFwcGVuZENoaWxkKGRlbGV0ZUxpc3RCdXR0b24pXG4gICAgICAgIG5ld0xpc3REaXYuY2xhc3NMaXN0LmFkZCgncHJvamVjdC10aXRsZScpXG5cbiAgICAgICAgcHJvamVjdERpdi5hcHBlbmRDaGlsZChuZXdMaXN0RGl2KVxuXG4gICAgICAgIGRlbGV0ZUxpc3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgICAgICBwb3B1bGF0ZUxpc3QodGFza3MpXG4gICAgICAgICAgICBsZXQgY2hpbGRyZW4gPSBwcm9qZWN0RGl2LmNoaWxkcmVuXG4gICAgICAgICAgICBBcnJheS5mcm9tKGNoaWxkcmVuKS5mb3JFYWNoKGNoaWxkID0+IHtcbiAgICAgICAgICAgICAgICBjaGlsZC5jbGFzc0xpc3QucmVtb3ZlKCdjdXJyZW50JylcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB0YXNrc0Rpdi5jbGFzc0xpc3QuYWRkKCdjdXJyZW50JylcbiAgICAgICAgICAgIGN1cnJlbnQgPSB0YXNrc1xuICAgICAgICAgICAgbGlzdHMuc3BsaWNlKGxpc3RzLmluZGV4T2YoYXJnc1tpXSksIDEpXG4gICAgICAgICAgICB1cGRhdGVMb2NhbFN0b3JhZ2UoKVxuICAgICAgICAgICAgZGVsZXRlTGlzdEJ1dHRvbi5wYXJlbnRFbGVtZW50LnJlbW92ZSgpXG4gICAgICAgIH0pXG5cbiAgICAgICAgbmV3TGlzdERpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBwb3B1bGF0ZUxpc3QoYXJnc1tpXSlcbiAgICAgICAgICAgIGN1cnJlbnQgPSBhcmdzW2ldXG4gICAgICAgICAgICBsZXQgY2hpbGRyZW4gPSBwcm9qZWN0RGl2LmNoaWxkcmVuXG4gICAgICAgICAgICBBcnJheS5mcm9tKGNoaWxkcmVuKS5mb3JFYWNoKGNoaWxkID0+IHtcbiAgICAgICAgICAgICAgICBjaGlsZC5jbGFzc0xpc3QucmVtb3ZlKCdjdXJyZW50JylcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBuZXdMaXN0RGl2LmNsYXNzTGlzdC5hZGQoJ2N1cnJlbnQnKVxuICAgICAgICB9KVxuICAgIH1cblxufVxuXG4vL2Z1bmN0aW9uIHRvIGRpc3BsYXkgZGV0YWlscyBvZiB0b2RvIGl0ZW1cbmZ1bmN0aW9uIHNob3dEZXRhaWxzKGVsZW1lbnQpIHtcbiAgICB3aGlsZSAoZGVzY3JpcHRpb25EaXYuZmlyc3RDaGlsZCkge1xuICAgICAgICBkZXNjcmlwdGlvbkRpdi5yZW1vdmVDaGlsZChkZXNjcmlwdGlvbkRpdi5sYXN0Q2hpbGQpO1xuICAgIH1cbiAgICBsZXQgZGV0YWlsc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgbGV0IHRpdGxlUGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIHRpdGxlUGFyYS50ZXh0Q29udGVudCA9IGVsZW1lbnQudGl0bGVcbiAgICBsZXQgZGVzY3JpcHRpb25QYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgZGVzY3JpcHRpb25QYXJhLnRleHRDb250ZW50ID0gZWxlbWVudC5kZXNjcmlwdGlvblxuICAgIGxldCBkdWVEYXRlUGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIGR1ZURhdGVQYXJhLnRleHRDb250ZW50ID0gZWxlbWVudC5kdWVEYXRlXG4gICAgbGV0IHByaW9yaXR5UGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIHByaW9yaXR5UGFyYS50ZXh0Q29udGVudCA9IGVsZW1lbnQucHJpb3JpdHlcblxuICAgIGRldGFpbHNEaXYuYXBwZW5kQ2hpbGQodGl0bGVQYXJhKVxuICAgIGRldGFpbHNEaXYuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25QYXJhKVxuICAgIGRldGFpbHNEaXYuYXBwZW5kQ2hpbGQoZHVlRGF0ZVBhcmEpXG4gICAgZGV0YWlsc0Rpdi5hcHBlbmRDaGlsZChwcmlvcml0eVBhcmEpXG5cbiAgICBkZXRhaWxzRGl2LmNsYXNzTGlzdC5hZGQoJ2RldGFpbHMnKVxuICAgIGRlc2NyaXB0aW9uRGl2LmFwcGVuZENoaWxkKGRldGFpbHNEaXYpXG59XG5cbi8vZnVuY3Rpb24gdG8gY3JlYXRlIHRvIGRvIGl0ZW0gZGl2XG5mdW5jdGlvbiBjcmVhdGVUb0RvRGl2KGVsZW1lbnQsIGxpc3QpIHtcbiAgICBsZXQgbmV3RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBuZXdEaXYudGV4dENvbnRlbnQgPSBlbGVtZW50LnRpdGxlXG4gICAgbmV3RGl2LmNsYXNzTGlzdC5hZGQoJ2NhcmQnKVxuICAgIGxldCBjb21wbGV0ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgbGV0IHByaW9yaXR5SW1nID0gbmV3IEltYWdlKClcbiAgICBpZiAoZWxlbWVudC5wcmlvcml0eSA9PT0gJzEnKSB7XG4gICAgICAgIHByaW9yaXR5SW1nLnNyYyA9IHByaW9yaXR5T25lXG4gICAgfSBlbHNlIGlmIChlbGVtZW50LnByaW9yaXR5ID09PSAnMicpIHtcbiAgICAgICAgcHJpb3JpdHlJbWcuc3JjID0gcHJpb3JpdHlUd29cbiAgICB9IGVsc2Uge1xuICAgICAgICBwcmlvcml0eUltZy5zcmMgPSBwcmlvcml0eVRocmVlXG4gICAgfVxuXG4gICAgbGV0IGRldGFpbHNCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIGRldGFpbHNCdXR0b24udGV4dENvbnRlbnQgPSAnRGV0YWlscydcbiAgICBsZXQgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBidXR0b24udGV4dENvbnRlbnQgPSAnRGVsZXRlJ1xuICAgIG5ld0Rpdi5hcHBlbmRDaGlsZChjb21wbGV0ZURpdilcbiAgICBuZXdEaXYuYXBwZW5kQ2hpbGQocHJpb3JpdHlJbWcpXG4gICAgbmV3RGl2LmFwcGVuZENoaWxkKGRldGFpbHNCdXR0b24pXG4gICAgbmV3RGl2LmFwcGVuZENoaWxkKGJ1dHRvbilcblxuXG4gICAgaWYgKGVsZW1lbnQuZG9uZSkge1xuICAgICAgICBjb21wbGV0ZURpdi50ZXh0Q29udGVudCA9ICdDb21wbGV0ZSc7XG4gICAgICAgIGNvbXBsZXRlRGl2LmNsYXNzTGlzdC5hZGQoJ2NvbXBsZXRlJylcbiAgICAgICAgY29tcGxldGVEaXYucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdkb25lJylcblxuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbXBsZXRlRGl2LmNsYXNzTGlzdC5hZGQoJ25vdC15ZXQnKVxuICAgICAgICBjb21wbGV0ZURpdi50ZXh0Q29udGVudCA9ICdOb3QgWWV0J1xuICAgIH1cblxuXG4gICAgY29tcGxldGVEaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGlmIChlbGVtZW50LmRvbmUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBlbGVtZW50LmRvbmUgPSB0cnVlXG4gICAgICAgICAgICBjb21wbGV0ZURpdi5jbGFzc0xpc3QuYWRkKCdjb21wbGV0ZScpO1xuICAgICAgICAgICAgY29tcGxldGVEaXYuY2xhc3NMaXN0LnJlbW92ZSgnbm90LXlldCcpO1xuICAgICAgICAgICAgY29tcGxldGVEaXYudGV4dENvbnRlbnQgPSAnQ29tcGxldGUnO1xuICAgICAgICAgICAgY29tcGxldGVEaXYucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdkb25lJylcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVsZW1lbnQuZG9uZSA9IGZhbHNlXG4gICAgICAgICAgICBjb21wbGV0ZURpdi5jbGFzc0xpc3QuYWRkKCdub3QteWV0Jyk7XG4gICAgICAgICAgICBjb21wbGV0ZURpdi5jbGFzc0xpc3QucmVtb3ZlKCdjb21wbGV0ZScpO1xuICAgICAgICAgICAgY29tcGxldGVEaXYudGV4dENvbnRlbnQgPSAnTm90IFlldCc7XG4gICAgICAgICAgICBjb21wbGV0ZURpdi5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2RvbmUnKVxuICAgICAgICB9XG4gICAgICAgIHVwZGF0ZUxvY2FsU3RvcmFnZSgpXG4gICAgfSlcblxuICAgIGRldGFpbHNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgc2hvd0RldGFpbHMoZWxlbWVudClcbiAgICAgICAgZGVzY3JpcHRpb25CRy5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnXG4gICAgfSlcblxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICBsaXN0LmRlbGV0ZVRvRG8oZWxlbWVudClcbiAgICAgICAgdXBkYXRlTG9jYWxTdG9yYWdlKClcbiAgICAgICAgYnV0dG9uLnBhcmVudEVsZW1lbnQucmVtb3ZlKClcbiAgICB9KVxuXG4gICAgcmV0dXJuIG5ld0RpdlxuXG59XG5cbi8vZnVuY3Rpb24gdG8gZGlzcGxheSB0b2RvIGl0ZW1zIGluIGEgbGlzdCBmb3JtYXRcbmZ1bmN0aW9uIHBvcHVsYXRlTGlzdChhcmcpIHtcbiAgICAvL2RlbGV0ZXMgYWxsIHRoZSBjdXJyZW50IGNoaWxkcmVuIGluIHRoZSBkaXYgY29udGFpbmluZyB0aGUgbGlzdFxuICAgIHdoaWxlIChsaXN0RGl2LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgbGlzdERpdi5yZW1vdmVDaGlsZChsaXN0RGl2Lmxhc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgbGV0IGxpc3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcbiAgICBsaXN0VGl0bGUudGV4dENvbnRlbnQgPSBhcmcuYm9hcmROYW1lXG4gICAgbGlzdERpdi5hcHBlbmRDaGlsZChsaXN0VGl0bGUpXG4gICAgYXJnLmxpc3QuZm9yRWFjaChlbGUgPT4ge1xuICAgICAgICBsaXN0RGl2LmFwcGVuZENoaWxkKGNyZWF0ZVRvRG9EaXYoZWxlLCBhcmcpKVxuICAgIH0pO1xufVxuXG50YXNrc0Rpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgcG9wdWxhdGVMaXN0KHRhc2tzKVxuICAgIGN1cnJlbnQgPSB0YXNrc1xuICAgIGxldCBjaGlsZHJlbiA9IHByb2plY3REaXYuY2hpbGRyZW5cbiAgICBBcnJheS5mcm9tKGNoaWxkcmVuKS5mb3JFYWNoKGNoaWxkID0+IHtcbiAgICAgICAgY2hpbGQuY2xhc3NMaXN0LnJlbW92ZSgnY3VycmVudCcpXG4gICAgfSlcbiAgICB0YXNrc0Rpdi5jbGFzc0xpc3QuYWRkKCdjdXJyZW50Jylcbn0pXG5cbm5ld0xpc3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIGxldCBuYW1lID0gbmV3TGlzdE5hbWUudmFsdWVcbiAgICBsZXQgbmV3TGlzdCA9IGJvYXJkRmFjdG9yeShuYW1lKVxuICAgIGxpc3RzLnB1c2gobmV3TGlzdClcbiAgICBsZXQgbmV3TGlzdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgbmV3TGlzdERpdi50ZXh0Q29udGVudCA9IG5hbWVcblxuICAgIGxldCBkZWxldGVMaXN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBkZWxldGVMaXN0QnV0dG9uLnRleHRDb250ZW50ID0gJ0RlbGV0ZSdcbiAgICBuZXdMaXN0RGl2LmFwcGVuZENoaWxkKGRlbGV0ZUxpc3RCdXR0b24pXG4gICAgbmV3TGlzdERpdi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LXRpdGxlJylcblxuICAgIHByb2plY3REaXYuYXBwZW5kQ2hpbGQobmV3TGlzdERpdilcblxuICAgIGRlbGV0ZUxpc3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICBwb3B1bGF0ZUxpc3QodGFza3MpXG4gICAgICAgIGN1cnJlbnQgPSB0YXNrc1xuICAgICAgICBsZXQgY2hpbGRyZW4gPSBwcm9qZWN0RGl2LmNoaWxkcmVuXG4gICAgICAgIEFycmF5LmZyb20oY2hpbGRyZW4pLmZvckVhY2goY2hpbGQgPT4ge1xuICAgICAgICAgICAgY2hpbGQuY2xhc3NMaXN0LnJlbW92ZSgnY3VycmVudCcpXG4gICAgICAgIH0pXG4gICAgICAgIHRhc2tzRGl2LmNsYXNzTGlzdC5hZGQoJ2N1cnJlbnQnKVxuICAgICAgICBsaXN0cy5zcGxpY2UobGlzdHMuaW5kZXhPZihuZXdMaXN0KSwgMSlcbiAgICAgICAgdXBkYXRlTG9jYWxTdG9yYWdlKClcbiAgICAgICAgZGVsZXRlTGlzdEJ1dHRvbi5wYXJlbnRFbGVtZW50LnJlbW92ZSgpXG4gICAgfSlcblxuICAgIG5ld0xpc3REaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBwb3B1bGF0ZUxpc3QobmV3TGlzdClcbiAgICAgICAgY3VycmVudCA9IG5ld0xpc3RcbiAgICAgICAgbGV0IGNoaWxkcmVuID0gcHJvamVjdERpdi5jaGlsZHJlblxuICAgICAgICBBcnJheS5mcm9tKGNoaWxkcmVuKS5mb3JFYWNoKGNoaWxkID0+IHtcbiAgICAgICAgICAgIGNoaWxkLmNsYXNzTGlzdC5yZW1vdmUoJ2N1cnJlbnQnKVxuICAgICAgICB9KVxuICAgICAgICBuZXdMaXN0RGl2LmNsYXNzTGlzdC5hZGQoJ2N1cnJlbnQnKVxuICAgIH0pXG4gICAgdXBkYXRlTG9jYWxTdG9yYWdlKClcbiAgICBjb25zb2xlLmxvZyhsb2NhbFN0b3JhZ2UpXG4gICAgbmV3TGlzdEZvcm1Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnaW52aXNpYmxlJylcbn0pXG5cbnN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgbGV0IHRhc2tUaXRsZSA9IHRpdGxlLnZhbHVlXG4gICAgbGV0IHRhc2tEZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uLnZhbHVlXG4gICAgbGV0IHRhc2tEYXRlID0gZGF0ZS52YWx1ZVxuICAgIGxldCB0YXNrUHJpb3JpdHkgPSBwcmlvcml0eUZvcm0udmFsdWVcblxuICAgIGxldCB0YXNrID0gdG9Eb0ZhY3RvcnkodGFza1RpdGxlLCB0YXNrRGVzY3JpcHRpb24sIHRhc2tEYXRlLCB0YXNrUHJpb3JpdHksIGZhbHNlKVxuICAgIGN1cnJlbnQuYWRkVG9Ebyh0YXNrKVxuXG4gICAgbGlzdERpdi5hcHBlbmRDaGlsZChjcmVhdGVUb0RvRGl2KHRhc2spKVxuICAgIGZvcm1Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnaW52aXNpYmxlJylcbiAgICAvLyBmb3JtLnJlc2V0KClcblxuICAgIHVwZGF0ZUxvY2FsU3RvcmFnZSgpXG59KVxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=