// The goal of this algorithm is to recognize roman numerals, then return the arabic equivalent
let I = 1;
let V = 5;
let X = 10;
let L = 50;
let C = 100;
let D = 500;
let M = 1000;

function getArabic(romanNumeral) {
    let romanArray = romanNumeral.split('');
    convertStringToVariable(romanArray);
    let resultArray = calculateArabic(romanArray);
    return calculateFinalResult(resultArray);
}

function convertStringToVariable(romanArray) {
    for (var i = 0; i < romanArray.length; i++) {
        if (romanArray[i] === 'I') {
            var valueI = 1;
            eval(romanArray[i] + ' = ' + valueI);
        } else if (romanArray[i] === 'V') {
            var valueV = 5;
            eval(romanArray[i] + ' = ' + valueV);
        } else if (romanArray[i] === 'X') {
            var valueX = 10;
            eval(romanArray[i] + ' = ' + valueX);
        } else if (romanArray[i] === 'L') {
            var valueL = 50;
            eval(romanArray[i] + ' = ' + valueL);
        } else if (romanArray[i] === 'C') {
            var valueC = 100;
            eval(romanArray[i] + ' = ' + valueC);
        } else if (romanArray[i] === 'D') {
            var valueD = 500;
            eval(romanArray[i] + ' = ' + valueD);
        } else {
            var valueM = 1000;
            eval(romanArray[i] + ' = ' + valueM);
        }
    }
}

function calculateArabic(romanArray) {
    let resultArray = [];
    for (var i = 0; i < romanArray.length; i++) {
        if (romanArray[i] === 'I') {
            resultArray.push(1);
        } else if (romanArray[i] === 'V') {
            resultArray.push(5);
        } else if (romanArray[i] === 'X') {
            resultArray.push(10);
        } else if (romanArray[i] === 'L') {
            resultArray.push(50);
        } else if (romanArray[i] === 'C') {
            resultArray.push(100);
        } else if (romanArray[i] === 'D') {
            resultArray.push(500);
        } else {
            resultArray.push(1000);
        }
    }
    return resultArray;
}

function calculateFinalResult(resultArray) {
    let finalResult = 0;
    for (var i = 0; i < resultArray.length; i++) {
        if (resultArray[i] < resultArray[i + 1]) {
            finalResult += (resultArray[i + 1] - resultArray[i]);
            i++;
        } else {
            finalResult += resultArray[i];
        }
    }
    return finalResult;
}

console.log(getArabic('MXCII'));