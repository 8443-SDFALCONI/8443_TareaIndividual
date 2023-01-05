$(document).ready(function(){
    $('#myForm').submit(function(e){
        e.preventDefault();
        $.ajax({
            url: "get_data.php",
            type: "POST",
            data: $(this).serialize(),
            success: function(data){
                $("#postData").html(data);
            },
            error: function(){
                alert("Todavia no se implementó PHP");
            }
        });
    });
});
function xml1(){
var text, parser, xmlDoc;

text = "<bookstore><book>" +
"<title>Dato1</title>" +
"<author>Nombre</author>" +
"<year>2005</year>" +
"</book></bookstore>";

parser = new DOMParser();
xmlDoc = parser.parseFromString(text,"text/xml");

document.getElementById("demo2").innerHTML =
xmlDoc.getElementsByTagName("title")[0].childNodes[0].nodeValue;
}

function json1() {
      var data = {
        "data": {
          "x": "1",
          "y": "1",
          "url": "http://pagina.com"
        },
        "event": "start",
        "show": 1,
        "id": 50
      }


      document.getElementById("json").innerHTML = JSON.stringify(data, undefined, 2);
    }