class Solution(object):
    def plusOne(self, digits):
        n = len(digits)
        carry = 1

        for i in range(n - 1, -1, -1):
            digits[i] = digits[i] + carry

            if digits[i] >= 10:
                digits[i] = digits[i] % 10
                carry = 1
            else:
                carry = 0

        if carry:
            digits.insert(0, carry)

        return digits
