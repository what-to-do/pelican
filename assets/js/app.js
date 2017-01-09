$(document).ready(function() {

//about me sections to hide and only display when about button selected
$(".about_me").hide();

$(".about").on("click", function(){
	$(".about_me").show();
}); //end of about me

}); // End of document.ready