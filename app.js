// 4 functions needed ...

// 1. Show -> display the current todo items

// 2. add -> will add the text from input into the localstorage database

// 3. remove -> will remove the selected item from the todos in db

// 4. getTodo -> retrieve the list of todos from the db.


//getTodo function
const getTodo = () => {
  let todos = [];
  const todoStr = localStorage.getItem('todo');
  // if the array todos in local storage is not empty change the JSON string back to js data and return it.
  if(todoStr !== null) {
      todos = JSON.parse(todoStr);
  }
  return todos;
}



document.addEventListener('keypress', function(event){
  if(event.keyCode === 13 || event.which === 13){
      add();
  }
});

// add function
const add = () => {
  const todoItem = document.getElementById('inputTodo').value;
  if(todoItem !== '') {
      const todos = getTodo();
      todos.push(todoItem);
      // turn data back to JSON string to store it in localStorage
      localStorage.setItem('todo', JSON.stringify(todos));
  
      document.getElementById('inputTodo').value = '';
  
      show();
  }

 
  return false;
}


// has to be written like this?
function remove() {
  // look into this -> 
  var id = this.getAttribute('id');
  var todos = getTodo();
  todos.splice(id, 1);
  localStorage.setItem('todo', JSON.stringify(todos));

  show();

  return false;
}


function lineThrough() {


}
lineThrough();

const show = () => {
  const todos = getTodo();
  let html = '<ul>';

  for(let i=0; i < todos.length; i ++){
      html = html + `<hr><li class="todo__item"> * ${todos[i]} <button class="remove btn pl-2" id="${i}">X</button><button class="done btn" id=${i}>!</button> </li><hr>`;
  };
  html = html + '</ul>';

  document.getElementById('todos').innerHTML = html;

  // used getElementsByClassName to get all the buttons with remove as a class
  // loop through those buttons.
  // Can then delete the button which has the index defined and call the remove function on it.
  var buttons = document.getElementsByClassName('remove');
  for (var i=0; i < buttons.length; i++) {
      buttons[i].addEventListener('click', remove);
  };
}




document.getElementById('add__todo--item').addEventListener('click', add);
show();


const highlight = () => {
  let important = document.querySelector('.done');
  important.addEventListener('click', function() {
    console.log(important);
    for(let i = 0; i < todos.length; i ++){

        if (important) {
          const todo = document.querySelector('.todo__item');
          todo.style.color = 'orange';
          console.log(important);

        }
    }

  });

};

highlight();




// function important() {
//   // look into this -> 
//   var id = this.getAttribute('id');
//   var todos = getTodo();
//   localStorage.setItem('todo', JSON.stringify(todos));

//   show();

//   return false;
// }





