(function () {
  function init(userName,container = document.getElementById('todo-app')) {
    const title = `${userName}'s TODO list`;
    const storageKeys = {
      Vika: "vikaStorageData",
      dad: "dadStorageData",
      mom: "momStorageData",
    };
    const currentStorageKey = storageKeys[userName];
    showFrame(createFrame(title),container);
  }
  function createFrame(title){
      let frameElements = {
        title:addTitleForApp(title),
        formAddTasks:createFormAddTasks(),
        containerForTasks:createContainerForTasks()
      }
      return frameElements;
  }
  function addTitleForApp(title){
    let appTitle = document.createElement("h2");
    appTitle.textContent = title;
    console.log(appTitle);
    return appTitle;
  }
  function createFormAddTasks(){
    let formAddTasksInput = document.createElement("input");
    let formAddTasks = document.createElement("form");
    let formAddTasksBtn = document.createElement("button");
    let formAddTasksBtnWrapper = document.createElement("div");

    formAddTasks.classList.add("input-group", "mb-3");
    formAddTasksInput.classList.add("form-control");
    formAddTasksInput.placeholder = "Enter new task";
    formAddTasksBtnWrapper.classList.add("input-group-append");
    formAddTasksBtn.classList.add("btn", "btn-primary");
    formAddTasksBtn.id = "addTask";
    formAddTasksBtn.textContent = "Add task";
    //дизейблим ее именно здесь, а не в главной функции
    formAddTasksBtn.setAttribute("disabled", "");

    formAddTasksBtnWrapper.append(formAddTasksBtn);
    formAddTasks.append(formAddTasksInput);
    formAddTasks.append(formAddTasksBtnWrapper);

    return {
      formAddTasks,
      formAddTasksInput,
      formAddTasksBtn,
    };
  }
  function createContainerForTasks(){
    let list = document.createElement("ul");
    list.classList.add("list-group");
    return list;
  }
  function showFrame(frameElements,container){
      console.log(frameElements.title);
    container.append(frameElements.title);
    container.append(frameElements.formAddTasks.formAddTasks);
    container.append(frameElements.containerForTasks);
  }
  window.init = init;
})();
