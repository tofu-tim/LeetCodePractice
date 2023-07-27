function addTwoNumbers(list1, list2) {
    let newList = []
    let newInt = 0
    list1Reversed = list1.reverse();
    list2Reversed = list2.reverse();
    for (var i = 0; i < list1Reversed.length; i++) {
        list1Integer = 0;
        list1Integer += (list1Reversed[i] * (10 ^ i));
        return list1Integer
    }

    for (var i = 0; i < list2Reversed.length; i++) {
        list2Integer = 0;
        list2Integer += (list2Reversed[i] * (10 ^ i));
        return list2Integer
    }

    newInt == (list1Integer + list2Integer)

    return newInt
}

let test1 = addTwoNumbers([1, 2, 3, 4, 5], [1, 2, 3, 4, 5])

console, log(test1);