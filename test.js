var myArray = new Array();
myArray[2] = "true"
myArray.push("penguin")
myArray.unshift("polarbear")
for (var i in myArray){
    document.writeln("Index: " + i + ": " + myArray[i] + "<br>")
}
document.writeln(String("1"/0))
