// Given a string s, return the longest palindromic substring in s.

function longestPalSubstr(str)
{
    // Stores Longest palindrome Substring
    let longestPalindrone = "";
    let n = str.length;
    let j;
     
    // To store substring which we think can be a palindrome
    let subs = "";
     
    // To store reverse of substring we think can be palindrome
    let subsrev = "";
    for(let i = 0; i < n; i++){
        j = n-1;
        while(i < j){
             
            // Checking whether the character at i and j are same.
            // If they are same then that substring can be LPS
            if((str[i] == str[j]) && (longest.length < (j-i+1))){
               subs = str.substring(i,(j+1));
               subsrev = subs;
               subsrev=subsrev.split('').reverse().join('');
               if(subs == subsrev){
                  longestPalindrone = subs;
               }
            }
            j--;
        }
    }
   // If no longest substring then we will return
   // first character
    if(longestPalindrone.length == 0){
        longestPalindrone = str[0];
    }
    console.log("Longest palindrome substring is: " + longest);
 
    // Return length of LPS
    return longestPalindrone.length;
}
 
// Driver Code
let str = "forgeeksskeegfor";
console.log("Length is: "+ longestPalSubstr(str));
