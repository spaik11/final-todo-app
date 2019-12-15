const todoList = {
    todos: [],
    addTodo: function(todoText) {
        this.todos.push({
            todoText: todoText,
            completed: false
        });
    },
    changeTodo: function(position, todoText) {
        this.todos[position].todoText = todoText;
    },
    deleteTodo: function(position) {
        this.todos.splice(position, 1);
    },
    toggleCompleted: function(position) {
        const todo = this.todos[position];
        todo.completed = !todo.completed;
    },
    toggleAll: function() {
        let totalTodos = this.todos.length;
        let completedTodos = 0;

        this.todos.forEach((todo) => {
            if (todo.completed) {
                completedTodos++;
            }
        })

        this.todos.forEach((todo) => {
            if (completedTodos === totalTodos) {
                todo.completed = false;
            } else {
                todo.completed = true;
            }
        })
    }
};

const view = {
    displayTodos: function() {
        const todosUl = document.querySelector('ul');
        todosUl.innerHTML = '';
        
        todoList.todos.forEach((todo, position) => {
            const todoLi = document.createElement('li');
            let todoTextWithCompletion = '';
            
            if (todo.completed) {
                todoTextWithCompletion = `( x ) ${todo.todoText}`;
            } else {
                todoTextWithCompletion = `(   ) ${todo.todoText}`;
            }
            
            todoLi.id = position;
            todoLi.innerText = todoTextWithCompletion;
            todoLi.appendChild(view.createDeleteButton())
            todosUl.appendChild(todoLi);
        })
    },
    createDeleteButton: function() {
        const createButton = document.createElement('button');
        createButton.innerText = 'Delete';
        createButton.className = 'deleteButton';
        
        return createButton;
    },
    setUpEventListeners: function() {
        const todosUl = document.querySelector('ul');
        
        todosUl.addEventListener('click', function(event) {
            const elementClicked = event.target;
            
            todoList.deleteTodo(Number(elementClicked.parentNode.id));
            view.displayTodos();
        })
    },
}

view.setUpEventListeners();

const toggleAllButton = document.querySelector('#toggleAll');
const addTodoTextInput = document.querySelector('#addTodoTextInput');
const addTodoButton = document.querySelector('#addTodoButton');
const changeTodoPositionInput = document.querySelector('#changeTodoPositionInput');
const changeTodoTextInput = document.querySelector('#changeTodoTextInput');
const changeTodoButton = document.querySelector('#changeTodoButton');
const toggleCompletedButton = document.querySelector('#toggleCompletedButton');
const toggleCompletedPositionInput = document.querySelector('#toggleCompletedPositionInput');


toggleAllButton.addEventListener('click', function() {
    todoList.toggleAll();
    view.displayTodos();
})

addTodoButton.addEventListener('click', function() {
    todoList.addTodo(addTodoTextInput.value);
    addTodoTextInput.value = '';
        view.displayTodos();
})
    
changeTodoButton.addEventListener('click', function() {
    todoList.changeTodo(Number(changeTodoPositionInput.value), changeTodoTextInput.value);
    changeTodoPositionInput.value = '';
    changeTodoTextInput.value = '';
    view.displayTodos();
})
    
toggleCompletedButton.addEventListener('click', function() {
    todoList.toggleCompleted(Number(toggleCompletedPositionInput.value))
    toggleCompletedPositionInput.value = '';
    view.displayTodos();
})