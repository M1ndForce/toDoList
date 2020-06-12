//Check Off Specific Todos By Clicking
$('ul').on("click", "li", function(){
	$(this).toggleClass('completed');
});
//click on X delete todo
$('ul').on("click", "span", function(){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text'").keypress(function(event){
	if(event.which === 13){
		let todoText = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fas fa-archive'></i></span> " + todoText + "</li>");
	}
});

$(".fa-bookmark").click(function(){
	$("input[type='text'").fadeToggle()
});