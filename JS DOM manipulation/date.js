//   function parseDate(str) {
//  	var y = str.substr(0,4),
//  	m = str.substr(4,2) - 1,
//  	d = str.substr(6,2);
//  	var D = new Date(y,m,d);
//  return (D.getFullYear() == y && D.getMonth() == m && D.getDate() == d) ? D : false;
// }

// console.log(parseDate('20150131')); // returns Sat Jan 31 2015 00:00:00 GMT+0100 (W. Europe Standard Time)
// // console.log(parseDate('20150231')); // returns false
// dd/mm/yyyy
// 12345678910

// function validationdate(){

// var textdate =document.getElementById("textdate").value
// var res = textdate.split("/"){

// var dd = textdate.substr(2,10)
// var mm =textdate.substr(5,10)
// var yyyy =textdate.substr(10)

// }


function alldatetext(separatedate){

	var dd =separatedate.substr(2,2)
	var mm =separatedate.substr(6,2)
	var yy = separatedate.substr(10,7)
	var theAllDate = newdate(dd,mm,yy)

	return(theAllDate.getFullYear()== yy &&
		   theAllDate.getMonth() == mm &&
		   theAllDate.getDate() == dd &&)
}

	if (separatedate.length !==10{
		return false
	} 
	if (separatedate.substr(2,3) !=='/' || separatedate.substring(5,6) !=='/'){
		return false
	}

	if (yy< 1000  || year 3000){
		return false
		}
	}


function validationdate (){
	var textdate = document.getElementById('textdate').value
	if(textdate(separatedate)){
		alert("OK")
	}
	else {
		alert("Invalid format")
	}
}

