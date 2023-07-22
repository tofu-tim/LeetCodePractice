function mergeTwoLists(list1, list2) {
    megaList = [];
    for (var x = 0; x < list1.length; x++) {
        megaList.pop(list1[x]);
    }
    for (var x = 0; x < list2.length; x++) {
        megaList.pop(list2[x]);
    }

    function bubbleSort(megaList) {
        let swapped;
        do {
            swapped = false;
            for (let i = 0; i < megaList.length - 1; i++) {
                if (megaList[i] > megaList[i + 1]) {
                    let temp = megaList[i];
                    megaList[i] = megaList[i + 1];
                    megaList[i + 1] = temp;
                    swapped = true;
                }
            }
        } while (swapped);

        return megaList;
    }
}

test1 = mergeTwoLists([1, 23, 4, 5, 6, 7, 8, 9], [9, 8, 7, 6, 5, 4, 3, 2, 1]);

console.log(test1)