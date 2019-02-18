/**
 * Function to calculate area of circle
 * @param {number} radius 
 * @param {number} pi 
 */
function areaOfCircle(radius:number, pi:number = 3.14):number {
    return pi * radius * radius;
}

var area = areaOfCircle(5);
console.log("Area of circle: "+area);
