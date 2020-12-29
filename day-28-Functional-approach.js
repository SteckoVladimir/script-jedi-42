// Function within a function http://www.codewars.com/kata/a-function-within-a-function

const always = n => () => n;

// Singleton pattern https://www.codewars.com/kata/singleton-pattern/train/javascript

class Singleton {
  constructor() {
    if (Singleton._instance) return Singleton._instance;
    Singleton._instance = this;
  }
}



