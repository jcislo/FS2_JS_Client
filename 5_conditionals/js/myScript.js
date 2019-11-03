const firstList = ["apple", "Orange", "apricot"];
const secondList = [1, 5, 15]

try {
    var letter = "a";
    var number = 5;

    let newWords = [];
    let newNums = [];

    // The below logic is VERY INEFFICIENT! I naturally turn to loops but wanted to stay unique from activity 6.
    if (firstList[0][0] === letter) {
        newWords.push(firstList[0]);
    }
    if (firstList[1][0] === letter) {
        newWords.push(firstList[1]);
    }
    if (firstList[2][0] === letter) {
        newWords.push(firstList[2]);
    }
    if (secondList[0] >= number) {
        newNums.push(secondList[0]);
    }
    if (secondList[1] >= number) {
        newNums.push(secondList[1]);
    }
    if (secondList[2] >= number) {
        newNums.push(secondList[2]);
    }

    document.getElementById("hello").innerHTML = newWords;
    document.getElementById("second").innerHTML = newNums;
    
    console.log("OK")
}
 catch(err) {
    console.log("Error " + err);
 }

