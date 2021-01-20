(function() {
	// create and return app title
	function createAppTitle(title) {
		let appTitle = document.createElement('h2');
		appTitle.textContent = title;
		return appTitle;
	}

	// create and return OBJECT? containing form, input and btn
	function createTodoItemForm() {
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
	function createTodoItem(name) {
		let item = document.createElement('li');
		// create button group, containing done and delete btns
		let btnGroup = document.createElement('div');
		let doneBtn = document.createElement('button');
		let delBtn = document.createElement('button');

		// set Bootstrap classes for list-item and btns
		item.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
		item.textContent = name;

		btnGroup.classList.add('btn-group', 'btn-group-sm');
		doneBtn.classList.add('btn', 'btn-success');
		doneBtn.textContent = 'Done';
		delBtn.classList.add('btn', 'btn-danger');
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

	function createTodoApp(container, userName) {
		title = `${userName}'s TODO list`
		let todoAppTitle = createAppTitle(title);
		let todoItemForm = createTodoItemForm();
		let todoList = createTodoList();

		container.append(todoAppTitle);
		container.append(todoItemForm.form);
		container.append(todoList);

		// browser creates event submit on form when user presses 'add task' btn or ENTER
		todoItemForm.form.addEventListener('submit', function(event){
			// prevent default behaviour like page reloading after form submit
			event.preventDefault();

			// don't create new list-item if input is empty
			if (!todoItemForm.formInput.value) {
				return;
			}

			// create and add new list-item to todo list. list-item name == input
			let todoItem = createTodoItem(todoItemForm.formInput.value);
			todoList.append(todoItem.item);

			// eventListeners for btns
			todoItem.doneBtn.addEventListener('click', function() {
				todoItem.item.classList.toggle('list-group-item-success');
			});

			todoItem.delBtn.addEventListener('click', function() {
				if (confirm('Delete current task')) {
					todoItem.item.remove();
				}
			});

			// clean input
			todoItemForm.formInput.value = '';
		});
	}

	window.createTodoApp = createTodoApp;
}) ();


