$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//click on X to delete todo
$("ul").on("click", "span", function(event){ //this can cause event bubbling
	$(this).parent().fadeOut(2000, function(){
		$(this).remove(); //thiremoves the parent element after the fadeout() is called
	}); 
	event.stopPropagation(); //this stops the bubbling up from happening
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		var textItem = $(this).val(); //grabbing new todo text from input
		$(this).val("");
		$("ul").append(`<li><span><i class="fa fa-trash"></i></span> ${textItem}</li>`); //this appends the new text to the end of the li
	}
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});

// working version