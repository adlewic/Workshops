// -----------------------  Keypressed Numers & Letters  ----------------------------
	
// doesn't work :( but it's ok one day will work ...LOL 

function teclado(){

	var letters= "/[^0-9]/"
	var numbers= "/^[a-zA-Z]"
	var text = document.getElementById("inputtext").value
	if (text.value.match(letters){
		alert("LETTERS")
	}else if (text.value.match(numbers){
		alert("NUMBERS")
	}

}