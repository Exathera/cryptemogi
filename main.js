$(document).ready(function(){
    $('.user').click(function(){
		if($("body").hasClass('dark')){
			$("body").addClass('light');
			$("body").removeClass('dark');
		} else{
			$("body").addClass('dark');
			$("body").removeClass('light');
		}
		console.log("jde to!");
    });
});