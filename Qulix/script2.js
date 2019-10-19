$("#open").click(function(){
	$("#search").show(200);
	$("#open").hide();
	$("#close").show();
});

$("#close").click(function(){
	$("#search").hide(200);
	$("#open").show();
	$("#close").hide();
});

$("#open3").click(function(){
	$(".mobilemenu").slideToggle(400);
});

$("#open2").click(function(){
	$(".field2").slideToggle(150);
});

$("#open4").click(function(){
	$(".field2").slideToggle(150);
});
