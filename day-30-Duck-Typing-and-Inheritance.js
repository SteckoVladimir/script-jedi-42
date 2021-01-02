// SantaClausable Interface http://www.codewars.com/kata/santaclausable-interface

const isSantaClausable = obj =>'function' === typeof (obj.sayHoHoHo && obj.distributeGifts && obj.goDownTheChimney);

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
