canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
var img_width = 300;
var img_height = 100;

var img_image;

img_x = 100;
img_y = 100;

function add() {
	img_imgTag = new Image(); //defining a variable with a new image
	img_imgTag.onload = uploadimg; // setting a function, onloading this variable
	img_imgTag.src = img_image;   // load image
}

function uploadimg() {

	ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}

//Write a code to grab the key-pressed event
window.addEventListener("keydown",my_keydown);
function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
		if((keyPressed >=97 && keyPressed<=122)|| (keyPressed >=65 && keyPressed<=90))
		{
			alphabetkey();
			document.getElementById("d1").innerHTML="You pressed Alphabet Key";
			console.log("Alphabet key")
		}
	

	if(keyPressed>=48 && keyPressed<=57)		{
		numberkey();
		document.getElementById("d1").innerHTML="You pressed Number Key";
		console.log("Number Key");
	}
	

	if(keyPressed>=37 && keyPressed<=40)		{
		arrowkey();
		document.getElementById("d1").innerHTML="You pressed Arrow Key";
		console.log("Arrow Key");
	}
	
	if(keyPressed==17 || keyPressed== 18 || keyPressed==27    ) {
        specialkey();
        document.getElementById("d1").innerHTML="You pressed Special Key";
        console.log("Special Key");
    }

}

function alphabetkey()
{
img_image="ADVC84template-master_Alpkey.png"; 
add();
}
function numberkey()
{
img_image= "ADVC84template-master_numkey.png";
add();
}
function arrowkey()
{
	img_image= "ADVC84template-master_Arrkey.png";
	add();
}

function otherkey()
{
	img_image="ADVC84template-master_otherkey.png";
	add();
}
	
