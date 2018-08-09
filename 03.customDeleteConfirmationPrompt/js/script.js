var todoItems = [{id: 1, title: 'Homework'},
              {id: 2, title: 'Shopping'},
              {id: 3, title: 'Calling Mom'},
              {id: 4, title: 'Coffee with John'}];

var todos = document.getElementById('todos').innerHTML;
var template = Handlebars.compile(todos);
var ul = document.getElementById('displayTodos');

todoItems.forEach(function(todo) {
  var html = template(todo);
  ul.innerHTML += html;
});

var spans = document.querySelectorAll('li span');

Array.prototype.slice.call(spans).forEach(function (span) {
  span.addEventListener('click', function (e) {
    if (confirm('Are you sure you want to delete this todo?')) {
      e.target.parentNode.remove();
    }
  });
});


