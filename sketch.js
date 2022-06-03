var score =0;
var gun,bluebubble,redbubble, bullet, backBoard;

var gunImg,bubbleImg, bulletImg, blastImg, backBoardImg;

var botella, botellaImg, botellaGroup;


var life =3;
var score=0;
var gameState=1

function preload(){
  gunImg = loadImage("gun1.png")
  blastImg = loadImage("blast.png")
  bulletImg = loadImage("bullet1.png")
  botellaImg = loadImage("botellab2.png")
  backBoardImg= loadImage("back.jpg")
}
function setup() {
  createCanvas(windowWidth, windowHeight);

  backBoard= createSprite(50, width/2, 100,height);
  backBoard.addImage(backBoardImg)
  
  gun= createSprite(100, height/2, 50,50);
  gun.addImage(gunImg)
  gun.scale=0.2
  
  bulletGroup = createGroup();   
  //blueBubbleGroup = createGroup();   
  //redBubbleGroup = createGroup();   
  
  heading= createElement("h1");
  scoreboard= createElement("h1");
}

function draw() {
  background("#BDA297");
  
  heading.html("Vida: "+life)
  heading.style('color:red'); 
  heading.position(150,20)

  scoreboard.html("Puntuación: "+score)
  scoreboard.style('color:red'); 
  scoreboard.position(width-200,20)

  if(gameState===1){
    gun.y=mouseY  

    if (frameCount % 80 === 0) {
      //drawblueBubble();
    }

    if (frameCount % 100 === 0) {
      //drawredBubble();
    }

    if(keyDown("space")){
      //shootBullet();
    }

    if (blueBubbleGroup.collide(backBoard)){
      handleGameover(blueBubbleGroup);
    }

    if(redBubbleGroup.collide(bulletGroup)){
      handleBubbleCollision(redBubbleGroup);
    }

    spawnbotellas();

    drawSprites();
  }
    
  
}
function drawbotella(){
  botella = createSprite(800,random(20,780),40,40);
  botella.addImage(botellaImg);
  botella.scale = 0.1;
  botella.velocityX = -8;
  botella.lifetime = 400;
  botellaGroup.add(botella);
}


function handleBubbleCollision(bubbleGroup){
    if (life > 0) {
       score=score+1;
    }

     blast= createSprite(bullet.x+60, bullet.y, 50,50);
    blast.addImage(blastImg) 
    
    blast.scale=0.3
    blast.life=20
    bulletGroup.destroyEach()
    bubbleGroup.destroyEach()
//}

function handleGameover(bubbleGroup){
  
    life=life-1;
    bubbleGroup.destroyEach();
    

    if (life === 0) {
      gameState=2
      
      swal({
        title: `Fin del juego`,
        text: "Ups perdiste el juego!",
        text: "Tu puntuación es: " + score,
        imageUrl:
          "https://cdn.shopify.com/s/files/1/1061/1924/products/Thumbs_Down_Sign_Emoji_Icon_ios10_grande.png",
        imageSize: "100x100",
        confirmButtonText: "Gracias por jugar"
      });
    }
  
}

function spawnbotellas() {
  //escribe el código para aparecer las nubes
  if (frameCount % 60 === 0) {
    botella = createSprite(width+20,height-300,40,10);
    botella.y = Math.round(random(100,windowWidth - 100));
    botella.addImage(botellaImg);
    botella.scale = 0.6;
    botella.velocityX = -6;
    
     //asigna ciclo de vida a la variable botella
    botella.lifetime = 300;
    
    //ajusta la profundidad del trex con relacion a las nubes
    //cloud.depth = trex.depth;
    //trex.depth = trex.depth + 1;
    
    //añade cada nube al grupo de nubes
    //cloudsGroup.add(cloud);
  }
}
