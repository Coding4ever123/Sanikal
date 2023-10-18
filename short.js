function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

var response = httpGet("https://raw.githubusercontent.com/Coding4ever123/Sanikal/main/settings.html")

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

