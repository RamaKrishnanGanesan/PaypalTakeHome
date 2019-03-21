
document.getElementById('btn').addEventListener('click',callme);
console.log("html loaded");
function callme(responseText){
    console.log("I hate siddharth");
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("demo").innerHTML = this.responseText;
        }
    };
    xhr.open("GET", "http://localhost:3001/loadpage", true);
    xhr.send();
};
