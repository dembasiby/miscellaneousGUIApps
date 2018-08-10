var todoItems = [{id: 1, title: 'Homework'},
              {id: 2, title: 'Shopping'},
              {id: 3, title: 'Calling Mom'},
              {id: 4, title: 'Coffee with John'}];

var todos = document.getElementById('todos').innerHTML;
var template = Handlebars.compile(todos);
var ul = document.getElementById('displayTodos');
var confirm = document.querySelector('#confirm');
var yes = document.querySelector('.confirmYes');
var no = document.querySelector('.confirmNo');

function confirmStyle(value) {
  confirm.style.display = value;
}

todoItems.forEach(function(todo) {
  var html = template(todo);
  ul.innerHTML += html;
});

var spans = document.querySelectorAll('li span');

Array.prototype.slice.call(spans).forEach(function (span) {
  span.addEventListener('click', function (e) {
    confirmStyle('block');

    yes.addEventListener('click', function() {
      e.target.parentNode.remove();
      confirmStyle('none');
    });

    no.addEventListener('click', function() {
      confirmStyle('none');
    });
  });
});


