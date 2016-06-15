// -----------------------------User Name and Password------------------------------
// username=imelda  || password = 12345  ---- to get ACCESS 


function validation(){
	var password= document.getElementById("password").value
	var username = document.getElementById("username").value

	if (username == null || username == "") {
		alert("Name must be filled out")
	} else if(password == null || password == "") {
		alert("The password must be filled")
	} else if (password !== "12345") {
		alert("INCORRECT password")
	} else if(password == "12345" || username =="imelda")  {
		alert("PREMIUM ACCESS")
	}
}

// -----------------------  Keypressed Numers & Letters  ----------------------------
	
// doesn't work :( but it's ok one day will work ...LOL 

function teclado(){

	var letters = "/[a-zA-Z]/"
	var numbers = "/[0-9]/"
	var text = document.getElementById("inputtext").value
	if (text.value.match(letters).{
		alert("LETTERS")
	}else if (text.value.match(numbers){
		alert("NUMBERS")
	}
}


