def addTwoNumbers(list1, list2):
    newList = []
    newInt = 0

    list1Reversed = list1[::-1]
    list2Reversed = list2[::-1]

    # print("list1Reversed = " + (list1Reversed))
    # print("list2Reversed = " + (list2Reversed))

    list1Integer = 0
    for i in range(len(list1Reversed)):
        list1Integer += list1Reversed[i] * (10 ** i)


    # print("list1Interger = " + list1Integer)

    list2Integer = 0
    for i in range(len(list2Reversed)):
        list2Integer += list2Reversed[i] * (10 ** i)


    # print("list2Interger = " + list2Integer)

    newInt = list1Integer + list2Integer

    # print("New interger = " + newInt)

    newIntAsArray = list(str(newInt))
    newArray = newIntAsArray[::-1]
    return newArray



test1 = addTwoNumbers([2, 4, 3], [5, 6, 4])
print(test1)