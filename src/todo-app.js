(function () {
  function createTodoApp(container, userName) {
    const title = `${userName}'s TODO list`;
    const storageKeys = {
      Vika: "vikaStorageData",
      dad: "dadStorageData",
      mom: "momStorageData",
    };
    const currentStorageKey = storageKeys[userName];

    let todoAppTitle = createAppTitle(title);
    let itemForm = createItemForm();
    let todoList = createTodoList();
    let todoListData = [];
    console.log(todoListData);

    container.append(todoAppTitle);
    container.append(itemForm.form);
    container.append(todoList);

    itemForm.formBtn.setAttribute("disabled", "");

    if (localStorage) {
      addTodoListFromLocalstorage(todoList, currentStorageKey, todoListData);
    }

    // set attribute disabled for formBtn if formInput is empty
    itemForm.formInput.addEventListener("input", function () {
      if (itemForm.formInput.value) {
        itemForm.formBtn.removeAttribute("disabled");
      } else {
        itemForm.formBtn.setAttribute("disabled", "");
      }
    });

    // form submit event creates new item
    // browser creates event submit on form when user presses 'add task' btn or ENTER
    itemForm.form.addEventListener("submit", function (event) {
      // prevent default behaviour like page reloading after form submit
      event.preventDefault();

      // NO form submitting if input value is null
      if (!itemForm.formInput.value) {
        return false;
      }

      // create and add new list-item to todo list. list-item name == input
      let itemData = {
        name: itemForm.formInput.value,
        done: false,
      };
      let listItem = createItem(itemData, todoListData, currentStorageKey);
      todoList.append(listItem.item);

      // clean input
      itemForm.formInput.value = "";

      itemForm.formBtn.setAttribute("disabled", "");
      return listItem;
    });


    // delBtn.addEventListener("click", deleteBtnClickHandler);

  };

  // create and return app title
  function createAppTitle(title) {
    let appTitle = document.createElement("h2");
    appTitle.textContent = title;
    return appTitle;
  }

  // create and return OBJECT containing form, input and btn
  function createItemForm() {
    let formInput = document.createElement("input");
    let form = document.createElement("form");
    let formBtn = document.createElement("button");
    let formBtnWrapper = document.createElement("div");

    form.classList.add("input-group", "mb-3");
    formInput.classList.add("form-control");
    formInput.placeholder = "Enter new task";
    formBtnWrapper.classList.add("input-group-append");
    formBtn.classList.add("btn", "btn-primary");
    formBtn.textContent = "Add task";

    formBtnWrapper.append(formBtn);
    form.append(formInput);
    form.append(formBtnWrapper);

    return {
      form,
      formInput,
      formBtn,
    };
  }

  // create and return todo LIST
  function createTodoList() {
    let list = document.createElement("ul");
    list.classList.add("list-group");
    return list;
  }

  // create and return OBJECT, containing list-item, delete and done btns
  function createItem(object,todoListData,currentStorageKey) {
    let item = document.createElement("li");
    // create button group, containing done and delete btns
    let btnGroup = document.createElement("div");
    let doneBtn = document.createElement("button");
    let delBtn = document.createElement("button");

    // set Bootstrap classes for list-item and btns
    item.classList.add(
      "list-group-item",
      "d-flex",
      "justify-content-between",
      "align-items-center"
    );
    btnGroup.classList.add("btn-group", "btn-group-sm");
    doneBtn.classList.add("btn", "btn-success");
    delBtn.classList.add("btn", "btn-danger");

    item.textContent = object.name;
    doneBtn.textContent = "Done";
    delBtn.textContent = "Delete";

    // add btns to one block
    btnGroup.append(doneBtn);
    btnGroup.append(delBtn);
    item.append(btnGroup);

    if (object.done == true) {
      item.classList.add("list-group-item-success");
    }

    todoListData.push(object);
    console.log(todoListData);
    localStorage.setItem(currentStorageKey, JSON.stringify(todoListData));
    console.log(localStorage);

    doneBtn.addEventListener("click", function() {
        item.classList.toggle("list-group-item-success");
        if (item.classList.contains("list-group-item-success")) {
            object.done = true;
        } else {
            object.done = false;
        }
        console.log(todoListData);
        localStorage.setItem(currentStorageKey, JSON.stringify(todoListData));
        console.log(localStorage);
        });

    delBtn.addEventListener("click", function() {
      item.remove();
      object.name = '';

      localStorage.setItem(currentStorageKey, JSON.stringify(todoListData));
      });

    // app needs access to item and btns
    return {
      item,
      doneBtn,
      delBtn,
    };
  }

  function addTodoListFromLocalstorage(todoList,currentStorageKey, todoListData) {
    let storageTodoList = JSON.parse(localStorage.getItem(currentStorageKey));
    if (storageTodoList) {
      storageTodoList.forEach(function (element) {
        let listItemFromLocalstorage = createItem(element, todoListData,currentStorageKey);
        todoList.append(listItemFromLocalstorage.item);
      });
    }
  }

  window.createTodoApp = createTodoApp;
})();
