class Solution(object):
    def searchInsert(self, array, target):
        left, right = 0, len(array) - 1

        while left <= right:
            mid = left + (right - left) // 2

            if array[mid] == target:
                return mid
            elif array[mid] < target:
                left = mid + 1
            else:
                right = mid - 1

        return left

solution = Solution()

test_array = [1, 2, 3, 4, 5, 7, 8, 9]

test1 = solution.searchInsert(test_array, 6)

print(test1)
