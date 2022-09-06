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

const title = document.getElementById('title')
const description = document.getElementById('description')
const date = document.getElementById('date')
const priority = document.getElementById('priority')

const submit = document.getElementById('submit')

const listDiv = document.querySelector('.list')

const newListName = document.getElementById('list-name')
const newListButton = document.getElementById('create-list')

const projectDiv = document.getElementById('projects')

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

newListButton.addEventListener('click', (e) => {
    e.preventDefault()
    let name = newListName.value
    let newList = (0,_board_js__WEBPACK_IMPORTED_MODULE_0__["default"])(name)
    lists.push(newList)
    let newListDiv = document.createElement('div')
    newListDiv.textContent = name
    projectDiv.appendChild(newListDiv)

    newListDiv.addEventListener('click', (e) => {
        populateList(newList)
        current = newList
    })
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

})


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsWUFBWTtBQUNaOztBQUVBLGlFQUFlOzs7Ozs7Ozs7Ozs7OztBQ3JCZjtBQUNBLFlBQVk7QUFDWjs7QUFFQSxpRUFBZTs7Ozs7O1VDSmY7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOc0M7QUFDRjs7QUFFcEM7QUFDQSxZQUFZLHFEQUFZO0FBQ3hCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IscURBQVk7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGVBQWUsb0RBQVc7QUFDMUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2JvYXJkLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b2RvLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBib2FyZEZhY3RvcnkgPSAoYm9hcmROYW1lKSA9PiB7XG4gICAgY29uc3QgbGlzdCA9IFtdXG4gICAgY29uc3QgYWRkVG9EbyA9ICh0b0RvKSA9PiB7XG4gICAgICAgIGxpc3QucHVzaCh0b0RvKVxuICAgIH1cbiAgICBjb25zdCBkZWxldGVUb0RvID0gKHRvRG8pID0+IHtcbiAgICAgICAgY29uc29sZS5sb2codG9Eby50aXRsZSlcbiAgICAgICAgY29uc29sZS50YWJsZShsaXN0KVxuICAgICAgICBsaXN0LnNwbGljZShsaXN0LmluZGV4T2YodG9EbyksIDEpXG4gICAgICAgIGNvbnNvbGUudGFibGUobGlzdClcbiAgICB9XG4gICAgY29uc3QgcHJpbnRMaXN0ID0gKCkgPT4ge1xuICAgICAgICBmb3IobGV0IGkgaW4gbGlzdCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2cobGlzdFtpXS50aXRsZSlcbiAgICAgICAgfVxuICAgIH1cbiAgIFxuXG4gICAgcmV0dXJuIHtib2FyZE5hbWUsIGxpc3QsIGFkZFRvRG8sIGRlbGV0ZVRvRG8sIHByaW50TGlzdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgYm9hcmRGYWN0b3J5IiwiY29uc3QgdG9Eb0ZhY3RvcnkgPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgZG9uZSA9IGZhbHNlKSA9PiB7XG4gICAgcmV0dXJuIHt0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBkb25lfVxufVxuXG5leHBvcnQgZGVmYXVsdCB0b0RvRmFjdG9yeSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGJvYXJkRmFjdG9yeSBmcm9tICcuL2JvYXJkLmpzJztcbmltcG9ydCB0b0RvRmFjdG9yeSBmcm9tICcuL3RvZG8uanMnO1xuXG5sZXQgbGlzdHMgPSBbXVxubGV0IHRhc2tzID0gYm9hcmRGYWN0b3J5KCdUYXNrJylcbmxldCBjdXJyZW50ID0gdGFza3Ncbmxpc3RzLnB1c2godGFza3MpXG5cbmNvbnN0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlJylcbmNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc2NyaXB0aW9uJylcbmNvbnN0IGRhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF0ZScpXG5jb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmlvcml0eScpXG5cbmNvbnN0IHN1Ym1pdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdWJtaXQnKVxuXG5jb25zdCBsaXN0RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpc3QnKVxuXG5jb25zdCBuZXdMaXN0TmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsaXN0LW5hbWUnKVxuY29uc3QgbmV3TGlzdEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjcmVhdGUtbGlzdCcpXG5cbmNvbnN0IHByb2plY3REaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdHMnKVxuXG5mdW5jdGlvbiBwb3B1bGF0ZUxpc3QoYXJnKSB7XG4gICAgd2hpbGUgKGxpc3REaXYuZmlyc3RDaGlsZCkge1xuICAgICAgICBsaXN0RGl2LnJlbW92ZUNoaWxkKGxpc3REaXYubGFzdENoaWxkKTtcbiAgICB9XG4gICAgYXJnLmxpc3QuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgbGV0IG5ld0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIG5ld0Rpdi50ZXh0Q29udGVudCA9IGVsZW1lbnQudGl0bGVcbiAgICAgICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9ICdEZWxldGUnXG5cbiAgICAgICAgbmV3RGl2LmFwcGVuZENoaWxkKGJ1dHRvbilcblxuXG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgIGFyZy5kZWxldGVUb0RvKGVsZW1lbnQpXG4gICAgICAgICAgICBidXR0b24ucGFyZW50RWxlbWVudC5yZW1vdmUoKVxuICAgICAgICB9KVxuXG4gICAgICAgIGxpc3REaXYuYXBwZW5kQ2hpbGQobmV3RGl2KVxuICAgIH0pO1xufVxuXG5uZXdMaXN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICBsZXQgbmFtZSA9IG5ld0xpc3ROYW1lLnZhbHVlXG4gICAgbGV0IG5ld0xpc3QgPSBib2FyZEZhY3RvcnkobmFtZSlcbiAgICBsaXN0cy5wdXNoKG5ld0xpc3QpXG4gICAgbGV0IG5ld0xpc3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIG5ld0xpc3REaXYudGV4dENvbnRlbnQgPSBuYW1lXG4gICAgcHJvamVjdERpdi5hcHBlbmRDaGlsZChuZXdMaXN0RGl2KVxuXG4gICAgbmV3TGlzdERpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIHBvcHVsYXRlTGlzdChuZXdMaXN0KVxuICAgICAgICBjdXJyZW50ID0gbmV3TGlzdFxuICAgIH0pXG59KVxuXG5zdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIGxldCB0YXNrVGl0bGUgPSB0aXRsZS52YWx1ZVxuICAgIGxldCB0YXNrRGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbi52YWx1ZVxuICAgIGxldCB0YXNrRGF0ZSA9IGRhdGUudmFsdWVcbiAgICBsZXQgdGFza1ByaW9yaXR5ID0gcHJpb3JpdHkudmFsdWVcblxuICAgIGxldCB0YXNrID0gdG9Eb0ZhY3RvcnkodGFza1RpdGxlLCB0YXNrRGVzY3JpcHRpb24sIHRhc2tEYXRlLCB0YXNrUHJpb3JpdHksIGZhbHNlKVxuICAgIGN1cnJlbnQuYWRkVG9Ebyh0YXNrKVxuXG4gICAgbGV0IG5ld0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgbmV3RGl2LnRleHRDb250ZW50ID0gdGFzay50aXRsZVxuICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9ICdEZWxldGUnXG5cbiAgICBuZXdEaXYuYXBwZW5kQ2hpbGQoYnV0dG9uKVxuXG5cbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgdGFza3MuZGVsZXRlVG9Ebyh0YXNrKVxuICAgICAgICBidXR0b24ucGFyZW50RWxlbWVudC5yZW1vdmUoKVxuICAgIH0pXG5cbiAgICBsaXN0RGl2LmFwcGVuZENoaWxkKG5ld0RpdilcblxufSlcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9