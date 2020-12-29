// Function within a function http://www.codewars.com/kata/a-function-within-a-function

const always = n => () => n;

// Singleton pattern https://www.codewars.com/kata/singleton-pattern/train/javascript

let instance;
class Singleton {
  constructor() {
    if (!instance) instance = this;
    return instance;
  }
}


