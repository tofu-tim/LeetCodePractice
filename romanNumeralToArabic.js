// The goal of this algorithm is to regognise roman numerals, then return the arabic equivalent.4
let I = 1;
let V = 5;
let X = 10;
let L = 50;
let C = 100;
let D = 500;
let M = 1000;


function getArabic(romanNumeral) {
    let romanArray = romanNumeral.split('');
    return romanArray;

    function convertStringToVariable(romanArray) {
        for (var i = 0; i < romanArray.length; i++) {
            function string2Var(romanArray[i]) {
                if (romanArray[i] = 'I') {
                    var valueI = 1;
                    eval(romanArray[i] + ' = ' + valueI)
                } else if (romanArray[i] = 'V') {
                    var valueV = 5;
                    eval(romanArray[i] + ' = ' + valueV)
                } else if (romanArray[i] = 'X') {
                    var valueX = 10;
                    eval(romanArray[i] + ' = ' + valueX)
                } else if (romanArray[i] = 'L') {
                    var valueL = 50;
                    eval(romanArray[i] + ' = ' + valueD)
                } else if (romanArray[i] = 'C') {
                    var valueC = 100;
                    eval(romanArray[i] + ' = ' + valueC)
                } else if (romanArray[i] = 'D') {
                    var valueD = 500;
                    eval(romanArray[i] + ' = ' + valueD)
                } else {
                    var valueM = 1000;
                    eval(romanArray[i] + ' = ' + valueM)
                }
            }
        }
    }
}