'use strict';
(function () {
  var carouselArr = [
    {image: 'car.jpg', alt: 'Car'}, 
    {image: 'apple.jpg', alt: 'Apple'}
  ];
  var carouselIndex = 0;
  var newSlider = [
    {image: 'peach.jpg', alt: 'peach'}, 
    {image: 'pineapple.jpg', alt: 'pineapple'},
    {image: 'tomato.jpg', alt: 'tomato'}
  ];
  console.log(removeItem(0));
  getSliderInfo(carouselIndex);

  console.log(nextSlide());
  console.log(nextSlide());
  console.log(nextSlide());
  console.log(nextSlide());
  console.log(nextSlide());
  console.log(nextSlide());

  console.log(prevSlide());
  console.log(prevSlide());
  console.log(prevSlide());
  console.log(prevSlide());
  console.log(prevSlide());

  console.log(switchSlide(2));
  console.log(addItems(newSlider, 0));
  console.log(removeItem(1));
  console.log(getSliderInfo(0));
  console.log(getSliderInfo(1));
  console.log(getSliderInfo(2));
  console.log(getSliderInfo(3));

  function getSliderInfo(a) {
    if (a < carouselArr.length) {
      console.log(carouselArr[a]);
    } else {
      console.log('Error');
    }
  }

  function nextSlide() {
    if (carouselIndex === (carouselArr.length - 1)) {
      carouselIndex = 0;
      return carouselArr[carouselIndex];
    }
    ++carouselIndex;
    return carouselArr[carouselIndex];
  }

  function prevSlide() {
    if(carouselIndex > 0) {
      --carouselIndex;
      return carouselArr[carouselIndex];
    }
    carouselIndex = carouselArr.length - 1;
    return carouselArr[carouselIndex];
  }

  function switchSlide(n) {
    if(n < carouselArr.length) {
      carouselIndex = n;
      return carouselArr[carouselIndex];
    }
    carouselIndex = carouselArr.length - 1;
    return carouselArr[carouselIndex];
  }

  function addItems(obj, index) {
    var arrIndex = index;
    if (Array.isArray(obj)) {
      for (var i = 0; i < obj.length; i++) {
        addItems(obj[i], arrIndex);
        ++arrIndex;
      }
    } else {
      if (index <= carouselIndex) {
        carouselArr.splice(arrIndex, 0, obj);
        carouselIndex++;
      } else if (index < array.length) {
        carouselArr.splice(arrIndex, 0, obj);
      } else {
        carouselArr.push(obj);
      }
    }
    return carouselArr;
  }

  function removeItem(index) {
    if (index <= carouselIndex) {
      carouselArr.splice(index, 1);
      carouselIndex--;
    } else if (index < carouselArr.length) {
      carouselArr.splice(index, 1);
    } else {
      console.log('Error');
    }
    return carouselArr;
  }
})();
