$(document).ready(function() {
	var max = prompt("Please enter a whole number", "Number");
	max = +max

	console.log(typeof max);

	while (max % 1 != 0) {
		var max = prompt("Please enter a whole number (no decimals)", "Number");
	} 

	if (max % 1 == 0) {
		runFizzBuzz(max);
	};				

	function runFizzBuzz(max) {
	  for ( var i = 1; i <= max; i++ ) {
	    if (i % 5 == 0 && i % 3 == 0) {
			$(".list").prepend('<li>' + "fizzbuzz" + '</li>');
	    } else if ( i % 3 == 0 ) {
			$(".list").prepend('<li>' + "fizz" + '</li>');
	    } else if (i % 5 == 0) {
			$(".list").prepend('<li>' + "buzz" + '</li>');
	    } else {
			$(".list").prepend('<li>' + i + '</li>');
	    }
	  }
	}
});