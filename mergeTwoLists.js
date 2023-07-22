function mergeTwoLists(list1, list2) {
    // Merge the two lists
    const megaList = [...list1, ...list2];

    // Define the bubbleSort function
    function bubbleSort(arr) {
        let swapped;
        do {
            swapped = false;
            for (let i = 0; i < arr.length - 1; i++) {
                if (arr[i] > arr[i + 1]) {
                    let temp = arr[i];
                    arr[i] = arr[i + 1];
                    arr[i + 1] = temp;
                    swapped = true;
                }
            }
        } while (swapped);

        return arr;
    }

    // Sort the merged list using bubbleSort
    const sortedList = bubbleSort(megaList);

    return sortedList;
}

test1 = mergeTwoLists([1, 2, 3, 4, 5, 6, 7, 8, 9], [9, 8, 7, 6, 5, 4, 3, 2, 1]);
console.log(test1);