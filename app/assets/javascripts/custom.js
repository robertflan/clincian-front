$( document ).on('turbolinks:load',function() {
	$('#total_body .btn').click(function(){
		$(this).value = "collpase"
	})
	$('.person_card_info .btn').click(function() {
		//console.log('custom');
		var text_btn = $(this).text();
	   if ($(this).text() == "Expand") {
	      $(this).text("Collapse");
	   }
	   else {
	      $(this).text("Expand");
	   }
	   console.log(text_btn);
	});
	$('.report_btn').click(function(){
		$(this).hide();
		$('.person_card_info').hide();
	});
	$('.report_close').click(function(){
		$('.report_btn').show();
		$('.person_card_info').show();
		$('#collapseFour').collapse({
		  toggle: true
		});
	})
})