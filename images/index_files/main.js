//alert("hello world");
// function () {
// anonomous function
//}
// .methodName()
// a variable has quotes around it


$(document).ready(function() {
	//console.log("jquery loaded");
	/*$(".box").click(function(){
		//console.log("box click"); proves that it works!
		$(this).css({
			"width" : "600px",
			"height" : "600px",	*/
		var box = $(".box");

		$(box).hover(function(){
			$(this).animate ({
				"width" : "500px",

			}, 50); // animate

		}, function(){
			$(this).animate({
				"width" : "400px",
			}, 50);
		}); // hover


		//}); //css method end


	//}); //click method end








}); //ready method end
