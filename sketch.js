var rabbit, carrot, Sides;
var plate1, plate2, plate3, plate4;

function setup()
{
  createCanvas(1100,700);


  rabbit = createSprite(75,650,29,29);
  carrot = createSprite(900,45,50,50);
  Sides = createEdgeSprites();

  plate1 = createSprite(270, 220, 250, 20);
  plate2 = createSprite(270, 460, 250, 20);
  plate3 = createSprite(750, 220, 100, 20)
  plate4 = createSprite(750, 460, 100, 20)


  rabbit.shapeColor = "white";
  carrot.shapeColor = "rgba(240,10,10,0.77)";

  plate1.velocityX = -3;
  plate3.velocityX = 30;
  plate2.velocityX = 15;
  plate4.velocityX = -30;

}

function draw()
{
  background("lightblue");

  {
    if(keyDown("up")){
      rabbit.y = rabbit.y-20;
    }

    if(keyDown("down")){
      rabbit.y = rabbit.y+20;
    }
    
    if(keyDown("right")){
      rabbit.x = rabbit.x+20;
    }

    if(keyDown("left")){
      rabbit.x = rabbit.x-20;
    }
  }

      //bounceOff 
  {
    rabbit.bounceOff(Sides[0]);
    rabbit.bounceOff(Sides[1]);
    rabbit.bounceOff(Sides[2]);
    rabbit.bounceOff(Sides[3]);


    plate1.bounceOff(Sides[0]);
    plate1.bounceOff(Sides[1]);
    
    plate2.bounceOff(Sides[0]);
    plate2.bounceOff(Sides[1]);

    plate3.bounceOff(Sides[0]);
    plate3.bounceOff(Sides[1]);

    plate4.bounceOff(Sides[0]);
    plate4.bounceOff(Sides[1]);

  }

      // Touching function
  textSize(25);
  stroke("blue")
  text("Rabbit went it's starting place if it was hitten by Plates", 25, 40);
  textSize(40);
  stroke("red")
  {  
    if(rabbit.isTouching(carrot)){
      text("YOU WIN",550,100);
    }

    if(rabbit.isTouching(plate1)){
      rabbit.x = 75;
      rabbit.y = 650;
    }

    if(rabbit.isTouching(plate2)){
      rabbit.x = 75;
      rabbit.y = 650;
    }
    
    if(rabbit.isTouching(plate3)){
      rabbit.x = 75;
      rabbit.y = 650;
    }
    
    if(rabbit.isTouching(plate4)){
      rabbit.x = 75;
      rabbit.y = 650;
    }
  }

  drawSprites()
}
