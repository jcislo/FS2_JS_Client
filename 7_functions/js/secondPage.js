const secondPageFunc = () => {
    document.getElementById("secondPage").innerHTML = "This is the Second Non-Index Page!";
}

try {
    
    secondPageFunc();
    
    console.log("OK");
}
 catch(err) {
    console.log("Error " + err);
 }

