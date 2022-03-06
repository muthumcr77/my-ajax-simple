function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     document.getElementById("rid").innerHTML = this.responseText + "</br>Headers: " +  this.getAllResponseHeaders();
    }
  };
  var url = 'https://jsonplaceholder.typicode.com/todos/1'
  xhttp.open("GET", url, true);
  xhttp.send();
}