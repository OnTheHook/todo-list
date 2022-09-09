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

if(localStorage) {
    lists = (0,_storage_js__WEBPACK_IMPORTED_MODULE_2__.accessInfo)()
    tasks = (0,_storage_js__WEBPACK_IMPORTED_MODULE_2__.accessInfo)()[0]
    populateList(tasks)
    populateProjects(tasks)
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

function populateProjects(args) {

    // let name = newListName.value
    // let newList = boardFactory(name)
    // lists.push(newList)
    // let newListDiv = document.createElement('div')
    // newListDiv.textContent = name

    // let deleteListButton = document.createElement('button')
    // deleteListButton.textContent = 'Delete'
    // newListDiv.appendChild(deleteListButton)

    // projectDiv.appendChild(newListDiv)

    // deleteListButton.addEventListener('click', (e) => {
    //     e.preventDefault()
    //     e.stopPropagation()
    //     populateList(tasks)
    //     current = tasks
    //     lists.splice(lists.indexOf(newList), 1)
    //     deleteListButton.parentElement.remove()
    // })

    // newListDiv.addEventListener('click', (e) => {
    //     populateList(newList)
    //     current = newList
    //     let children = projectDiv.children
    //     Array.from(children).forEach(child => {
    //         child.classList.remove('current')
    //     })
    //     newListDiv.classList.add('current')
    // })
    // localStorage.clear()
    // storeInfo(lists)
    // console.log(localStorage)
    // newListFormContainer.classList.add('invisible')

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
    localStorage.clear()
    ;(0,_storage_js__WEBPACK_IMPORTED_MODULE_2__.storeInfo)(lists)
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

})


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixxREFBWTtBQUM5QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7QUFDQSxJQUFJLHVEQUFTO0FBQ2I7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGVBQWUsb0RBQVc7QUFDMUI7O0FBRUE7QUFDQTtBQUNBOztBQUVBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvYm9hcmQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RvZG8uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBib2FyZEZhY3RvcnkgPSAoYm9hcmROYW1lKSA9PiB7XG4gICAgY29uc3QgbGlzdCA9IFtdXG4gICAgY29uc3QgYWRkVG9EbyA9ICh0b0RvKSA9PiB7XG4gICAgICAgIGxpc3QucHVzaCh0b0RvKVxuICAgIH1cbiAgICBjb25zdCBkZWxldGVUb0RvID0gKHRvRG8pID0+IHtcbiAgICAgICAgY29uc29sZS5sb2codG9Eby50aXRsZSlcbiAgICAgICAgY29uc29sZS50YWJsZShsaXN0KVxuICAgICAgICBsaXN0LnNwbGljZShsaXN0LmluZGV4T2YodG9EbyksIDEpXG4gICAgICAgIGNvbnNvbGUudGFibGUobGlzdClcbiAgICB9XG4gICAgY29uc3QgcHJpbnRMaXN0ID0gKCkgPT4ge1xuICAgICAgICBmb3IobGV0IGkgaW4gbGlzdCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2cobGlzdFtpXS50aXRsZSlcbiAgICAgICAgfVxuICAgIH1cbiAgIFxuXG4gICAgcmV0dXJuIHtib2FyZE5hbWUsIGxpc3QsIGFkZFRvRG8sIGRlbGV0ZVRvRG8sIHByaW50TGlzdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgYm9hcmRGYWN0b3J5IiwiaW1wb3J0IGJvYXJkRmFjdG9yeSBmcm9tIFwiLi9ib2FyZFwiO1xuXG5mdW5jdGlvbiBzdG9yYWdlQXZhaWxhYmxlKHR5cGUpIHtcbiAgICBsZXQgc3RvcmFnZTtcbiAgICB0cnkge1xuICAgICAgICBzdG9yYWdlID0gd2luZG93W3R5cGVdO1xuICAgICAgICBjb25zdCB4ID0gJ19fc3RvcmFnZV90ZXN0X18nO1xuICAgICAgICBzdG9yYWdlLnNldEl0ZW0oeCwgeCk7XG4gICAgICAgIHN0b3JhZ2UucmVtb3ZlSXRlbSh4KTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiBlIGluc3RhbmNlb2YgRE9NRXhjZXB0aW9uICYmIChcbiAgICAgICAgICAgIC8vIGV2ZXJ5dGhpbmcgZXhjZXB0IEZpcmVmb3hcbiAgICAgICAgICAgIGUuY29kZSA9PT0gMjIgfHxcbiAgICAgICAgICAgIC8vIEZpcmVmb3hcbiAgICAgICAgICAgIGUuY29kZSA9PT0gMTAxNCB8fFxuICAgICAgICAgICAgLy8gdGVzdCBuYW1lIGZpZWxkIHRvbywgYmVjYXVzZSBjb2RlIG1pZ2h0IG5vdCBiZSBwcmVzZW50XG4gICAgICAgICAgICAvLyBldmVyeXRoaW5nIGV4Y2VwdCBGaXJlZm94XG4gICAgICAgICAgICBlLm5hbWUgPT09ICdRdW90YUV4Y2VlZGVkRXJyb3InIHx8XG4gICAgICAgICAgICAvLyBGaXJlZm94XG4gICAgICAgICAgICBlLm5hbWUgPT09ICdOU19FUlJPUl9ET01fUVVPVEFfUkVBQ0hFRCcpICYmXG4gICAgICAgICAgICAvLyBhY2tub3dsZWRnZSBRdW90YUV4Y2VlZGVkRXJyb3Igb25seSBpZiB0aGVyZSdzIHNvbWV0aGluZyBhbHJlYWR5IHN0b3JlZFxuICAgICAgICAgICAgKHN0b3JhZ2UgJiYgc3RvcmFnZS5sZW5ndGggIT09IDApO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gc3RvcmVJbmZvKGluZm8pIHtcbiAgICBpZiAoc3RvcmFnZUF2YWlsYWJsZSgnbG9jYWxTdG9yYWdlJykpIHtcbiAgICAgICAgLy8gWWlwcGVlISBXZSBjYW4gdXNlIGxvY2FsU3RvcmFnZSBhd2Vzb21lbmVzc1xuICAgICAgICBjb25zb2xlLmxvZygnc3RvcmVkJylcbiAgICAgICAgbGV0IHN0b0xpc3QgPSBbXVxuICAgICAgICBsZXQgc3RvT2JqID0ge31cbiAgICAgICAgZm9yIChsZXQgaSBpbiBpbmZvKSB7XG4gICAgICAgICAgICBzdG9MaXN0LnB1c2goaW5mb1tpXS5ib2FyZE5hbWUpXG4gICAgICAgICAgICBzdG9PYmpbaW5mb1tpXS5ib2FyZE5hbWVdID0gaW5mb1tpXS5saXN0Lmxlbmd0aFxuICAgICAgICAgICAgZm9yIChsZXQgcCBpbiBpbmZvW2ldLmxpc3QpIHtcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShpbmZvW2ldLmJvYXJkTmFtZSArIHAsIEpTT04uc3RyaW5naWZ5KGluZm9baV0ubGlzdFtwXSkpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgICAgICBsZXQgc3RvTGlzdFNlcmlhbGl6ZWQgPSBKU09OLnN0cmluZ2lmeShzdG9MaXN0KVxuICAgICAgICBsZXQgc3RvT2JqU2VyaWFsaXplZCA9IEpTT04uc3RyaW5naWZ5KHN0b09iailcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xpc3QnLCBzdG9MaXN0U2VyaWFsaXplZClcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xlbmd0aHMnLCBzdG9PYmpTZXJpYWxpemVkKVxuXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICAvLyBUb28gYmFkLCBubyBsb2NhbFN0b3JhZ2UgZm9yIHVzXG4gICAgfVxufVxuXG5mdW5jdGlvbiBhY2Nlc3NJbmZvKCkge1xuICAgIGxldCBhY2Nlc3NMaXN0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbGlzdCcpKVxuICAgIGxldCBhY2Nlc3NPYmogPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsZW5ndGhzJykpXG4gICAgbGV0IGZpbmFsTGlzdFxuICAgIGZvciAobGV0IGkgaW4gYWNjZXNzTGlzdCkge1xuICAgICAgICBsZXQgbGlzdExlbmd0aCA9IGFjY2Vzc09ialthY2Nlc3NMaXN0W2ldXVxuICAgICAgICBmaW5hbExpc3QgPSBib2FyZEZhY3RvcnlbYWNjZXNzTGlzdFtpXV1cbiAgICAgICAgZm9yIChsZXQgcCA9IDA7IHAgPCBsaXN0TGVuZ3RoOyBwKyspIHtcbiAgICAgICAgICAgIGxldCBvYmogPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGFjY2Vzc0xpc3RbaV0rIHApKVxuICAgICAgICAgICAgbGV0IHRhc2sgPSB0b0RvRmFjdG9yeShvYmoudGl0bGUsIG9iai5kZXNjcmlwdGlvbiwgb2JqLmR1ZURhdGUsIG9iai5wcmlvcml0eSwgb2JqLmRvbmUpXG4gICAgICAgICAgICBmaW5hbExpc3QuYWRkVG9Ebyh0YXNrKVxuXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmluYWxMaXN0XG59XG5cbmV4cG9ydCB7IHN0b3JhZ2VBdmFpbGFibGUsIHN0b3JlSW5mbywgYWNjZXNzSW5mbyB9IiwiY29uc3QgdG9Eb0ZhY3RvcnkgPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgZG9uZSA9IGZhbHNlKSA9PiB7XG4gICAgcmV0dXJuIHt0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBkb25lfVxufVxuXG5leHBvcnQgZGVmYXVsdCB0b0RvRmFjdG9yeSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCBib2FyZEZhY3RvcnkgZnJvbSAnLi9ib2FyZC5qcyc7XG5pbXBvcnQgdG9Eb0ZhY3RvcnkgZnJvbSAnLi90b2RvLmpzJztcbmltcG9ydCB7IHN0b3JhZ2VBdmFpbGFibGUsIHN0b3JlSW5mbywgYWNjZXNzSW5mbyB9IGZyb20gJy4vc3RvcmFnZS5qcyc7XG5pbXBvcnQgcHJpb3JpdHlPbmUgZnJvbSAnLi9yZWRfcHJpb3JpdHkuc3ZnJztcbmltcG9ydCBwcmlvcml0eVR3byBmcm9tICcuL29yYW5nZV9wcmlvcml0eS5zdmcnO1xuaW1wb3J0IHByaW9yaXR5VGhyZWUgZnJvbSAnLi95ZWxsb3dfcHJpb3JpdHkuc3ZnJ1xuXG5sZXQgbGlzdHMgPSBbXVxubGV0IHRhc2tzID0gYm9hcmRGYWN0b3J5KCdUYXNrcycpXG5saXN0cy5wdXNoKHRhc2tzKVxuXG5cblxuY29uc3QgdGFza3NEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza3MnKVxuXG5jb25zdCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZScpXG5jb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjcmlwdGlvbicpXG5jb25zdCBkYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhdGUnKVxuY29uc3QgcHJpb3JpdHlGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByaW9yaXR5JylcblxuY29uc3Qgc3VibWl0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1Ym1pdCcpXG5cbmNvbnN0IGxpc3REaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlzdCcpXG5cbmNvbnN0IG5ld0xpc3ROYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xpc3QtbmFtZScpXG5jb25zdCBuZXdMaXN0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NyZWF0ZS1saXN0JylcblxuY29uc3QgcHJvamVjdERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0cycpXG5cbmNvbnN0IGFkZEl0ZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLWl0ZW0nKVxuXG5jb25zdCBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm0nKVxuY29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXctdGFzaycpXG5cbmNvbnN0IG5ld1Byb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3LXByb2plY3QnKVxuXG5jb25zdCBuZXdMaXN0Rm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXctbGlzdCcpXG5jb25zdCBuZXdMaXN0Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25ldy1saXN0LWZvcm0nKVxuXG5jb25zdCBkZXNjcmlwdGlvbkJHID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJnLWRlc2NyaXB0aW9uJylcbmNvbnN0IGRlc2NyaXB0aW9uRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRlc2NyaXB0aW9uLWNvbnRlbnRzJylcbmNvbnN0IGNsb3NlRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3NlJylcblxuaWYobG9jYWxTdG9yYWdlKSB7XG4gICAgbGlzdHMgPSBhY2Nlc3NJbmZvKClcbiAgICB0YXNrcyA9IGFjY2Vzc0luZm8oKVswXVxuICAgIHBvcHVsYXRlTGlzdCh0YXNrcylcbiAgICBwb3B1bGF0ZVByb2plY3RzKHRhc2tzKVxufVxuXG5sZXQgY3VycmVudCA9IHRhc2tzXG5cbmFkZEl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGZvcm1Db250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnaW52aXNpYmxlJylcbn0pXG5cbm5ld1Byb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIG5ld0xpc3RGb3JtQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2ludmlzaWJsZScpXG59KVxuXG5jbG9zZURpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBkZXNjcmlwdGlvbkJHLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbn0pXG5cbmZ1bmN0aW9uIHBvcHVsYXRlUHJvamVjdHMoYXJncykge1xuXG4gICAgLy8gbGV0IG5hbWUgPSBuZXdMaXN0TmFtZS52YWx1ZVxuICAgIC8vIGxldCBuZXdMaXN0ID0gYm9hcmRGYWN0b3J5KG5hbWUpXG4gICAgLy8gbGlzdHMucHVzaChuZXdMaXN0KVxuICAgIC8vIGxldCBuZXdMaXN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAvLyBuZXdMaXN0RGl2LnRleHRDb250ZW50ID0gbmFtZVxuXG4gICAgLy8gbGV0IGRlbGV0ZUxpc3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIC8vIGRlbGV0ZUxpc3RCdXR0b24udGV4dENvbnRlbnQgPSAnRGVsZXRlJ1xuICAgIC8vIG5ld0xpc3REaXYuYXBwZW5kQ2hpbGQoZGVsZXRlTGlzdEJ1dHRvbilcblxuICAgIC8vIHByb2plY3REaXYuYXBwZW5kQ2hpbGQobmV3TGlzdERpdilcblxuICAgIC8vIGRlbGV0ZUxpc3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIC8vICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAvLyAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgIC8vICAgICBwb3B1bGF0ZUxpc3QodGFza3MpXG4gICAgLy8gICAgIGN1cnJlbnQgPSB0YXNrc1xuICAgIC8vICAgICBsaXN0cy5zcGxpY2UobGlzdHMuaW5kZXhPZihuZXdMaXN0KSwgMSlcbiAgICAvLyAgICAgZGVsZXRlTGlzdEJ1dHRvbi5wYXJlbnRFbGVtZW50LnJlbW92ZSgpXG4gICAgLy8gfSlcblxuICAgIC8vIG5ld0xpc3REaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIC8vICAgICBwb3B1bGF0ZUxpc3QobmV3TGlzdClcbiAgICAvLyAgICAgY3VycmVudCA9IG5ld0xpc3RcbiAgICAvLyAgICAgbGV0IGNoaWxkcmVuID0gcHJvamVjdERpdi5jaGlsZHJlblxuICAgIC8vICAgICBBcnJheS5mcm9tKGNoaWxkcmVuKS5mb3JFYWNoKGNoaWxkID0+IHtcbiAgICAvLyAgICAgICAgIGNoaWxkLmNsYXNzTGlzdC5yZW1vdmUoJ2N1cnJlbnQnKVxuICAgIC8vICAgICB9KVxuICAgIC8vICAgICBuZXdMaXN0RGl2LmNsYXNzTGlzdC5hZGQoJ2N1cnJlbnQnKVxuICAgIC8vIH0pXG4gICAgLy8gbG9jYWxTdG9yYWdlLmNsZWFyKClcbiAgICAvLyBzdG9yZUluZm8obGlzdHMpXG4gICAgLy8gY29uc29sZS5sb2cobG9jYWxTdG9yYWdlKVxuICAgIC8vIG5ld0xpc3RGb3JtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2ludmlzaWJsZScpXG5cbn1cblxuLy9mdW5jdGlvbiB0byBkaXNwbGF5IGRldGFpbHMgb2YgdG9kbyBpdGVtXG5mdW5jdGlvbiBzaG93RGV0YWlscyhlbGVtZW50KSB7XG4gICAgd2hpbGUgKGRlc2NyaXB0aW9uRGl2LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgZGVzY3JpcHRpb25EaXYucmVtb3ZlQ2hpbGQoZGVzY3JpcHRpb25EaXYubGFzdENoaWxkKTtcbiAgICB9XG4gICAgbGV0IGRldGFpbHNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGxldCB0aXRsZVBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICB0aXRsZVBhcmEudGV4dENvbnRlbnQgPSBlbGVtZW50LnRpdGxlXG4gICAgbGV0IGRlc2NyaXB0aW9uUGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIGRlc2NyaXB0aW9uUGFyYS50ZXh0Q29udGVudCA9IGVsZW1lbnQuZGVzY3JpcHRpb25cbiAgICBsZXQgZHVlRGF0ZVBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBkdWVEYXRlUGFyYS50ZXh0Q29udGVudCA9IGVsZW1lbnQuZHVlRGF0ZVxuICAgIGxldCBwcmlvcml0eVBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBwcmlvcml0eVBhcmEudGV4dENvbnRlbnQgPSBlbGVtZW50LnByaW9yaXR5XG5cbiAgICBkZXRhaWxzRGl2LmFwcGVuZENoaWxkKHRpdGxlUGFyYSlcbiAgICBkZXRhaWxzRGl2LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uUGFyYSlcbiAgICBkZXRhaWxzRGl2LmFwcGVuZENoaWxkKGR1ZURhdGVQYXJhKVxuICAgIGRldGFpbHNEaXYuYXBwZW5kQ2hpbGQocHJpb3JpdHlQYXJhKVxuXG4gICAgZGV0YWlsc0Rpdi5jbGFzc0xpc3QuYWRkKCdkZXRhaWxzJylcbiAgICBkZXNjcmlwdGlvbkRpdi5hcHBlbmRDaGlsZChkZXRhaWxzRGl2KVxufVxuXG4vL2Z1bmN0aW9uIHRvIGNyZWF0ZSB0byBkbyBpdGVtIGRpdlxuZnVuY3Rpb24gY3JlYXRlVG9Eb0RpdihlbGVtZW50LCBsaXN0KSB7XG4gICAgbGV0IG5ld0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgbmV3RGl2LnRleHRDb250ZW50ID0gZWxlbWVudC50aXRsZVxuICAgIG5ld0Rpdi5jbGFzc0xpc3QuYWRkKCdjYXJkJylcbiAgICBsZXQgY29tcGxldGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGxldCBwcmlvcml0eUltZyA9IG5ldyBJbWFnZSgpXG4gICAgaWYgKGVsZW1lbnQucHJpb3JpdHkgPT09ICcxJykge1xuICAgICAgICBwcmlvcml0eUltZy5zcmMgPSBwcmlvcml0eU9uZVxuICAgIH0gZWxzZSBpZiAoZWxlbWVudC5wcmlvcml0eSA9PT0gJzInKSB7XG4gICAgICAgIHByaW9yaXR5SW1nLnNyYyA9IHByaW9yaXR5VHdvXG4gICAgfSBlbHNlIHtcbiAgICAgICAgcHJpb3JpdHlJbWcuc3JjID0gcHJpb3JpdHlUaHJlZVxuICAgIH1cblxuICAgIGxldCBkZXRhaWxzQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBkZXRhaWxzQnV0dG9uLnRleHRDb250ZW50ID0gJ0RldGFpbHMnXG4gICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgYnV0dG9uLnRleHRDb250ZW50ID0gJ0RlbGV0ZSdcbiAgICBuZXdEaXYuYXBwZW5kQ2hpbGQoY29tcGxldGVEaXYpXG4gICAgbmV3RGl2LmFwcGVuZENoaWxkKHByaW9yaXR5SW1nKVxuICAgIG5ld0Rpdi5hcHBlbmRDaGlsZChkZXRhaWxzQnV0dG9uKVxuICAgIG5ld0Rpdi5hcHBlbmRDaGlsZChidXR0b24pXG5cblxuICAgIGlmIChlbGVtZW50LmRvbmUpIHtcbiAgICAgICAgY29tcGxldGVEaXYudGV4dENvbnRlbnQgPSAnQ29tcGxldGUnO1xuICAgICAgICBjb21wbGV0ZURpdi5jbGFzc0xpc3QuYWRkKCdjb21wbGV0ZScpXG4gICAgICAgIGNvbXBsZXRlRGl2LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZG9uZScpXG5cbiAgICB9IGVsc2Uge1xuICAgICAgICBjb21wbGV0ZURpdi5jbGFzc0xpc3QuYWRkKCdub3QteWV0JylcbiAgICAgICAgY29tcGxldGVEaXYudGV4dENvbnRlbnQgPSAnTm90IFlldCdcbiAgICB9XG5cblxuICAgIGNvbXBsZXRlRGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBpZiAoZWxlbWVudC5kb25lID09PSBmYWxzZSkge1xuICAgICAgICAgICAgZWxlbWVudC5kb25lID0gdHJ1ZVxuICAgICAgICAgICAgY29tcGxldGVEaXYuY2xhc3NMaXN0LmFkZCgnY29tcGxldGUnKTtcbiAgICAgICAgICAgIGNvbXBsZXRlRGl2LmNsYXNzTGlzdC5yZW1vdmUoJ25vdC15ZXQnKTtcbiAgICAgICAgICAgIGNvbXBsZXRlRGl2LnRleHRDb250ZW50ID0gJ0NvbXBsZXRlJztcbiAgICAgICAgICAgIGNvbXBsZXRlRGl2LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZG9uZScpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlbGVtZW50LmRvbmUgPSBmYWxzZVxuICAgICAgICAgICAgY29tcGxldGVEaXYuY2xhc3NMaXN0LmFkZCgnbm90LXlldCcpO1xuICAgICAgICAgICAgY29tcGxldGVEaXYuY2xhc3NMaXN0LnJlbW92ZSgnY29tcGxldGUnKTtcbiAgICAgICAgICAgIGNvbXBsZXRlRGl2LnRleHRDb250ZW50ID0gJ05vdCBZZXQnO1xuICAgICAgICAgICAgY29tcGxldGVEaXYucGFyZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdkb25lJylcbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICBkZXRhaWxzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIHNob3dEZXRhaWxzKGVsZW1lbnQpXG4gICAgICAgIGRlc2NyaXB0aW9uQkcuc3R5bGUuZGlzcGxheSA9ICdmbGV4J1xuICAgIH0pXG5cbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgbGlzdC5kZWxldGVUb0RvKGVsZW1lbnQpXG4gICAgICAgIGJ1dHRvbi5wYXJlbnRFbGVtZW50LnJlbW92ZSgpXG4gICAgfSlcblxuICAgIHJldHVybiBuZXdEaXZcblxufVxuXG4vL2Z1bmN0aW9uIHRvIGRpc3BsYXkgdG9kbyBpdGVtcyBpbiBhIGxpc3QgZm9ybWF0XG5mdW5jdGlvbiBwb3B1bGF0ZUxpc3QoYXJnKSB7XG4gICAgLy9kZWxldGVzIGFsbCB0aGUgY3VycmVudCBjaGlsZHJlbiBpbiB0aGUgZGl2IGNvbnRhaW5pbmcgdGhlIGxpc3RcbiAgICB3aGlsZSAobGlzdERpdi5maXJzdENoaWxkKSB7XG4gICAgICAgIGxpc3REaXYucmVtb3ZlQ2hpbGQobGlzdERpdi5sYXN0Q2hpbGQpO1xuICAgIH1cblxuICAgIGxldCBsaXN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXG4gICAgbGlzdFRpdGxlLnRleHRDb250ZW50ID0gYXJnLmJvYXJkTmFtZVxuICAgIGxpc3REaXYuYXBwZW5kQ2hpbGQobGlzdFRpdGxlKVxuICAgIGFyZy5saXN0LmZvckVhY2goZWxlID0+IHtcbiAgICAgICAgbGlzdERpdi5hcHBlbmRDaGlsZChjcmVhdGVUb0RvRGl2KGVsZSwgYXJnKSlcbiAgICB9KTtcbn1cblxudGFza3NEaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIHBvcHVsYXRlTGlzdCh0YXNrcylcbiAgICBjdXJyZW50ID0gdGFza3NcbiAgICBsZXQgY2hpbGRyZW4gPSBwcm9qZWN0RGl2LmNoaWxkcmVuXG4gICAgQXJyYXkuZnJvbShjaGlsZHJlbikuZm9yRWFjaChjaGlsZCA9PiB7XG4gICAgICAgIGNoaWxkLmNsYXNzTGlzdC5yZW1vdmUoJ2N1cnJlbnQnKVxuICAgIH0pXG4gICAgdGFza3NEaXYuY2xhc3NMaXN0LmFkZCgnY3VycmVudCcpXG59KVxuXG5uZXdMaXN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICBsZXQgbmFtZSA9IG5ld0xpc3ROYW1lLnZhbHVlXG4gICAgbGV0IG5ld0xpc3QgPSBib2FyZEZhY3RvcnkobmFtZSlcbiAgICBsaXN0cy5wdXNoKG5ld0xpc3QpXG4gICAgbGV0IG5ld0xpc3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIG5ld0xpc3REaXYudGV4dENvbnRlbnQgPSBuYW1lXG5cbiAgICBsZXQgZGVsZXRlTGlzdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgZGVsZXRlTGlzdEJ1dHRvbi50ZXh0Q29udGVudCA9ICdEZWxldGUnXG4gICAgbmV3TGlzdERpdi5hcHBlbmRDaGlsZChkZWxldGVMaXN0QnV0dG9uKVxuXG4gICAgcHJvamVjdERpdi5hcHBlbmRDaGlsZChuZXdMaXN0RGl2KVxuXG4gICAgZGVsZXRlTGlzdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgIHBvcHVsYXRlTGlzdCh0YXNrcylcbiAgICAgICAgY3VycmVudCA9IHRhc2tzXG4gICAgICAgIGxpc3RzLnNwbGljZShsaXN0cy5pbmRleE9mKG5ld0xpc3QpLCAxKVxuICAgICAgICBkZWxldGVMaXN0QnV0dG9uLnBhcmVudEVsZW1lbnQucmVtb3ZlKClcbiAgICB9KVxuXG4gICAgbmV3TGlzdERpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIHBvcHVsYXRlTGlzdChuZXdMaXN0KVxuICAgICAgICBjdXJyZW50ID0gbmV3TGlzdFxuICAgICAgICBsZXQgY2hpbGRyZW4gPSBwcm9qZWN0RGl2LmNoaWxkcmVuXG4gICAgICAgIEFycmF5LmZyb20oY2hpbGRyZW4pLmZvckVhY2goY2hpbGQgPT4ge1xuICAgICAgICAgICAgY2hpbGQuY2xhc3NMaXN0LnJlbW92ZSgnY3VycmVudCcpXG4gICAgICAgIH0pXG4gICAgICAgIG5ld0xpc3REaXYuY2xhc3NMaXN0LmFkZCgnY3VycmVudCcpXG4gICAgfSlcbiAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKVxuICAgIHN0b3JlSW5mbyhsaXN0cylcbiAgICBjb25zb2xlLmxvZyhsb2NhbFN0b3JhZ2UpXG4gICAgbmV3TGlzdEZvcm1Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnaW52aXNpYmxlJylcbn0pXG5cbnN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgbGV0IHRhc2tUaXRsZSA9IHRpdGxlLnZhbHVlXG4gICAgbGV0IHRhc2tEZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uLnZhbHVlXG4gICAgbGV0IHRhc2tEYXRlID0gZGF0ZS52YWx1ZVxuICAgIGxldCB0YXNrUHJpb3JpdHkgPSBwcmlvcml0eUZvcm0udmFsdWVcblxuICAgIGxldCB0YXNrID0gdG9Eb0ZhY3RvcnkodGFza1RpdGxlLCB0YXNrRGVzY3JpcHRpb24sIHRhc2tEYXRlLCB0YXNrUHJpb3JpdHksIGZhbHNlKVxuICAgIGN1cnJlbnQuYWRkVG9Ebyh0YXNrKVxuXG4gICAgbGlzdERpdi5hcHBlbmRDaGlsZChjcmVhdGVUb0RvRGl2KHRhc2spKVxuICAgIGZvcm1Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnaW52aXNpYmxlJylcbiAgICAvLyBmb3JtLnJlc2V0KClcblxufSlcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9