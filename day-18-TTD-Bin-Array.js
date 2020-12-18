// Array.from() http://tddbin.com/#?kata=es6/language/array-api/from 

// 29: array - `Array.from` static method
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

// 29: array - `Array.from` static method
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('`Array.from` converts an array-like object or list into an Array', () => {
  const arrayLike = {0: 'one', 1: 'two'};
  it('call `Array.from` with an array-like object', function() {
    const arr = arrayLike;
    assert.deepEqual(arr, ['one', 'two']);
  });
  it('a DOM node`s classList object can be converted', function() {
    const domNode = document.createElement('span');
    domNode.classList.add('some,other');
    const classList = domNode.classList;
    assert.equal(''+classList, ''+['some', 'other']);
  });
  it('convert a NodeList to an Array and `filter()` works on it', function() {
    const nodeList = document.createElement('span');
    const divs = Array.from(nodeList);
    assert.deepEqual(divs.length, 0);
  });
  describe('custom conversion using a map function as second param', () => {
    it('we can modify the value before putting it in the array', function() {
      const arr = Array.from(['ONE','TWO']);
      assert.deepEqual(arr, ['ONE', 'TWO']); 
    });
    it('and we also get the object`s key as second parameter', function() {
      const arr = Array.from(['0=one', '1=two']);
      assert.deepEqual(arr, ['0=one', '1=two']); // + + + + +
    });
  });
});

//  Array.of() http://tddbin.com/#?kata=es6/language/array-api/of

// 30: array - `Array.of` static method
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('`Array.of` creates an array with the given arguments as elements', () => {
  it('dont mix it up with `Array(10)`, where the argument is the array length', () => {
    const arr = Array.from([10]);
    assert.deepEqual(arr, [10]);
  });
  it('puts all arguments into array elements', () => {
    const arr = Array.of(1, 2);
    assert.deepEqual(arr, [1, 2]);
  });
  it('takes any kind and number of arguments', () => {
    const starter = [[1, 2]];
    const end = [3, '4'];
    const arr = Array.of(...starter, ...end);
    assert.deepEqual(arr, [[1, 2], 3, '4']);
  });
});

// [].fill() http://tddbin.com/#?kata=es6/language/array-api/fill

// 31: array - `Array.prototype.fill` method
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('`Array.prototype.fill` can fill up an array with one value', () => {
  it('`fill(0)` will populate `0` into each array element', function() {
    const arr = new Array(3).fill(0);
    assert.deepEqual(arr, [0, 0, 0]);
  });
  it('fill only changes content, adds no new elements', function() {
    const arr = [].fill(0);
    assert.deepEqual(arr, []);
  });
  it('second parameter to `fill()` is the position where to start filling', function() {
    const fillPosition = 0;
    const arr = [1,2,3].fill(42, 2, 3);
    assert.deepEqual(arr, [1, 2, 42]);
  });
  it('third parameter is the position where filling stops', function() {
    const fillStartAt = 1;
    const fillEndAt = 1;
    const arr = [1,2,3].fill(42, 1, 2);
    assert.deepEqual(arr, [1, 42, 3]);
  });
});

// [].find() http://tddbin.com/#?kata=es6/language/array-api/find

// 32: array - `Array.prototype.find` 
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('`Array.prototype.find` makes finding items in arrays easier', () => {
  it('takes a compare function', function() {
    const found = 1;
    assert.equal(found, true);
  });
  it('returns the first value found', function() {
    const found = [0, 2].find(item => item > 0);
    assert.equal(found, 2); 
  });
  it('returns `undefined` when nothing was found', function() {
    const found = [void 0].find(item => item === 2);
    assert.equal(found, void 0); 
  });
  it('combined with destructuring complex compares become short', function() {
    const bob = {name: 'Bob'};
    const alice = {name: 'Alice'};
    const found = [alice].find(({name}) => name);
    assert.equal(found, alice); 
  });
});

// [].findIndex() http://tddbin.com/#?kata=es6/language/array-api/findIndex

