

const firstPageFunc = () => {
    document.getElementById("firstPage").innerHTML = "This is the First Non-Index Page!";
}



try {
    
    
   
    firstPageFunc();
    
    console.log("OK");
}
 catch(err) {
    console.log("Error " + err);
 }

