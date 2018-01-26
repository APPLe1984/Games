
var numer = Math.round(Math.random()*10);
var hasla = new Array(10);
 hasla[0] = "Master media";
 hasla[1] = "Kto rano wstaje temu Pan Bóg daje";
 hasla[2] = "Nosił wilk razy kilka ponieśli i wilka";
 hasla[3] = "Bez pracy nie ma kołaczy";
 hasla[4] = "Apetyt rośnie w miarę jedzenia";
 hasla[5] = "Co Cię nie zabije to Cie wzmocni";
 hasla[6] = "Co dwie głowy to nie jedna";
 hasla[7] = "Wszystkie drogi prowadzą do Rzymu";
 hasla[8] = "Czego Jaś się nie nauczy tego Jan nie będzie umiał";
 hasla[9] = "Każdy kij ma dwa końce";


var haslo = hasla[numer];
haslo = haslo.toUpperCase();
var dlugosc = haslo.length;
var haslo1 = "";
var ileSkuch = 0;
var yes = new Audio("yes.wav");
var no = new Audio("no.wav");
var win = new Audio("win.wav");
var lost = new Audio("lost.wav");

for (i=0; i<dlugosc; i++)
{
		if(haslo.charAt(i) == " ") haslo1 = haslo1 + " ";
		else haslo1 = haslo1 + "-";
}

function wypiszHaslo()
{
	document.getElementById("plansza").innerHTML = haslo1;
}

window.onload = start;

var litery = new Array(35);
litery[0] = "A";
litery[1] = "Ą";
litery[2] = "B";
litery[3] = "C";
litery[4] = "Ć";
litery[5] = "D";
litery[6] = "E";
litery[7] = "Ę";
litery[8] = "F";
litery[9] = "G";
litery[10] = "H";
litery[11] = "I";
litery[12] = "J";
litery[13] = "K";
litery[14] = "L";
litery[15] = "Ł";
litery[16] = "M";
litery[17] = "N";
litery[18] = "Ń";
litery[19] = "O";
litery[20] = "Ó";
litery[21] = "P";
litery[22] = "Q";
litery[23] = "R";
litery[24] = "S";
litery[25] = "Ś";
litery[26] = "T";
litery[27] = "U";
litery[28] = "V";
litery[29] = "W";
litery[30] = "X";
litery[31] = "Y";
litery[32] = "Z";
litery[33] = "Ż";
litery[34] = "Ź";


function start()
{
	var trescDiva =  "";
	for (i=0; i<=34; i++)
	{
		var element = "lit" + i;
		trescDiva = trescDiva + '<div class="litera" onclick="sprawdz('+i+')" id="'+ element +'">'+ litery[i] +'</div>';
		if ((i+1) % 7 == 0) trescDiva = trescDiva + '<div style="clear:both;"></div>'
	}
	document.getElementById("alfabet").innerHTML = trescDiva;

	wypiszHaslo();
}

String.prototype.ustawZnak = function(miejsce, znak)
{
	if (miejsce>this.length - 1) return this.toString();
	else return this.substr(0, miejsce) + znak + this.substr(miejsce + 1);
} 

function sprawdz(nr)
{
	
	var trafiona = false;
	
	for (i=0; i<dlugosc; i++)
	{
		if (haslo.charAt(i) == litery[nr])
		{
			haslo1 = haslo1.ustawZnak(i, litery[nr]);
			trafiona = true;
		}
		
	}
	
	if(trafiona == true)
	{
		yes.play();
		var element = "lit" + nr;
		document.getElementById(element).style.backgroundColor = "#003300";
		document.getElementById(element).style.color = "#00C000";
		document.getElementById(element).style.border =  "3px solid #00C000";
		document.getElementById(element).style.cursor =  "default";
		
		wypiszHaslo();
	}
	else
	{
		no.play();
		
		var element = "lit" + nr;
		document.getElementById(element).style.backgroundColor = "#330000";
		document.getElementById(element).style.color = "#C00000";
		document.getElementById(element).style.border =  "3px solid #C00000";
		document.getElementById(element).style.cursor =  "default";
		document.getElementById(element).setAttribute("onclick",";");
		
		//skucha
		ileSkuch++;
		var obraz = "img/s"+ileSkuch+".jpg";
		document.getElementById("szubienica").innerHTML = '<img src="'+obraz+'" alt=""/>';
		
	}
	
	if(haslo == haslo1){
		win.play();
		document.getElementById("alfabet").innerHTML = "Tak jest! Podano prawidłowe hasło: "+haslo+'<br/><br/><span class="reset" onclick="location.reload()">JESZCZE RAZ?</span>';
	}
	//przegrana
	if(ileSkuch == 9){
	lost.play();	
	document.getElementById("alfabet").innerHTML = "Skucha! Prawidłowe hasło to: "+haslo+'<br/><br/><span class="reset" onclick="location.reload()">JESZCZE RAZ?</span>';
	}
}

