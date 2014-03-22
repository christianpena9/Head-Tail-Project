$(document).ready(function() {
	var rightChoice = 0;
	var wrongChoice = 0;

	$("#submit").click(function() {
		/*var random generates a random number 0 or 1*/
		var random = Math.floor((Math.random()*2)+0);

		/*var userPick takes the value of the selected option which would 
		be 0 or 1*/
		var userPick = $("#ddlViewBy option:selected").val();

		/*var userPickElement takes the actual text of what user picks*/
		var userPickElement = $("#ddlViewBy option:selected").text();
		
		/*This part updates what user picked*/
		$("#youPicked").text(userPickElement);
		
		/*This section checks what value variable random has
		and then updates what computer picked*/
		if (random == 0) {
			$("#computerPicked").text("Heads");
		} else {
			$("#computerPicked").text("Tails");
		}

		/*This part checks if user picks heads or tails on
		the drop down*/
		if (userPick == "blank") {
			alert("Please Pick Heads or Tail");
		} else if (random == userPick) {
			console.log("Random Pick is: " + random);
			console.log("User Pick is: " + userPick);
			console.log("You are Right!");

			modify_right(1);			
			console.log("Total Right: " + rightChoice);
			$("#rightChoice").text(rightChoice);
		} else {
			console.log("Random Pick is: " + random);
			console.log("User Pick is: " + userPick);
			console.log("You are Wrong!");
			
			modify_wrong(1);
			console.log("Total Wrong: " + wrongChoice);
			$("#wrongChoice").text(wrongChoice);
		}
	});

	/*This part will reset the number that are right and
	wrong*/
	$("#reset").click(function() {
		rightChoice = rightChoice = 0;
		wrongChoice = wrongChoice = 0;
		$("#rightChoice").text(rightChoice);
		$("#wrongChoice").text(wrongChoice);
		$("#youPicked").text("");
		$("#computerPicked").text("");

	});

	/*This function updates right choices picked*/
	function modify_right(val) {
		rightChoice = rightChoice + val;
		return rightChoice;
	}

	/*This function updates wrong choices picked*/
	function modify_wrong(val) {
		wrongChoice = wrongChoice + val;
		return wrongChoice;
	}

	$("#info-Button").click(function() {
		$("#info-section").toggle("slide");
	});
});