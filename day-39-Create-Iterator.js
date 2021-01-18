//  Create iterator	https://www.codewars.com/kata/5c743cec901022438549964a

const createIterator = (array) => {
  const iterator = {
    index: 0,
    next() {
      if (iterator.index < array.length) {
        return {
          value: array[iterator.index++],
          done: false,
        };
      } else {
        return {
          value: undefined,
          done: true,
        };
      }
    },
  };
  return iterator;
};
