// -----------------------  Keypressed Numers & Letters  ----------------------------

//Remember! : Every Number and Letter has a UNICODE value , 
	//we are going to use this value to know if the key that we are typping is
	// a number or a letter :) 

	//charCode is "themagic" with this method my variable "text"
	// is storing their own Unicode value. 


function press(event){

	var text = document.getElementById("text").value
	text = event.charCode;
	//the numbers starting from 0-9 had a value between 48-57
	if(text >= 48 || text <= 57){
		console.log("number")
		document.getElementById("answer").innerHTML = "NUMBER"
	}else{
		console.log("letter")
		document.getElementById("answer").innerHTML = "LETTER"
	}
}


