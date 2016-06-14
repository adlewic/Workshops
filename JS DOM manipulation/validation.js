// function isvalidDay(){

// 	var x =document.getElementById("day").value;
// 	if (x == null || x == "") {
//         console.log("Day must be filled out");
//         return false;
// 		 }	 
// 	// else if (x ==  ) {
//  //       new RegExp()
//  //       return pattern.test(emailAddress);
//  //    }	 

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
		alert("ACCESS")
	}
}
