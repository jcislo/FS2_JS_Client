

try {
    const firstList = ["apple", "Orange", "apricot"];
    const secondList = [1, 5, 15];
    var letter = "a";
    var number = 5;

    let newWords = [];
    let newNums = [];
    let b = 0;
    while (b < firstList.length) {
        
        
        if (firstList[b][0] === letter) {
            newWords.push(firstList[b]);
            console.log(newWords);
        }
        if (secondList[b] >= number) {
            newNums.push(secondList[b]);
        }
        b++;
    }

    document.getElementById("hello").innerHTML = newWords;
    document.getElementById("second").innerHTML = newNums;
    
    console.log("OK");
}
 catch(err) {
    console.log("Error " + err);
 }

