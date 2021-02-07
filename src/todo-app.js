"use strict";

(function () {
  function createTodoApp(container, userName) {
    const title = `${userName}'s TODO list`;

    let appTitleEl = createTitle(title);
    let itemFormEl= createItemForm();
    let todoListEl = createTodoList();
    let itemsData = [];

    container.append(appTitleEl);
    container.append(itemFormEl.formEl);
    container.append(todoListEl);

    const storageKeys = {
      Vika: "vikaStorageData",
      dad: "dadStorageData",
      mom: "momStorageData",
    };
    const currentStorageKey = storageKeys[userName];

    addTodoListFromLS(todoListEl, currentStorageKey, itemsData);

    // set attribute disabled for formBtnEl if formInputEl is empty
    itemFormEl.formInputEl.addEventListener("input", function () {
      if (itemFormEl.formInputEl.value) {
        itemFormEl.formBtnEl.removeAttribute("disabled");
      } else {
        itemFormEl.formBtnEl.setAttribute("disabled", "");
      }
    });

    // formElsubmit event creates new item
    itemFormEl.formEl.addEventListener("submit", function (event) {
      // prevent default behaviour like page reloading after formElsubmit
      event.preventDefault();

      // NO formElsubmitting if input value is null
      if (!itemFormEl.formInputEl.value) {
        return false;
      }

      // create and add new list-item to todo list. list-item name == input
      let listItemData = {
        name: itemFormEl.formInputEl.value,
        done: false,
      };

      let listItem = createItem(listItemData, itemsData, currentStorageKey);
      todoListEl.append(listItem.itemEl);

      addItemInLS(listItemData, itemsData, currentStorageKey);

      // clean input
      itemFormEl.formInputEl.value = "";

      itemFormEl.formBtnEl.setAttribute("disabled", "");
      return listItem;
    });
  };
  console.log('todo-app.js');

  window.createTodoApp = createTodoApp;
})();
