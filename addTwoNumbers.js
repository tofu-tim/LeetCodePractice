function addTwoNumbers(list1, list2) {
    let newList = [];
    let newInt = 0;

    // Create copies of the input lists to avoid modifying the original lists
    let list1Reversed = list1.slice().reverse();
    let list2Reversed = list2.slice().reverse();

    console.log("list1Reversed = " + list1Reversed);
    console.log("list2Reversed = " + list2Reversed);

    let list1Integer = 0;
    for (let i = 0; i < list1Reversed.length; i++) {
        list1Integer += list1Reversed[i] * (10 ** i);
    }

    console.log("list1Interger = " + list1Integer);

    let list2Integer = 0;
    for (let i = 0; i < list2Reversed.length; i++) {
        list2Integer += list2Reversed[i] * (10 ** i);
    }

    console.log("list2Interger = " + list2Integer);

    newInt = list1Integer + list2Integer;

    return newInt;
}

let test1 = addTwoNumbers([1, 2, 3, 4, 5], [1, 2, 3, 4, 5]);
console.log(test1);