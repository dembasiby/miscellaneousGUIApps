var cars = [
  { make: 'Honda', image: 'img/honda-accord-2005.jpg', model: 'Accord', year: 2005, price: 7000},
  { make: 'Honda', image: 'img/honda-accord-2008.jpg', model: 'Accord', year: 2008, price: 11000 },
  { make: 'Toyota', image: 'img/toyota-camry-2009.jpg', model: 'Camry', year: 2009, price: 12500 },
  { make: 'Toyota', image: 'img/toyota-corrolla-2016.jpg', model: 'Corrolla', year: 2016, price: 15000 },
  { make: 'Suzuki', image: 'img/suzuki-swift-2014.jpg', model: 'Swift', year: 2014, price: 9000 },
  { make: 'Audi', image: 'img/audi-a4-2013.jpg', model: 'A4', year: 2013, price: 25000 },
  { make: 'Audi', image: 'img/audi-a4-2013.jpg', model: 'A4', year: 2013, price: 26000 },
];

var carApp = {
  cars: cars,
  exists: function (arrOfObj, val) {
    var exists = false;
  
    if (arrOfObj.length === 0) {
      return false;
    }
  
    arrOfObj.forEach(obj => {
      for (var k in obj) {
        if (obj[k] === val) {
          exists = true;
          return;
        }
      };
    });
  
    return exists;
  },
  filterValues: function (element) {
    var arr = [];
    this.cars.forEach(function (car) { 
      if (!this.exists(arr, car[element])) {
        arr.push({ [element]: car[element] });
      }
    }.bind(this));
  
    return arr;
  },
  filters: function() {
    return {
      makes: this.filterValues('make'),
      models: this.filterValues('model'),
      prices: this.filterValues('price'),
      years: this.filterValues('year'),
    }
  },
  processTemplate: function(id) {
    return Handlebars.compile( $(id).html() );
  },
  renderCars: function() {
    var carsTemplate = this.processTemplate('#car-template');
    $('#car-list').html(carsTemplate({cars: this.cars}));
  },
  renderForm: function() {
    var formTemplate = this.processTemplate('#filter-search');
    $('#selection').html(formTemplate(this.filters()));
  },
  init: function() {
    this.renderCars();
    this.renderForm();
  }
}

carApp.init();






                                                          