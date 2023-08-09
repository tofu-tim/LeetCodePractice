class Solution(object):
    def letterCombinations(self, digits):
        digit_map = [
            { 'value': 1, 'symbol': '' },
            { 'value': 2, 'symbol': ['a', 'b', 'c'] },
            { 'value': 3, 'symbol': ['d', 'e', 'f'] },
            { 'value': 4, 'symbol': ['g', 'h', 'i'] },
            { 'value': 5, 'symbol': ['j', 'k', 'l'] },
            { 'value': 6, 'symbol': ['m', 'n', 'o'] },
            { 'value': 7, 'symbol': ['p', 'q', 'r', 's'] },
            { 'value': 8, 'symbol': ['t', 'u', 'v'] },
            { 'value': 9, 'symbol': ['w', 'x', 'y', 'z'] }
        ]
        
        def backtrack(index, path):
            if index == len(digits):
                combinations.append(path)
                return
            for letter in digit_map[int(digits[index])]['symbol']:
                backtrack(index + 1, path + letter)
        
        combinations = []
        
        if digits:
            backtrack(0, '')
        
        return combinations

# Example usage
solution = Solution()
print(solution.letterCombinations("23"))  # Output: ['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf']
