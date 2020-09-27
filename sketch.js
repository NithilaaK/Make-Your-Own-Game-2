var gameState = 0; 
var pet, intro, petHappy;

function setup() {
  createCanvas(350, 500);

  pet = new Pet("images/petHappy.png");
  
  intro = new Intro();
}

function draw() {
  if (gameState === 0) {
    background(253, 246, 158); 
  
    intro.display();
    
    drawSprites();  
  } else if (gameState === 1) {
      
    intro.hide();

    fill("blue");
    rect(0, 380, 400, 125);

    pet.display();
  }
}