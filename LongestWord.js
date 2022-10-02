/**
 * Input: str = "fun&!! time"
 * Output: time
 * 
 * Input: "I love dogs"
 * Output: love
 */

/**
 * @param {string} str
 * @return {string}
 */
 const longestWord = function(str) {
    if(!str || typeof str !== "string") {
        return str;
    }

    let maxLength = 0;
    let maxString = "";
    let match = str.match(/[a-zA-Z]*/g);
    for(let i=0; i<match.length; i++) {
        if(match[i] && match[i].length > maxLength) {
            maxString = match[i];
            maxLength = match[i].length;
        }
    }    

    return maxString;
};

console.log(longestWord("fun&!! time"));
console.log(longestWord("I love dogs"));
console.log(longestWord(null));
