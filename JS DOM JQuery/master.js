$(document).ready(function () {

function validation(event){
			event.preventDefault()
		var password = $("#password").val()
		var username = $("#username").val()

		var numbers = /[0-9]/g // search for the characters indside of the brackets
		var digit = /\d/g // search for at least one digit on your value 

		var testingP = numbers.test(password)
		var testingU = digit.test(username)




		if ((username == null || username =="") && (password == null || password =="") ){
			alert("NOT USER,NOT PASSWORD")
		}


		if (testingU == true){
			console.log("VALID USERNAME")
		}else if (password == null || password ==""){ 
			alert("YOU FORGOT THE PASSWORD")
		}else{
			alert("this is NOT valid username")
		}


		if (testingP == true){
			console.log(testingP)
			// alert("NUMBERS INCORRECT")
		}

		if(password == "12345678"){
			console.log("CORRECT PASSWORD")
		}else{
			alert("INCORRECT")
		}


		if ((testingU == true) && (password == "12345678") ){
			$("h1").html("TOTAL ACCESS")
		}




	}

	$("#submit").click(function(event){
			validation(event)

	})


	
})