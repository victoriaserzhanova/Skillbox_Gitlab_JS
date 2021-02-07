"use strict";

(function (){
  function addItemInLS(object,arrayOfObjects, currentStorageKey) {
    if (getItemsFromLs(currentStorageKey)){
      arrayOfObjects = getItemsFromLs(currentStorageKey);
    }
    if (countItemsInLs(currentStorageKey)) {
      object.id = countItemsInLs(currentStorageKey);
    }else{
      object.id = 0;
    }
    arrayOfObjects.push(object);
    localStorage.setItem(
      currentStorageKey,
      JSON.stringify(arrayOfObjects)
    );
  }

  function changeItemPropertyInLs(object,arrayOfObjects, currentStorageKey) {
    arrayOfObjects = getItemsFromLs(currentStorageKey);
    let itemToChangeId = object.id;
    let itemToChange = arrayOfObjects.find(item => item.id == itemToChangeId);
    if (itemToChange.done == true) {
      itemToChange.done = false;
    }else {
      itemToChange.done = true;
    }
    console.log(arrayOfObjects)
    localStorage.setItem(
      currentStorageKey,
      JSON.stringify(arrayOfObjects)
    );
    console.log(localStorage)
}

  function deleteItemFromLs(object,arrayOfObjects, currentStorageKey) {
    arrayOfObjects = getItemsFromLs(currentStorageKey);
    let itemId = object.id;
    for (let i=0; i<arrayOfObjects.length; i++) {
      let indexOfItemToChange = i;
      if (arrayOfObjects[i].id == itemId) {
        arrayOfObjects.splice(indexOfItemToChange,1);
        localStorage.setItem(
          currentStorageKey,
          JSON.stringify(arrayOfObjects)
        );
      }
    }
  }

  function getItemsFromLs(currentStorageKey) {
      if (localStorage.getItem(currentStorageKey)) {
          let items = JSON.parse(localStorage.getItem(currentStorageKey));
          return items;
      } else {
          return false;
      }
  }

  function countItemsInLs(currentStorageKey) {
      if (getItemsFromLs(currentStorageKey)) {
          return getItemsFromLs(currentStorageKey).length;
      } else {
          return false;
      }
  }

  function addTodoListFromLS(todoListEl, currentStorageKey, itemsData) {
    if (getItemsFromLs(currentStorageKey)) {
      let storageTodoList = getItemsFromLs(currentStorageKey);
      storageTodoList.forEach(function (element) {
        let listItemFromLS = createItem(element, itemsData,currentStorageKey);
        todoListEl.append(listItemFromLS.itemEl);
      });
    }else {
      return false;
    }
  }

  window.addItemInLS = addItemInLS;
  window.changeItemPropertyInLs = changeItemPropertyInLs;
  window.deleteItemFromLs = deleteItemFromLs;
  window.getItemsFromLs = getItemsFromLs;
  window.countItemsInLs = countItemsInLs;
  window.addTodoListFromLS = addTodoListFromLS;
})();
