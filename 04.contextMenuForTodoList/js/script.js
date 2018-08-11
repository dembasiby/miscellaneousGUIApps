var todoItems = [{id: 1, title: 'Homework'},
              {id: 2, title: 'Shopping'},
              {id: 3, title: 'Calling Mom'},
              {id: 4, title: 'Coffee with John'}];
var todos = document.getElementById('todos').innerHTML;
var template = Handlebars.compile(todos);
var yes = document.querySelector('.confirmYes');
var no = document.querySelector('.confirmNo');

function confirmStyle(value) {
  document.querySelector('#confirm').style.display = value;
}

function deleteTodo(event) {
  event.target.parentNode.remove();
  confirmStyle('none');
}

var html = template({ todos: todoItems });
document.getElementById('displayTodos').innerHTML += html;

var lis = document.querySelectorAll('#displayTodos li');

Array.prototype.slice.call(lis).forEach(function (li) {
li.addEventListener('contextmenu', function (e) {
    e.preventDefault();
    console.log('Right click event occured!');
    confirmStyle('block');

    yes.addEventListener('click', function() {
      deleteTodo(e);
    });

    no.addEventListener('click', function() {
      confirmStyle('none');
    });
  });
});

