$(document).ready(function(){

	var donateProgress = function(){
		var formWidth = $('.form').width();
		var total = 300;
		var current = 190;
		var amount = 0;
		var remainder = total - current;
		var progress = formWidth/total * current;

		// Animate total bar
		$('.form__total').css({
			width:progress + 'px'
		});

		// Animate donations still needed figure
		function donationNeeded(){
			var startCount = setInterval(count, 10);

			function stopCount() {
			    clearInterval(startCount);
			}

			function amountCheck(value){
				if (value >= remainder){
					stopCount();
				}
			}

			function count() {
				amount += 1;
			    $('.js-required').html('$' + amount);
				amountCheck(amount);
			}
		}
		donationNeeded();
	}
	donateProgress();

	// Initiate parsley.js form validation
	$('#donate').parsley();
	
});