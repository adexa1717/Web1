menu.onclick = function Myfunction(){
	var x = document.getElementById("mytopnav");
	var y = document.getElementById("gall");

	if (y.className == "gallery"){
		y.className += " gallery-move";
	} 
	else{
		y.className = "gallery";
	}

	if(x.className == "topnav"){
		x.className += " responsive";
	}
	else{
		x.className = "topnav";
	}
}