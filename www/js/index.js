var app = {
    initialize: function() {
        document.getElementById('btn').addEventListener('click', this.callme);
    },
    callme: function(){
        console.log("I hate siddharth");
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("demo").innerHTML = this.responseText;
            }
        };
        xhr.open("GET", "https://www.google.com/search?q=paypal", true);
        xhr.send();
    }
};

app.initialize();