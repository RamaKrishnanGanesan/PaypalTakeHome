
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
    xhr.open("GET", "http://10.0.0.105:3002/loadpage", true);
    xhr.send();

};