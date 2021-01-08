//   "this"" is a problem - http://www.codewars.com/kata/this-is-a-problem

function NameMe(first, last) {
  this.firstName = first;
  this.lastName = last;
  this.name = first + " " + last;
}

// ""this"" is an other problem - https://www.codewars.com/kata/this-is-an-other-problem

class NamedOne {
  constructor(first, last){
    this.firstName = first;
    this.lastName = last;
  }
   get fullName () {
     return this.fullName = this.firstName + ' ' + this.lastName;
   }
  set fullName(value) {
    const names = value.split(' ')
    if (names.length === 2) {
      this.firstName = names[0];
      this.lastName = names[1];
    }
  }
