function Car(mark, color, year, mileage, amountOfFuel, isEngineStart, isStartMove, isStopMove) {
  this.mark = mark;
  this.color = color;
  this.year = year;
  this.mileage = mileage;
  this.amountOfFuel = amountOfFuel;
  this.isEngineStart = isEngineStart;
  this.isStartMove = isStartMove;
  this.isStopMove = isStopMove;
  this.startEngine = function() {
    this.isEngineStart = true;
  };
  this.startMove = function() {
    if (this.isEngineStart) {
      this.isStartMove = true;
      console.log('Машина марки ' + car.mark + ',' + car.color + ' цвета поехала!');
    } else {
      console.log('Включите вначале зажигание');
    }
    if (this.amountOfFuel < 10) {
      console.log('Вам нужно заправить свой автомобиль!');
    }
  };
  this.stopMoving = function() {
    if (this.isEngineStart) {
      this.isStopMove = true;
      console.log('Машинка остановилась');
    } else {
      console.log('Зажигание и так выключено');
    }
  };
  this.refuelling = function() {
    if (this.amountOfFuel < 10) {
      this.amountOfFuel = this.amountOfFuel + 50;
      console.log(this.amountOfFuel);
    } else {
      console.log('Вам не нужна заправка');
    }
  };
  this.displayInfo = function() {
    console.log('Машина марки: ' + this.mark + '\r\nцвет: ' 
    + this.color + '\r\nавтомобиль: ' + this.year + ' года выпуска\r\nпробег: '
    + this.mileage + ' км\r\nсейчас бензина в баке: ' + this.amountOfFuel + ' литр(ов);');
  }
};

var mustang = new Car('mustang', 'красный', '2018', 30000, 50);
mustang.displayInfo();
var mersedes = new Car('mersedes', 'черный', '2015', 130000, 20);
mersedes.displayInfo();
var uaz = new Car('копейка', 'ржавый', '-2018', Infinity, 'едет на святом духе и самогоне 1');
uaz.displayInfo();