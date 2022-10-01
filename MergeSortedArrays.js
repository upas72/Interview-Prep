// [0, 3, 4, 31] [4, 6, 30] - [0, 3, 4, 4, 6, 30, 31]

const mergeArrayAndSort = (array1, array2) => {
    if(!array1 && !array2) {
        return [];
    } else if(!array1) {
        return array2;
    } else if(!array2) {
        return array1;
    }

    const mergedArray = [];
    let index1 = 0;
    let index2 = 0;

    while(array1[index1] || array2[index2]) {
        if(typeof array1[index1] !== "number" || typeof array2[index2] !== "number") {
            return [];
        }

        if(array1[index1] < array2[index2]) {
            mergedArray.push(array1[index1]);
            index1++;
        } else {
            mergedArray.push(array2[index2]);
            index2++;
        }

        if(index1 === array1.length || index2 === array2.length) {
            break;
        }
    }

    while(index1 < array1.length) {
        mergedArray.push(array1[index1]);
        index1++;
    }

    while(index2 < array2.length) {
        mergedArray.push(array2[index2]);
        index2++;
    }

    return mergedArray;
}

console.log(mergeArrayAndSort([0, 3, 4, 31], [4, 6, 30]));
console.log(mergeArrayAndSort([1, 13, 24, 31, 50, 55], [24, 36]));
console.log(mergeArrayAndSort(["a", 3, 4, 31], [4, 6, 30]));
console.log(mergeArrayAndSort(2, [4, 6, 30]));
console.log(mergeArrayAndSort([0, 3, 4, 31]));
console.log(mergeArrayAndSort("abc", [0, 3, 4, 31]));
console.log(mergeArrayAndSort(true, [0, 3, 4, 31]));