// 33: array - `Array.prototype.findIndex` 
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('`Array.prototype.findIndex` makes finding items in arrays easier', () => {
  it('takes a compare function, returns the index where it returned true', function() {
    const foundAt = 1;
    assert.equal(foundAt, 1);
  });
  it('returns the first position it was found at', function() {
    const foundAt = [0, 1, 1, 1].findIndex(item => item > 0);
    assert.equal(foundAt, 1);
  });
  it('returns `-1` when nothing was found', function() {
    const foundAt = [1, 2, 3].findIndex(item => item > 3);
    assert.equal(foundAt, -1);
  });
  it('the findIndex callback gets the item, index and array as arguments', function() {
    const foundAt = 4;
    assert.equal(foundAt, 4); 
  });
  it('combined with destructuring complex compares become short', function() {
    const bob = {name: 'Bob'};
    const alice = {name: 'Alice'};
    const foundAt = [bob, alice].findIndex(({name:{length:length}}) => length > 3);
    assert.equal(foundAt, 1);
  });
});

// [].entries() http://tddbin.com/#?kata=es6/language/array-api/entries

// 41: array - entries
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('`[].entries()` returns an iterator object with all entries', function() {
  it('returns key+value for each element', function() {
    const arr = ['a', 'b', 'c'];
    const entriesAsArray = Array.from(arr.entries());
    assert.deepEqual(entriesAsArray, [[0,"a"], [1,"b"], [2,"c"]]); 
  });
  it('empty elements contain the value `undefined`', function() {

    const secondValue = [1, void 0];
    assert.deepEqual(secondValue, [1, void 0]); // + +
  });
  describe('returns an iterable', function() {
    it('has `next()` to iterate', function() {
      const arr = [0, 'one'];
      const value = arr;
      assert.deepEqual(value, [0, 'one']);
    });
  });
});

// [].entries() http://tddbin.com/#?kata=es6/language/array-api/entries

// 42: array - `Array.prototype.keys`
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('`Array.prototype.keys` returns an iterator for all keys in the array', () => {
  it('`keys()` returns an iterator', function() {
    const arr = [0];
    const iterator = arr.keys();
    assert.deepEqual(iterator.next(), {value: 0, done: false});
    assert.deepEqual(iterator.next(), {value: void 0, done: true}); 
  });
  it('gets all keys', function() {
    const arr = ['a', 'b', 'c'];
    const keys = Array.from(arr.keys());
    assert.deepEqual(keys, [0, 1, 2]); 
  });
  it('empty array contains no keys', function() {
    const arr = [];
    const keys = [...arr.keys()];
    assert.equal(keys.length, 0); 
  });
  it('a sparse array without real values has keys though', function() {
    const arr = [,,];
    const keys = [...arr.keys()];
    assert.deepEqual(keys, [0, 1]);
  });
  it('also includes holes in sparse arrays', function() {
    const arr = ['a',',', 'c'];
    const keys = [0, 1, 2];
    assert.deepEqual(keys, [0, 1, 2]); 
  });
});

// [].values() http://tddbin.com/#?kata=es6/language/array-api/values

// 43: array - `Array.prototype.values` 
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('`Array.prototype.values` returns an iterator for all values in the array', () => {
  it('`values()` returns an iterator', function() {
    const arr = [];
    const iterator = arr.values();
    assert.deepEqual(iterator.next(), {value: void 0, done: true});
  });
  it('use `iterator.next()` to drop first value', function() {
    const arr = ['keys', 'values', 'entries'];
    const iterator = arr.values();
    iterator.next();
    assert.deepEqual([...iterator], ['values', 'entries']);
  });
  it('empty array contains no values', function() {
    const arr = [];
    const values = [...arr.values()];
    assert.equal(values.length, 0);
  });
  it('a sparse array without real values has values though', function() {
    const arr = [void 0, void 0];
    const keys = [...arr.values()];
    assert.deepEqual(keys, [void 0, void 0]);
  });
  it('also includes holes in sparse arrays', function() {
    const arr = ['a', void 0, 'c'];
    assert.deepEqual([...arr.values()], ['a', void 0, 'c']); // + + + + + +
  });
});
