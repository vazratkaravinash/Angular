/**
 *
 * @param a_number
 */
function secondMaximunFromArray(a_number) {
    var max = a_number[0];
    var secondMax = null;
    if (max < a_number[1]) {
        max = a_number[1];
        secondMax = a_number[0];
    }
    else {
        secondMax = a_number[1];
    }
    for (var i = 2; i < a_number.length; i++) {
        if (max < a_number[i]) {
            secondMax = max;
            max = a_number[i];
        }
        else {
            if (secondMax < a_number[i]) {
                secondMax = a_number[i];
            }
        }
    }
    return secondMax;
}
var a_num = [23, 89, 6, 29, 56, 45, 77, 32];
console.log("Second maximun number from array is ", secondMaximunFromArray(a_num));
