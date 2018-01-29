$(function() {

var $gifArea = $("#gallery");
var $form = $("form");
var $remove = $("#remove_button");

$form.on("submit", function(e){
	$gifArea.empty();
	e.preventDefault();

	var $input = $("#keyword").val();


var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=" + $input + "&api_key=dc6zaTOxFJmzC");
xhr.done(function(res) { 
  for(var i = 0; i < res.data.length; i++){
  	var $url = $("<img>", { src: res.data[i].images.fixed_height.url });
  	$gifArea.append($url);
	}
 });

$remove.on("click", function(e){
  $gifArea.empty();
  e.preventDefault();
});






})

});