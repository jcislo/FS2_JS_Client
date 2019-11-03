let firstList = [["apple", "Orange", "PineApple"], [1, 2, 3]];

try {
    var firstWord = firstList[1][0] + "  " + firstList[0][0];
    var secondWord = firstList[1][1] + "  " + firstList[0][1];
    var thirdWord = firstList[1][2] + "  " + firstList[0][2];
    document.getElementById("hello").innerHTML = firstWord;
    document.getElementById("second").innerHTML = secondWord;
    document.getElementById("third").innerHTML = thirdWord;
    console.log("OK")
}
 catch(err) {
    console.log("Error " + err);
 }

