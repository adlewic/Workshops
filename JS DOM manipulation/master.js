
// -------------------------Date Validation-------------------------


window.onload = function() {
		document.getElementById("onesubmit").onclick = function() {
			var dateString = document.getElementById("dateString").value
			var division = dateString.split("/")
			var dd = parseInt(division[0],10)
			var mm = parseInt(division[1],10)
			var yyyy  = parseInt(division[2],10)

			if (division == null || division ==""){
				alert("DATE must be filled")
			}else if (dd < 1 || dd > 31) {
				// return false
				alert("invalid DAY")
			} else if (mm == 1 || mm > 12 ){
				alert("invalid MONTH")
				// return false
			} else if (yyyy < 1900 || yyyy > 2020) {
				alert("invalid YEAR")
				// return false
			} else{
				alert("THANKS!")
			}
		}

// -----------------------------UserName and Password------------------------------

	// username=imelda  || password = 12345  ---- to get ACCESS 


		document.getElementById("twosubmit").onclick = function() {
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


		document.getElementById("text").onkeypress = function (event){
				var text = document.getElementById("text").value
				text = event.charCode;
				//the numbers starting from 0-9 had a value between 48-57
				if(text >= 48 || text <= 57){
					// console.log("number")
					document.getElementById("answer").innerHTML = "NUMBER"
				}else if{
					// console.log("letter")
					document.getElementById("answer").innerHTML = "LETTER"
				}
		}
}