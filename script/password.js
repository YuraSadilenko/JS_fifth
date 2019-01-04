'use strict';
function ask(question, answer, ok, fail) {
	var result = prompt(question, '');
	if (result === answer) {
		ok();
	} else {
		fail();
	}
}
var user = {
	login: 'Andrew',
	password: '12345',

	loginOk: function() {
		console.log(this.login + ' - login success');
	},

	loginFail: function() {
		console.log(this.login + ' - login failed');
	},

	checkPassword: function() {
    /*First version, made with closure */
  //   var self = this;
  //   ask('Enter the password', 
  //   this.password, 
  //   function(){
  //     self.loginOk();
  //   },
  //   function(){
  //     self.loginFail();
  //   });

  /*Second version, made with bind*/
  ask('Enter the password', this.password, this.loginOk.bind(this), this.loginFail.bind(this));  
  }
};

user.checkPassword();

var user2 = user;
user = null;
user2.checkPassword();