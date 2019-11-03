let firstList = ["apple", "Orange", "PineApple"];
let secondList = ["gas", "break", "turn"];
let thirdList = ["Python", "Javascript", "Solidity"];
try {
    document.getElementById("hello").innerHTML = firstList;
    document.getElementById("second").innerHTML = secondList;
    document.getElementById("third").innerHTML = thirdList;
    console.log("OK")
}
 catch(err) {
    console.log("Error " + err);
 }

