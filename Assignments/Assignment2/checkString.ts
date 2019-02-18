/**
 * Check whether substring is present in string
 * @param inputString 
 */
function checkString(inputString:string):number{
    return inputString.indexOf("Marvelldfous");
}

if(checkString("Pune Kothrud Marvellous Infosystems") != -1){
    console.log("String contains Marvellous in it.");
}
else {
    console.log("String doesnot contains Marvellous in it.")
}