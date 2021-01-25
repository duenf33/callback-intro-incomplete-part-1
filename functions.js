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
  const each = function (collection, iterator) { // the function each is running the collection of the array or object and creating the iterator function.
    if (collection instanceof Array) { // its looking into the collection to see if it is an array.
      for (let i = 0; i < collection.length; i++) {
        iterator(collection[i], i, collection); // this iterator could be named differently if desired. It will output; collection[i] = animal, i = index, collection = list or array.
        // console.log(collection[i], i, collection)
      }
    } else if (collection instanceof Object) { // its looking into the collection to see if it is an object.
      for (let prop in collection) {
        iterator(collection[prop], prop, collection); // Here it will output; collection[prop] = animal, prop = key, collection = object.
        // console.log(collection[prop], prop, collection)
      }
    }
  };
  const indexOf = function (array, target) { // this function holds the array and the specific target argument which is the element we will look into the array.
    console.log('line 36')  

    each(array, (element, index) => { // this is the each function using the iterator function to find the index of such target.
      if(element === target){ // in this if statement is comparing the element passed thru to the target.
        console.log('right')
        console.log(element)
        console.log(index)
        console.log(typeof(index))
        return index; // returning the index of such element match to target.
      }; 
    });
    

// with function add4:
    // const eachAdd4 = each(array, add4)
    // console.log('add4: ',add4)
    // console.log('array: ',array)
    // console.log('target: ',target)

    // function add4(element, index){
    //   if(element === target){
    //     console.log('index: ',index)
    //     return true;
    //   }
    // }
    // console.log(eachAdd4)
    // return eachAdd4;

// original result that works:
  // let number40 = array.findIndex(num => {
  //   if (num === target) {
  //     console.log('array: ',array)
  //     console.log('num: ',num)
  //     console.log('target: ',target)
  //     return true;
  //   }; 
  // });
  // console.log('return number 40: ',number40)
  // return number40;
};
const map = function (collection, iterator) {
  let result = [];
  for (let i = 0; i < collection.length; i++){
    result.push(iterator(collection[i]))
  }
  console.log('return result: ',result)
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
