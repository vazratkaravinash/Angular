/**
 * Find second largest number from array
 * @param a_number 
 */
function secondMaximunFromArray(a_number: number[]): number {
    let max = a_number[0];
    let secondMax: number = null;
    if (max < a_number[1]) {
        max = a_number[1];
        secondMax = a_number[0];
    }
    else {
        secondMax = a_number[1];
    }

    for (let i = 2; i < a_number.length; i++) {
        if (max < a_number[i]) {
            secondMax = max;
            max = a_number[i];
        }
        else {
            if(secondMax<a_number[i]){
                secondMax=a_number[i];
            }
        }
    }
    return secondMax;
}

var a_num: number[] = [23, 89, 6, 29, 56, 45, 77, 32];

console.log("Second maximun number from array is ", secondMaximunFromArray(a_num));
