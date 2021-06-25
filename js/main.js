function dcommand(){
    var i = document.getElementById("in1").value;

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://<ip>/cgi-bin/be.py?x=" + i, true)

    xhr.send();
    xhr.onload = function(){	
	    var output = xhr.responseText;
	    document.getElementById('outdiv').innerHTML = output;
    }

}
