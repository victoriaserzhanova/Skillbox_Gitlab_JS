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
    // localStorage.setItem(currentStorageKey, JSON.stringify(todoListData));

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
      let listItem = createItem(itemData, todoListData,currentStorageKey);
      todoList.append(listItem.item);

      listItem.doneBtn.addEventListener("click", function() {
        listItem.classList.toggle("list-group-item-success");
        if (listIitem.classList.contains("list-group-item-success")) {
          let storageTodoList = JSON.parse(localStorage.getItem(currentStorageKey));
          storageTodoList[object.name]
          object.done = true;
        } else {
          object.done = false;
        }
        console.log(object);
        localStorage.setItem(currentStorageKey, JSON.stringify(todoListData));
        console.log(localStorage);
      });

      // clean input
      itemForm.formInput.value = "";

      itemForm.formBtn.setAttribute("disabled", "");
      return listItem;
    });

    // listItem.doneBtn.addEventListener("click", doneBtnClickHandler);


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
    localStorage.setItem(currentStorageKey, JSON.stringify(todoListData));
    console.log(localStorage);
    // app needs access to item and btns
    return {
      item,
      doneBtn,
      delBtn,
    };
  }

  function addTodoListFromLocalstorage(
    todoList,
    currentStorageKey,
    todoListData
  ) {
    let storageTodoList = JSON.parse(localStorage.getItem(currentStorageKey));
    if (storageTodoList) {
      storageTodoList.forEach(function (element) {
        let listItemFromLocalstorage = createItem(element, todoListData,currentStorageKey);
        todoList.append(listItemFromLocalstorage.item);
      });
      console.log(localStorage);
    }
  }
  // function doneBtnClickHandler(event) {
  //   let li = event.path[2];

  //   console.log(li);
  //   li.classList.toggle("list-group-item-success");
  //   if (listItem.item.classList.contains("list-group-item-success")) {
  //     itemData.done = true;
  //   } else {
  //     itemData.done = false;
  //   }
  //   console.log(itemData);
  //   localStorage.setItem(currentStorageKey, JSON.stringify(todoListData));
  //   console.log(localStorage);
  // }
  function deleteBtnClickHandler(event) {
    console.log("dlt btn asd");
    let index = itemArray.indexOf(itemObject);
    console.log(index);

    listItem.item.remove();
    console.log(itemArray);
  }
  window.createTodoApp = createTodoApp;
})();
