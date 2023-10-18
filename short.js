
function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}
//
var response = fetch("https://raw.githubusercontent.com/Coding4ever123/Sanikal/main/settings.html?token=GHSAT0AAAAAACJCNM7RBT4PYXNRSWPAC5TQZJQBDEA")

var links = JSON.parse(response)
let hash = location.hash;
console.log(location.hash)
function Onreload(){
	if (location.pathname=="/"){
    		let link = links[hash].toString();
		if (link != "undefined"){
			window.location.href = link;
		  console.log(link) 
		}
		else if(link == "undefined"){
			location.hash = ""
		}
	}
}
Onreload()

