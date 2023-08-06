class Solution(object):
    def generateParenthesis(self, n):
        def backtrack(res, s, open_count, close_count):
            if len(s) == 2 * n:
                res.append(s)
                return

            if open_count < n:
                backtrack(res, s + '(', open_count + 1, close_count)

            if close_count < open_count:
                backtrack(res, s + ')', open_count, close_count + 1)

        result = []
        backtrack(result, '', 0, 0)
        return result
