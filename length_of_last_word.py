class Solution(object):
    def lengthOfLastWord(self, s):
        words = s.split()
        if words:
            return len(words[-1])
        else:
            return 0
