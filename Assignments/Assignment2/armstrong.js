/**
 *
 * @param number
 */
function isArmstrong(number) {
    var dummy = number;
    console.log(dummy);
    var sum = 0;
    while (dummy > 0) {
        console.log("**************", dummy % 10);
        sum += cube((dummy % 10));
        dummy = Math.floor(dummy / 10);
    }
    console.log(sum);
    if (sum == number) {
        return true;
    }
    else {
        return false;
    }
}
/**
 *
 * @param no
 */
function cube(no) {
    return no * no * no;
}
if (isArmstrong(153)) {
    console.log("Number is a Armstrong number");
}
else {
    console.log("Number is not a Armstrong number");
}
