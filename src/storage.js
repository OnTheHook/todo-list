import boardFactory from "./board";

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
        finalList = boardFactory[accessList[i]]
        for (let p = 0; p < listLength; p++) {
            let obj = JSON.parse(localStorage.getItem(accessList[i]+ p))
            let task = toDoFactory(obj.title, obj.description, obj.dueDate, obj.priority, obj.done)
            finalList.addToDo(task)

        }
    }

    return finalList
}

export { storageAvailable, storeInfo, accessInfo }