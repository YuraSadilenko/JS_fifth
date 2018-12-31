// function getDoubled(number) {
//   if (number) {
//     number = number * 2;
//   }
//   return number;
// }

// function getDoubledTrippled(number) {
//   if (number) {
//     number = number * 3;
//   }
//   return number;
// }



// console.log(getDoubled(15));
// console.log(getDoubledTrippled(this.number));

var num = {
  number: 2,
  getDoubled: function() {
    return this.number * 2;
  }
}

num.getDoubled();