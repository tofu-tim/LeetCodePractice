class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:
    def addTwoNumbers(self, list1, list2):
        carry = 0
        dummy = ListNode()
        current = dummy

        while list1 or list2:
            val1 = list1.val if list1 else 0
            val2 = list2.val if list2 else 0

            total = val1 + val2 + carry
            carry = total // 10
            current.next = ListNode(total % 10)

            if list1:
                list1 = list1.next
            if list2:
                list2 = list2.next

            current = current.next

        if carry:
            current.next = ListNode(carry)

        return dummy.next
