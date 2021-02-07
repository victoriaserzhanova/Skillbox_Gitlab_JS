"use strict";

(function () {
    // create and return app title
  function createTitle(title) {
    let titleEl = document.createElement("h2");
    titleEl.textContent = title;
    return titleEl;
  }

  // create and return OBJECT containing formEl, input and btn
  function createItemForm() {
    let formInputEl = document.createElement("input");
    let formEl= document.createElement("form");
    let formBtnEl = document.createElement("button");
    let formBtnWrapperEl = document.createElement("div");

    formEl.classList.add("input-group", "mb-3");
    formInputEl.classList.add("form-control");
    formInputEl.placeholder = "Enter new task";
    formBtnWrapperEl.classList.add("input-group-append");
    formBtnEl.classList.add("btn", "btn-primary");
    formBtnEl.textContent = "Add task";

    formBtnWrapperEl.append(formBtnEl);
    formEl.append(formInputEl);
    formEl.append(formBtnWrapperEl);

    formBtnEl.setAttribute("disabled", "");

    return {
      formEl,
      formInputEl,
      formBtnEl,
    };
  }

  // create and return todo LIST
  function createTodoList() {
    let listEl = document.createElement("ul");
    listEl.classList.add("list-group");
    return listEl;
  }

  // create and return OBJECT, containing list-item, delete and done btns
  function createItem(object, itemsData, currentStorageKey) {
    let itemEl = document.createElement("li");
    // create button group, containing done and delete btns
    let btnGroupEl = document.createElement("div");
    let doneBtnEl = document.createElement("button");
    let delBtnEl = document.createElement("button");

    // set Bootstrap classes for list-item and btns
    itemEl.classList.add(
      "list-group-item",
      "d-flex",
      "justify-content-between",
      "align-items-center"
    );
    btnGroupEl.classList.add("btn-group", "btn-group-sm");
    doneBtnEl.classList.add("btn", "btn-success");
    delBtnEl.classList.add("btn", "btn-danger");

    itemEl.textContent = object.name;
    doneBtnEl.textContent = "Done";
    delBtnEl.textContent = "Delete";

    // add btns to one block
    btnGroupEl.append(doneBtnEl);
    btnGroupEl.append(delBtnEl);
    itemEl.append(btnGroupEl);

    if (object.done == true) {
      itemEl.classList.add("list-group-item-success");
    }

    doneBtnEl.addEventListener("click", function() {
      itemEl.classList.toggle("list-group-item-success");

      changeItemPropertyInLs(object,itemsData, currentStorageKey);
      });

    delBtnEl.addEventListener("click", function() {
      if (confirm('Delete task')) {
        itemEl.remove();
        deleteItemFromLs(object,itemsData, currentStorageKey);
        console.log(localStorage)
      };
      console.log(localStorage)
    });

    // app needs access to item and btns
    return {
      itemEl,
      doneBtnEl,
      delBtnEl,
    };
  }

  console.log("interface.js");

  window.createTitle = createTitle;
  window.createItemForm = createItemForm;
  window.createTodoList = createTodoList;
  window.createItem = createItem;
})();




