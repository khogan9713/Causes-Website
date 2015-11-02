$(document).ready(function() {
	//alert("yea");
	$("#navBtn").click(function() {
		$("nav").slideToggle();
		$(this).toggleClass("navActive");


	}); //click function

}); //ready end method