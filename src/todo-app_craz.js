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

    container.append(todoAppTitle);
    container.append(itemForm.form);
    container.append(todoList);

    itemForm.formBtn.setAttribute("disabled", "");

    addTodoListFromLocalstorage(todoList, currentStorageKey, todoListData);
    localStorage.setItem(currentStorageKey, JSON.stringify(todoListData));

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
      let listItem = createItem(itemData);
      todoList.append(listItem.item);
      todoListData.push(itemData);
      localStorage.setItem(currentStorageKey, JSON.stringify(todoListData));
      console.log(localStorage.getItem(currentStorageKey));
      console.log(localStorage);

      listItem.delBtn.addEventListener("click", function () {
        let index = itemArray.indexOf(itemObject);
        console.log(index);

        listItem.item.remove();
        console.log(itemArray);
      });

      // clean input
      itemForm.formInput.value = "";

      itemForm.formBtn.setAttribute("disabled", "");

      // console.log(item.itemObject);
      // console.log(itemArray);
    });
    handlerEvents(itemForm);
  }
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
  function addTodoListFromLocalstorage(
    todoList,
    currentStorageKey,
    todoListData
  ) {
    let storageTodoList = JSON.parse(localStorage.getItem(currentStorageKey));
    if (storageTodoList) {
      storageTodoList.forEach(function (element) {
        let listItemFromLocalstorage = createItem(element);
        todoListData.push(element);
        todoList.append(listItemFromLocalstorage.item);
      });
      console.log(localStorage);
    }
  }
  // create and return OBJECT, containing list-item, delete and done btns
  function createItem(object) {
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
    doneBtn.classList.add("btn", "btn-success", "attr-btnSucces");
    delBtn.classList.add("btn", "btn-danger");

    item.textContent = object["name"];
    doneBtn.textContent = "Done";
    delBtn.textContent = "Delete";

    // add btns to one block
    btnGroup.append(doneBtn);
    btnGroup.append(delBtn);
    item.append(btnGroup);

    // app needs access to item and btns
    return {
      item,
      doneBtn,
      delBtn,
    };
  }
  function handlerEvents(addItemForm) {
    // set attribute disabled for formBtn if formInput is empty
    addItemForm.formInput.addEventListener("input", function () {
      console.log(this);
      if (this.value) {
        addItemForm.formBtn.removeAttribute("disabled");
      } else {
        addItemForm.formBtn.setAttribute("disabled", "");
      }
    });
    // eventListeners for btns

    document.addEventListener("click", function () {
      console.log("click done");
      listItem.item.classList.toggle("list-group-item-success");
      if (listItem.item.classList.contains("list-group-item-success")) {
        itemData.done = true;
      } else {
        itemData.done = false;
      }
      console.log(itemData);
      localStorage.setItem(currentStorageKey, JSON.stringify(todoListData));
      console.log(localStorage);
    });
  }

  window.createTodoApp = createTodoApp;
})();