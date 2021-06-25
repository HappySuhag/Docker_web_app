function dcommand(){
    var i = document.getElementById("in1").value;

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://192.168.25.61/cgi-bin/be.py?x=" + i, true)

    xhr.send();
    xhr.onload = function(){	
	    var output = xhr.responseText;
	    document.getElementById('outdiv').innerHTML = output;
    }

}