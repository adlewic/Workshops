
// -------------------------Date Validation-------------------------

//--parseInt-- works so much better for this exercise 
// because only reads -numbers- not letters or characters 
// is one step less in the validation 

window.onload = function() {
	document.getElementById("submit").onclick = function() {
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
}