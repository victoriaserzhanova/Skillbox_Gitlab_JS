(function() {
    // create and return app title
    function createAppTitle(title) {
        let appTitle = document.createElement('h2');
        appTitle.textContent = title;
        return appTitle;
    }

    // create and return OBJECT containing form, input and btn
    function createItemForm() {
        let formInput = document.createElement('input');
        let form = document.createElement('form');
        let formBtn = document.createElement('button');
        let formBtnWrapper = document.createElement('div');

        form.classList.add('input-group', 'mb-3');
        formInput.classList.add('form-control');
        formInput.placeholder = 'Enter new task';
        formBtnWrapper.classList.add('input-group-append');
        formBtn.classList.add('btn', 'btn-primary');
        formBtn.textContent = 'Add task';

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
      let list = document.createElement('ul');
      list.classList.add('list-group');
      return list;
    }


    // create and return OBJECT, containing list-item, delete and done btns
    function createItem(object) {
        let item = document.createElement('li');
        // create button group, containing done and delete btns
        let btnGroup = document.createElement('div');
        let doneBtn = document.createElement('button');
        let delBtn = document.createElement('button');

        // set Bootstrap classes for list-item and btns
        item.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
        btnGroup.classList.add('btn-group', 'btn-group-sm');
        doneBtn.classList.add('btn', 'btn-success');
        delBtn.classList.add('btn', 'btn-danger');

        item.textContent = object['name'];
        doneBtn.textContent = 'Done';
        delBtn.textContent = 'Delete';

        // add btns to one block
        btnGroup.append(doneBtn);
        btnGroup.append(delBtn);
        item.append(btnGroup);

        // app needs access to item and btns
        return {
          item,
          doneBtn,
          delBtn,
        }
    }

    function addTodoListFromLocalstorage(todoList,key) {
      let storage = JSON.parse(localStorage.getItem(key));
      storage.forEach(function(element) {
            let listItemFromLocalstorage = createItem(element);
            todoList.append(listItemFromLocalstorage.item);
        });
    }

    function createTodoApp(container, userName) {
        title = `${userName}'s TODO list`;
        let todoAppTitle = createAppTitle(title);
        let itemForm = createItemForm();
        let todoList = createTodoList();
        let todoListData = [];
        key='key';

        container.append(todoAppTitle);
        container.append(itemForm.form);
        container.append(todoList);

        itemForm.formBtn.setAttribute('disabled', '');

        // addTodoListFromLocalstorage(todoList,key);

        // set attribute disabled for formBtn if formInput is empty
        itemForm.formInput.addEventListener('input', function() {
            if (itemForm.formInput.value) {
                itemForm.formBtn.removeAttribute('disabled');
            }
            else {
                itemForm.formBtn.setAttribute('disabled', '');
            }
        });

        // form submit event creates new item
        // browser creates event submit on form when user presses 'add task' btn or ENTER
        itemForm.form.addEventListener('submit', function(event) {
            // prevent default behaviour like page reloading after form submit
            event.preventDefault();

            // NO form submitting if input value is null
            if (!itemForm.formInput.value) {
                return false
            }

            // create and add new list-item to todo list. list-item name == input
            let itemData = {};
            itemData['name'] = itemForm.formInput.value;
            itemData['done'] = false;
            let listItem = createItem(itemData);
            todoList.append(listItem.item);
            todoListData.push(itemData);
            localStorage.setItem(key, JSON.stringify(todoListData));
            console.log(localStorage);

            // eventListeners for btns
            let doneBtnValue = false; //item done status: false/true
            // set done property by default
            listItem.doneBtn.addEventListener('click', function() {
              listItem.item.classList.toggle('list-group-item-success');
                if (listItem.item.classList.contains('list-group-item-success')) {
                doneBtnValue = true;
                }
                else {
                doneBtnValue = false;
                }
            });

            listItem.delBtn.addEventListener('click', function() {
                let index = itemArray.indexOf(itemObject);
                console.log(index);

                listItem.item.remove();
                console.log(itemArray);
            });


            // clean input
            itemForm.formInput.value = '';

            itemForm.formBtn.setAttribute('disabled', '');

            // console.log(item.itemObject);
            // console.log(itemArray);
            });
    }

    window.createTodoApp = createTodoApp;
}) ();







