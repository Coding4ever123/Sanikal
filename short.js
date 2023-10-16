const links={
	"#FM": "sanikal-fuer-mich/",
	"#BG": "badgalerie/",
	"#MH": "news/sanikal-messe-hotel-2023-bozen/"

}
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

