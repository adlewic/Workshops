// function checkingkey(){

//     $("#text").keypress(function(){
//     	var key =$("#text").value
//     	var check= $("#answer").text(key)
        
//     })
// }

// checkingkey()

// $(document).ready(function () 

// 	function checkingkey(event){

// 	    $("#text").keypress(function(){

// 	    	var keyvalue =$("#text").value
// 	    	var keycode = event.charCode

// 	    	var check= String.fromCharCode(keycode)

// 	       	var print= $("#answer").text(check)
// 	       	console.log("print")
// 	    })
// 	})
$(document).ready(function () {

function showkey(event){

		$("#text").keypress(function() {

			var text = $("#text").value()
			var keycode = event.charCode
			console.log(keycode)

			var check = String.fromCharCode(keycode)
			
			$("#answer").text(check)
		})
	}
})

