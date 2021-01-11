// SantaClausable Interface http://www.codewars.com/kata/santaclausable-interface

function isSantaClausable(obj) {
  return typeof obj.sayHoHoHo === 'function'
      && typeof obj.distributeGifts === 'function'
      && typeof obj.goDownTheChimney === 'function';
}

return [ 'sayHoHoHo',
        'distributeGifts',
        'goDownTheChimney']
        .every( method => typeof obj[method] === 'function');

// Cylon Evolution http://www.codewars.com/kata/cylon-evolution

class Cylon {
  constructor(model) {
    this.model = model;
  }
  attack() {
    return "Destroy all humans!";
  }
}
class HumanSkin extends Cylon {
  constructor(model) {
    super(model);
  }
  infiltrate() {
    return "Infiltrate the colonies";
  }
}

//Simple Web Framework #1: Create a basic router https://www.codewars.com/kata/588a00ad70720f2cd9000005/train/javascript

class Router {
  constructor() {
    this.routes = new Map();
  }
  bind(url, method, action) {
    this.routes.set(url + method, action);
  }
  runRequest(url, method) {
    if (!this.routes.has(url + method)) {
      return "Error 404: Not Found";
    }
    return this.routes.get(url + method)();
  }
}
