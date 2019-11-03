

const firstPageFunc = () => {
    document.getElementById("firstPage").innerHTML = "Welcome to first Page. Please enter a number";
}



try {
    
    document.getElementById("goToIndex").addEventListener("click", function (){
        location.href = './index.html';
    });
    document.getElementById("goToPage2").addEventListener("click", function (){
        location.href = './page2.html';
    });
   
    firstPageFunc();
    
    console.log("OK");
}
 catch(err) {
    console.log("Error " + err);
 }

