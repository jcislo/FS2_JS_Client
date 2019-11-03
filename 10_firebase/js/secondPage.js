const secondPageFunc = () => {
    document.getElementById("secondPage").innerHTML = "This is the Second Non-Index Page! Enter Name";
}

try {
    document.getElementById("returnIndex").addEventListener("click", function (){
        location.href = './index.html';
    });
    document.getElementById("goToPage1").addEventListener("click", function (){
        location.href = './page1.html';
    });
   
    
    secondPageFunc();
    
    console.log("OK");
}
 catch(err) {
    console.log("Error " + err);
 }

