$(".tile5").hide().slideDown(1000);

$(".tile4").mouseleave( function(){
	$(".tile4").hide().slideDown(1000);
});

$("#bomberman").mouseover(function(){
	$(".tile5").html("Bomberman</br> – gra zręcznościowa wyprodukowana i wydana przez japońską firmę Hudson Soft w roku 1983. Gra jest wciąż poprawiana i wydawana na różne platformy. </br></br>");
	$(".tile5").css('background-image', 'url(' + bomberman.jpg + ')');
	
});
$("#bomberman").mouseleave(function(){
	$(".tile5").html("<i>Grę restartuje się</br> odświeżeniem strony</i></br> (Ctrl+R) ");
	$(".tile5").css("fontSize", "22");
	          
});         
$("#hangman").mouseover(function(){
	$(".tile5").html("Wisielec</br> (również szubienica, powieszony) – gra towarzyska, zazwyczaj dla dwóch osób, polegająca na odgadywaniu słów. Do gry potrzebna jest kartka i ołówek. </br>Wersja przysłowia polskie.");
	          
});         
$("#hangman").mouseleave(function(){
	$(".tile5").html("<i>Grę restartuje się</br> odświeżeniem strony</i></br> (Ctrl+R) ");
	$(".tile5").css("fontSize", "22");
	          
});         
$("#asteroids").mouseover(function(){
	$(".tile5").html("Asteroids</br> – gra komputerowa stworzona przez firmę Atari, wypuszczona została w roku 1979 na automaty arcade oraz konsolę Atari 2600.</br></br>");
	          
});         
$("#asteroids").mouseleave(function(){
	$(".tile5").html("<i>Grę restartuje się</br> odświeżeniem strony</i></br> (Ctrl+R) ");
	$(".tile5").css("fontSize", "22");
	
});
$("#santa").mouseover(function(){
	$(".tile5").html("Święty mikołaj - gry</br> (strona)");
	          
});         
$("#santa").mouseleave(function(){
	$(".tile5").html("<i>Grę restartuje się</br> odświeżeniem strony</i></br> (Ctrl+R) ");
	$(".tile5").css("fontSize", "22");
	
});