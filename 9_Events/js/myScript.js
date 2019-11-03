const indexInstr = () => {
    document.getElementById("hello").innerHTML = "Enter page 1 or 2";
}

try {
    let number;
    document.getElementById("formIndex").addEventListener("input", function (e){
        number = e.data;
        number = number.toString();
        console.log(number);
    });

    document.getElementById("mainButton").addEventListener("click", function (){
        url = './page1.html';
        console.log(url);
        location.href = url;
    });
    
    
    
    indexInstr();
    console.log("OK");
}
 catch(err) {
    console.log("Error " + err);
 }

