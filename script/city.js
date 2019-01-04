'use strict';
function City(cityName, population, country) {
  this.cityName = cityName;
  this.population = population;
  this.country = country;
  this.getCityName = function() {
    return this.cityName;
  };
  this.getPopulation = function() {
    return this.population;
  };
  this.addCitizen = function() {
    this.population += 1;
  };
  this.getCityInfo = function() {
    console.log('Город: ' + this.cityName 
    + ';\r\nНаселение: ' + this.population 
    + ' человек;\r\nСтрана: ' + this.country);
  };
}

var kyev = new City('Киев', 5000000, 'Украина');
kyev.addCitizen();
kyev.getCityInfo();
kyev.addCitizen();
kyev.getCityInfo();
kyev.addCitizen();
kyev.getCityInfo();
kyev.addCitizen();
kyev.getCityInfo();



