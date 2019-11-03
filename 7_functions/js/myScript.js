const indexFunc = () => {
    document.getElementById("hello").innerHTML = "This is the INDEX!!!";
}

const firstPageFunc = () => {
    document.getElementById("firstPage").innerHTML = "This is the First Non-Index Page!";
}

const secondPageFunc = () => {
    document.getElementById("secondPage").innerHTML = "This is the Second Non-Index Page!";
}

try {
    
    
    indexFunc();
    firstPageFunc();
    secondPageFunc();
    
    console.log("OK");
}
 catch(err) {
    console.log("Error " + err);
 }

