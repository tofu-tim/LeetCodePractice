class Solution(object):
    def longestCommonPrefix(self, strs):
        if not strs:
            return ""

        prefix = strs[0]
        matching_found = True

        for word in strs[1:]:
            i = 0
            while i < len(prefix) and i < len(word) and prefix[i] == word[i]:
                i += 1
            prefix = prefix[:i]

            if not prefix:
                matching_found = False
                break

        if matching_found:
            return prefix
        else:
            return "No matching prefix"

solution = Solution()

strs1 = ["flower", "flow", "flight"]
print(solution.longestCommonPrefix(strs1))

strs2 = ["dog", "racecar", "car"]
print(solution.longestCommonPrefix(strs2))
