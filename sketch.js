var canvas,bg;
var together;
var tom, tomImg1,tomImg2,tomImg3;
var jerry, jerryImg1,jerryImg2,jerryImg3;

function preload() {
   //Carga aquí las imágenes
   bg= loadImage("images/garden.png");
   tomImg1=loadImage("images/tomOne.png");
   tomImg2= loadAnimation("images/tomTwo.png","images/tomThree.png");
   tomImg3=loadImage("images/tomFour.png");
   jerryImg1= loadImage("images/jerryOne.png");
   jerryImg2= loadAnimation("images/jerryTwo.png","images/jerryThree.png");
   jerryImg3=loadAnimation("images/jerryFour.png");

}

function setup(){
    canvas = createCanvas(1000,800);

    // crea aquí los sprites de Tom y Jerry
    tom= createSprites(870,600);
    tom.addImage("sitCat",tomImg1);
    tom.scale=0.2;
    jerry= createSprites(200,600);
    jerry.addImage("mouseCheese",jerryImg1);
    jerry.scale=0.2;
}

function draw() {

    background("bg");

    //Escribe aquí la condición para evaluar si Tom y Jerry chocan
    if (tom.x-jerry.x<(tom.width-jerry.width/2)){
        tom.velocityX=0;
        tom.addImage("tomIV",tomImg3);
        tom.changeImage("tomIV");
        tom.scale=0.2;
        tom.x=300;
        


        jerry.addImage("mouseIV",jerryImg3);
        jerry.changeImage("mouseIV");
        jerry.scale=0.2;

    }

    drawSprites();
}


function keyPressed(){

    //escribe aquí el código para la animación de movimiento y cambio
    if (keyCode===LEFT_ARROW){
        jerry.addAnimation("mouseHI",jerryImg2);
        jerry.changeAnimation("mouseHI");
        jerry.scale=0.2;
        jerry.frameDelay=25;

        tom.addAnimation("tomEat",tomImg2);
        tom.changeAnimation("tomEat");
        tom.scale=0.2;
        tom.velocityX=-5;
    }

}