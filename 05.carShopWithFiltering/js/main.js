var cars = [
    { make: 'Honda', image: 'img/honda-accord-2005.jpg', model: 'Accord', year: 2005, price: 7000},
    { make: 'Honda', image: 'img/honda-accord-2008.jpg', model: 'Accord', year: 2008, price: 11000 },
    { make: 'Toyota', image: 'img/toyota-camry-2009.jpg', model: 'Camry', year: 2009, price: 12500 },
    { make: 'Toyota', image: 'img/toyota-corrolla-2016.jpg', model: 'Corrolla', year: 2016, price: 15000 },
    { make: 'Suzuki', image: 'img/suzuki-swift-2014.jpg', model: 'Swift', year: 2014, price: 9000 },
    { make: 'Audi', image: 'img/audi-a4-2013.jpg', model: 'A4', year: 2013, price: 25000 },
    { make: 'Audi', image: 'img/audi-a4-2013.jpg', model: 'A4', year: 2013, price: 26000 },
  ];

  var carTemplate = document.querySelector('#car-template').innerHTML;
  var filterTemplate = document.querySelector('#filter-search').innerHTML;

  var cartemplate = Handlebars.compile(carTemplate);
  var filterCar = Handlebars.compile(filterTemplate);

  var carHtml = cartemplate({cars: cars});
  var filterHtml = filterCar(cars);

  document.querySelector('#car-list').innerHTML = carHtml;
  document.querySelector('#selection').innerHTML = filterHtml;
