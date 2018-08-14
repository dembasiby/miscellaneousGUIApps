var todoItems = [{id: 1, title: 'Homework'},
              {id: 2, title: 'Shopping'},
              {id: 3, title: 'Calling Mom'},
              {id: 4, title: 'Coffee with John'}];
var todos = document.getElementById('todos').innerHTML;
var template = Handlebars.compile(todos);
var yes = document.querySelector('.confirmYes');
var no = document.querySelector('.confirmNo');
var deleteTodo = document.querySelector('#deleteTodo');


function displayItem(elem, value) {
  document.querySelector(elem).style.display = value;
}

// function deleteTodo(event) {
//   event.target.remove();
//   displayItem('#confirm', 'none');
// }

var html = template({ todos: todoItems });
document.getElementById('displayTodos').innerHTML += html;

var lis = document.querySelectorAll('#displayTodos li');

Array.prototype.slice.call(lis).forEach(function (li) {
  li.addEventListener('contextmenu', function (e) {
    e.preventDefault();
    displayItem('#contextmenu', 'block');
    var li = e.target;
    
    deleteTodo.addEventListener('click', function(e) {
      e.preventDefault();
      
      displayItem('#confirm', 'block');
      displayItem('#contextmenu', 'none');
    
      yes.addEventListener('click', function() {
        li.remove();
        displayItem('#confirm', 'none');
      });
    
      no.addEventListener('click', function() {
        displayItem('#confirm', 'none');
      });

      
    });
  });
});

document.addEventListener('click', function() {
  displayItem('#contextmenu', 'none');
});


