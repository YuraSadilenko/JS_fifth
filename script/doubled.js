'use strict'
/*First version*/
console.log(getDoubled(15));
console.log(getDoubledTrippled(10));

function getDoubled(number) {
  if (number) {
    number = number * 2;
  }
  return number;
} 

function getDoubledTrippled(number) {
  if (number) {
    number = number * 2 * 3;
  }
  return number;
}

/*Second version*/
var number = {
  num: 2,
  getDouble: function() {
    return this.num * 2;
  },
  getDoubleTripple: function() {
    return this.num * 2 * 3;
  }
}

console.log(number.getDouble());
console.log(number.getDoubleTripple());

/*Using call*/
function doubleTripleNumber() {
  console.log(this.number * 2 * this.multi3);
}

var result = {
  number: 20,
  multi3: 3
};

doubleTripleNumber.call(result);