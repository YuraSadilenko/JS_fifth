'use strict';
var object = {
  name: 'Vasya Pryanychkyn',
  getName: function() {
    console.log(this.name);
  }
};

object.getName();
