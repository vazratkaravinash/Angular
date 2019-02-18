/**
 * 
 * @param {number} a_number 
 */
function maximunFromArray(a_number) {
    var max = a_number[0];
    for (var i = 1; i < a_number.length; i++) {
        if (max < a_number[i]) {
            max = a_number[i];
        }
    }
    return max;
}
var a_num = [23, 89, 6, 29, 56, 45, 77, 32];
console.log("Maximun number from array is ", maximunFromArray(a_num));
