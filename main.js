const todoList = {
    todos: [],
    displayTodos: function() {
        if (this.todos.length === 0) {
            console.log('Your todo list is empty!');
        } else {
            console.log('My Todos:');
            for (let i = 0; i < this.todos.length; i++) {
                if (this.todos[i].completed === true) {
                    console.log('(x)', this.todos[i].todoText);
                } else {
                    console.log('( )', this.todos[i].todoText);
                }
            }
        }
    },
    addTodo: function(todoText) {
        this.todos.push({
            todoText: todoText,
            completed: false
        });
        this.displayTodos();
    },
    changeTodo: function(position, todoText) {
        this.todos[position].todoText = todoText;
        this.displayTodos();
    },
    deleteTodo: function(position) {
        this.todos.splice(position, 1);
        this.displayTodos();
    },
    toggleCompleted: function(position) {
        const todo = this.todos[position];
        todo.completed = !todo.completed;
        this.displayTodos();
    },
    toggleAll: function() {
        let totalTodos = this.todos.length;
        let completedTodos = 0;

        for (let i = 0; i < totalTodos; i++) {
            if (this.todos[i].completed === true) {
                completedTodos++;
            }
        }

        if(completedTodos === totalTodos) {
            for (let i = 0; i < totalTodos; i++) {
                this.todos[i].completed = false;
            }
        } else {
            for (let i = 0; i < totalTodos; i++) {
                this.todos[i].completed = true;
            }
        }
        this.displayTodos();
    }
};

const displayTodosButton = document.querySelector('#displayTodosButton');
const toggleAllButton = document.querySelector('#toggleAll');
const addTodoTextInput = document.querySelector('#addTodoTextInput');
const addTodoButton = document.querySelector('#addTodoButton');
const changeTodoPositionInput = document.querySelector('#changeTodoPositionInput');
const changeTodoTextInput = document.querySelector('#changeTodoTextInput');
const changeTodoButton = document.querySelector('#changeTodoButton');
const deleteTodoButton = document.querySelector('#deleteTodoButton');
const deleteTodoPositionInput = document.querySelector('#deleteTodoPositionInput');
const toggleCompletedButton = document.querySelector('#toggleCompletedButton');
const toggleCompletedPositionInput = document.querySelector('#toggleCompletedPositionInput');


displayTodosButton.addEventListener('click', function() {
    todoList.displayTodos();
})

toggleAllButton.addEventListener('click', function() {
    todoList.toggleAll();
})

addTodoButton.addEventListener('click', function() {
    todoList.addTodo(addTodoTextInput.value);
    addTodoTextInput.value = '';
})

changeTodoButton.addEventListener('click', function() {
    todoList.changeTodo(Number(changeTodoPositionInput.value), changeTodoTextInput.value);
    changeTodoPositionInput.value = '';
    changeTodoTextInput.value = '';
})

deleteTodoButton.addEventListener('click', function() {
    todoList.deleteTodo(Number(deleteTodoPositionInput.value))
    deleteTodoPositionInput.value = '';
})

toggleCompletedButton.addEventListener('click', function() {
    todoList.toggleCompleted(Number(toggleCompletedPositionInput.value))
    toggleCompletedPositionInput.value = '';
})

const view = {
    displayTodos: function() {
        const todosUl = document.querySelector('ul');
        todosUl.innerHTML = '';

        for (let i = 0; i < todoList.todos.length; i++) {
            const todoLi = document.createElement('li');
            todosUl.appendChild(todoLi);
            
        }
    },
}