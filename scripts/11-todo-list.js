const todolist = [{
    name: 'make dinner',
    dueDate: '2022-12-22'
}];

displaytodo()

function displaytodo() {
    
    let todolistHtml = '';

    for (let i = 0; i < todolist.length; i++) {
        const todoObject = todolist[i];
        // const name = todoObject.name;
        // const dueDate = todoObject.dueDate;
        const { name, dueDate } = todoObject;
        const html = `
            <div>${name}</div>
            <div>${dueDate}</div>
            <button onclick="
                todolist.splice(${i}, 1); 
                displaytodo();
            " class="delet-todo-butt">Delete</button>
        `;
        todolistHtml += html;
    }
    console.log(todolistHtml)

    document.querySelector('.todo-list').innerHTML = todolistHtml;
}

function addTodo() {
    const inputELement = document.querySelector('.input-todo');

    const name = inputELement.value;

    const dateInputElement = document.querySelector('.input-dueDate');

    const dueDate = dateInputElement.value;

    todolist.push({
        // name: name,
        // dueDate: dueDate,
        name,
        dueDate
    });

    console.log(todolist);

    inputELement.value = '';

    displaytodo()
}