function convert(){
    const arr = [];
    for (let i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] === 'string') {
            arr.push(parseInt(arguments[i]));
        } else {
            arr.push(arguments[i] + '');
        }
    }
    return arr;
}
//convert('1', '2', '3', '4');

function executeforEach(el) {
    const two = 2;
    for (let i = 0; i < el.length; i++) {
        console.log(el[i] * two);
    }
}
//executeforEach([1, 2, 3]);

function executeforEachAdd(el) {
    const three = 3;
    for (let i = 0; i < el.length; i++) {
        if (!isNaN(el[i])) {
            el[i] = parseInt(el[i]);
        }
        console.log(el[i] + three);
    }
}
function mapArray(array, callback){
    const newArray = [];
    executeforEachAdd(array, function(el){
        newArray.push(callback(el));
    });
}
//mapArray([2, '5', 8]);

function executeforEachEven(el) {
    const two = 2;
    for (let i = 0; i < el.length; i++) {
        if (el[i] % two === 0) {
            console.log(el[i]);
        }
    }
}
function filterArray(array, callback){
    const newArray = [];
    executeforEachEven(array, function(el){
        newArray.push(callback(el));
    });
}
//filterArray([2, 5, 8]);

function flipOver(stringValue) {
    let newString = '';
    for (let i = stringValue.length - 1; i >= 0; i--) {
        newString += stringValue[i];
    }
    console.log(newString);
} 
//flipOver('hey world');

function makeListFromRange(array) {
    const arr = [];
    const different = array[1] - array[0];
    for (let i = 0; i <= different; i++) {
        arr.push(array[1] - different + i);
    }
    console.log(arr);
}
//makeListFromRange([2, 7]);

const actors = [
    { name: 'tommy', age: 36 },
    { name: 'lee', age: 28 }
  ];
function getArrayOfKeys(obj, key) {
    const arrValue = [];
    for (let prop of obj) {
        arrValue.push(prop[key]);
    }
    console.log(arrValue);
}
//getArrayOfKeys(actors, 'name'); // ['tommy', 'lee']

function substitute(array) {
    let asteriks = '*';
    const therty = 30;
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] < therty) {
            newArray[i] = asteriks;
        } else {
            newArray[i] = array[i];
        }
    }
    console.log(newArray);
}
//substitute([58, 14, 48, 2, 31, 29]); // [58, '*', 48, '*', 31, '*']