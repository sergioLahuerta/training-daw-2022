const assert = require('assert').strict;

const pairs = num => num %2 == 0

function selectPairs(array, condition) {
    let array2 = []
    array.forEach(element => {
        if(condition(element)){
            array2.push(element)
        }
    });
    return array2
}

const gt15 = num => num > 15 

function selectGt15(array, condition) {
    let array2 = []
    array.forEach(element => {
        if(condition(element)){
            array2.push(element)
            return true
        }
    });
    return array2
}

const lt10 = num => num < 10

function selectLt10 (array, condition) {
    let array2 = []
    array.forEach(element => {
        if(condition(element)) {
            array2.push(element)
            return true
        }
    });
    return array2
}

let values = [1, 2, 3, 4, 5, 7, 8, 13, 17, 23, 29, 33]

console.log('Números pares: ', selectPairs(values, pairs))
console.log('Números mayores a 15: ', selectGt15(values, gt15))
console.log('Números menores a 10: ', selectLt10(values, lt10))

// sólo pares
// assert.deepStrictEqual(select(values, pairs), [2])

// mayores que 15
// assert.deepStrictEqual(select(values, gt15), [17, 23, 29])

// menores de 10
// assert.deepStrictEqual(select(values, lt10), [1, 2, 3, 5, 7])