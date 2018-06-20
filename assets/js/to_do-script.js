var todos = ["Buy new turtle"];


function listTodos () {
    console.log ("**********");
        todos.forEach(function(todo, i) { //parameters: specific item in the array (iteration), index number
            console.log(i + ": " + todo);
        });
    console.log ("**********");
}

function addTodo () {
    var newTodo = prompt("Enter new todo");
    todos.push(newTodo);
    console.log("New todo added");
}

function deleteTodo () {
    //ask for index of todo to be deleted
    var index = prompt("what's the index of the todo you want to delete?");
    //delete that todo
    todos.splice(index, 1);
    console.log("Todo was deleted")
}

window.setTimeout(function() { //setting a half second timeout so the HTML will load before the JS
    var input = prompt("What would you like to do?");
    while(input !== "quit") {
        if(input === "list") {
            listTodos();
        } else if(input === "new") {
            addTodo();
        } else if(input === "delete") {
            deleteTodo();
        }
        input = prompt("What would you like to do?");
    }
    console.log ("ok, you quit the app");
}, 500);