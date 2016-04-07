

$(document).ready(function(){
	
	$("#fname").hover(function(){
		$(".hint1").animate({opacity: "show", top: "50"}, "slow");
		},
	function() {
		$(".hint1").animate({opacity: "hide", top: "60"}, "fast");
	});

	$("#lname").hover(function(){
		$(".hint2").animate({opacity: "show", top: "77"}, "slow");
		},
	function() {
		$(".hint2").animate({opacity: "hide", top: "87"}, "fast");
	});
	
$("#address").hover(function(){
		$(".hint3").animate({opacity: "show", top: "105"}, "slow");
		},
	function() {
		$(".hint3").animate({opacity: "hide", top: "115"}, "fast");
	});
	
});




