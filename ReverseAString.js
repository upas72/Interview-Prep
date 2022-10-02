// Reverse a String

/**
 * @param {string} str
 * @return {string}
 */
const reverseString = str => {
    if(!str || typeof str !== "string") {
        return "";
    }

    const revCharArr = [];

    for(let i=str.length-1; i>=0; i--)  {
        revCharArr.push(str[i]);
    }

    return revCharArr.join("");
}

console.log(reverseString("I Am a Student"));
console.log(reverseString("Program"));
console.log(reverseString("A"));
console.log(reverseString());
console.log(reverseString(2));