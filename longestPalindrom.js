var longestPalindrome = function (s) {
    const sPrime = s;
    const splittedString = s.split('');
    const mid = [Math.floor((splittedString.length - 1) / 2)];
    let palindrom;
    let j = mid;
    let k = mid;
    while (j > 0 && k <= splittedString.length) {
        j--;
        k++;
        console.log(j);
        console.log(k);
        console.log(palindrom);
        const subStr = sPrime.substring(j, k - 1);
         console.log(subStr);
         console.log(s.substring(k-1, j));
        if (s.substring(k - 1, j) == subStr) {
            palindrom = subStr;
        }
    }
    return palindrom;
};

longestPalindrome('cbbd');