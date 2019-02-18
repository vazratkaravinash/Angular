function add(a_number) {
    var sum = 0;
    for (var i = 0; i < a_number.length; i++) {
        sum += a_number[i];
    }
    return sum;
}
var a_num = [23, 6, 7, 4, 5, 7];
console.log("Sum of all array element is ", add(a_num));
