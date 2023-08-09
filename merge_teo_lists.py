class Solution(object):
    def mergeTwoLists(self, list1, list2):
        megalist = list1 + list2
        megalist_sorted = sorted(megalist)
        return megalist_sorted
