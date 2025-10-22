const assert = require('assert').strict;

//SOLO PARES
function pairs(num){
    if(num %2 === 0) {
        return true
    } else{
        return false
    }
}

//Mayores a 15
function gt15(num) {
    if(num > 15) {
        return true
    } else{
        return false
    }
}

//Menores a 10
function lt10(num) {
    if(num < 10) {
        return true
    } else{
        return false
    }
}

function selectPairs(array, condition) {
    let array2 = [];
    array.forEach(value => {
        if(condition(value)){
            array2.push(value)
            return true
        }else {
            return false
        }
    });
    return array2
}


function selectGt15(array, condition) {
    //MAYORES QUE 15
    let array21 = []
    array.forEach(value => {
        if(condition(value)) {
            array21.push(value)
            return true
        } else{
            return false
        }
    })
    return array21
}


function selectLt10(array, condition) {
    //MENORES A 10
    let array2 = []
    array.forEach(value => {
        if(condition(value)) {
            array2.push(value)
            return true
        } else{
            return false
        }
    })
    return array2
}


let values = [1, 2, 3, 4, 5, 7, 13, 17, 23, 29, 88, 6]

// Solo pares
// assert.deepStrictEqual(select(values, pairs), [2, 4])
// select(values, pairs)
// console.log('Inicio del programa')
// console.log('Array ', values)
console.log('Pares', selectPairs(values, pairs))

// mayores que 15
// assert.deepStrictEqual(select(values, gt15), [17, 23, 29])
console.log('Números mayores a 15 -> ', selectGt15(values, gt15))

// menores de 10
// assert.deepStrictEqual(select(values, lt10), [1, 2, 3, 5, 7])
console.log('Números menores a 10 -> ', selectLt10(values, lt10))
