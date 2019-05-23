// Referanser til HTML-elementer
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

class Figur{
  constructor(x,y){
    this.x = x;
    this.y = y;
  }
  tegn(){
    ctx.strokeStyle = "white";
    ctx.beginPath();
    ctx.arc(this.x,this.y,this.r,0,Math.PI*2);
    ctx.stroke();
  }
  beveg(){
    this.x = this.x + Math.random()*10 - 5;
    this.y = this.y + Math.random()*10 - 5;
  }
}

class Bubble extends Figur{
  constructor(x,y,r){
    super(x,y);
    this.r = r;
  }
}

class Square extends Figur{
  constructor(x,y,b,h){
    super(x,y);
    this.b = b;
    this.h = h;
  }
  tegn(){
    ctx.fillStyle="white";
    ctx.fillRect(this.x,this.y,this.b,this.h);
  }
}

class Bilde{
  constructor(x,y,bilde){
    this.x = x;
    this.y = y;

    let image = new Image;
    image.src = bilde;
    this.bilde = image;
  }
  tegn(){
    ctx.drawImage(this.bilde,this.x,this.y);
  }
  beveg(){
    this.x = this.x + Math.random()*10 - 5;
    this.y = this.y + Math.random()*10 - 5;
  }
}



// Globale variabler
let boble1 = new Bubble(200,100,50);
let boble2 = new Bubble(200,100,50);
let firkant1 = new Square(300,100,40,50);
let manchester = new Bilde(100,100,"manchesterUnited.jpeg");

// Oppstart
gameloop();

//Funksjonsdefinisjoner
function gameloop(){
  tegnBakgrunn();
  boble1.beveg();
  boble1.tegn();
  firkant1.beveg();
  firkant1.tegn();
  requestAnimationFrame(gameloop);
}

function tegnBakgrunn(){
  ctx.fillStyle = "black";
  ctx.fillRect(0,0,canvas.width,canvas.height); // Tegner bakgrunnsfarge på canvaset
}

function tegnBubble(){
  ctx.strokeStyle = "white";
  ctx.beginPath();
  ctx.arc(bubble.x, bubble.y, 50, 0, 2 * Math.PI);
  ctx.stroke()
}

function bevegBubble(){
  bubble.x = bubble.x + Math.random()*10 - 5;
  bubble.y = bubble.y + Math.random()*10 - 5;
}