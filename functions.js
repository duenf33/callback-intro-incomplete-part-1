const identity = function (value) {
  return value = value;
};
const first = function (array, n) {
  return  n == undefined ? array[0] : array.slice(0, n);
  // if (n == undefined) {
  //   return array[n = 0]
  // } else {
  //   return array.slice(0, n)
  // }
};

const last = function (array, n) {
  if ( n === undefined) {
    return array.pop();
  }  else if (array.length < n) {
    return array;
  } else if (n > 0) {
    return array.slice(n - (n - 1));
  } else if (n === 0) {
    return [];
  }
};
const each = function (collection, iterator) {
  let result = [];
  for(let i = 0; i < collection.length; i++){
    result.push(iterator(collection[i]));
  }
  // console.log('29')
  // console.log(result)
  return result;
};
const indexOf = function (array, target) {
  let number40 = array.findIndex(num => {
    if (num === target) {
      return true;
    } 
  });
  return number40;
};
const map = function (collection, iterator) {
  let result = [];
  for (let i = 0; i < collection.length; i++){
    result.push(iterator(collection[i]))
  }
  return result;
};

module.exports = {
  identity,
  first,
  last,
  each,
  indexOf,
  map,
};
