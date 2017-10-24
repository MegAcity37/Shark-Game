var game;
var shark;
<<<<<<< HEAD
var foodMax = 6;
var trashMax = 4;

var sharkDirection = false;


=======
var foodMax = 7;
var trashMax = 5;

var sharkDirection = false;

>>>>>>> a6169d276836d69f244d60d3034925ca82f3b458
var food = new Array(foodMax);
var fishDirection = new Array(foodMax);

var trash = new Array(trashMax);



var score = 20;
var eatSound = new Sound("sharkEating.wav");

function init() {
    
    game = new Scene();
    shark = new Shark();
    for (var i = 0; i < foodMax; i++) {
        food[i] = new Food(i);
          
    }
    for (var i = 0; i < trashMax; i++){
<<<<<<< HEAD
        trash[i] = new Trash(i);
=======
        trash[i] = new Trash();
>>>>>>> a6169d276836d69f244d60d3034925ca82f3b458
    }
    game.start();
}

function Shark() {
    tShark = new Sprite(game, "sharkLeft.png", 240, 90);
    tShark.setSpeed(0);
    
    tShark.checkKeys = function () {
        if (keysDown[K_RIGHT]) {
            this.changeXby(7)
            tShark.changeImage("sharkRight.png");
            sharkDirection = true;
<<<<<<< HEAD
            
=======
>>>>>>> a6169d276836d69f244d60d3034925ca82f3b458
        }
        if (keysDown[K_LEFT]) {
            this.changeXby(-7)
            tShark.changeImage("sharkLeft.png");
            sharkDirection = false;
<<<<<<< HEAD
            
=======
>>>>>>> a6169d276836d69f244d60d3034925ca82f3b458
        }
        if (keysDown[K_UP]) {
            this.changeYby(-7);
        }
        if (keysDown[K_DOWN]) {
            this.changeYby(7);
        }

        if (keysDown[K_SPACE] && keysDown[K_LEFT]) {
            this.changeXby(-10);
            score -= 2;
        }

        if (keysDown[K_SPACE] && keysDown[K_RIGHT]) {

            this.changeXby(10);
            score -= 2;
            }
<<<<<<< HEAD

        if (keysDown[K_SPACE] && keysDown[K_UP]) {
            this.changeYby(-10);
            score -= 2;
        }

        if (keysDown[K_SPACE] && keysDown[K_DOWN]) {

            this.changeYby(10);
            score -= 2;
            }





=======
>>>>>>> a6169d276836d69f244d60d3034925ca82f3b458
            
        }
    
    return tShark;
}

function Food(i) {
    tFood = new Sprite(game, fishSprite(i), 120, 60);

    var temp = startPlace();
   
    tFood.setPosition(temp.x, temp.y);
<<<<<<< HEAD
    tFood.setMoveAngle(startMoveAngle(i));

    tFood.setSpeed(startSpeed(5));
       
=======
    tFood.setMoveAngle(startMoveAngle());
    tFood.setSpeed(startSpeed(10));
>>>>>>> a6169d276836d69f244d60d3034925ca82f3b458

    return tFood;
}

<<<<<<< HEAD
function fishSprite(i) {
var direction = Math.ceil(Math.random() * 2)
if (direction < 2) {
        fishDirection[i] = 1;
        return "fishRight.png";
}
else {
        fishDirection[i] = false;
        return "fishLeft.png";
    }
}



function Trash(i){
    tTrash = new Sprite(game, "trashBottle.png", 120, 40);
    var temp = startPlace();
    tTrash.setPosition(temp.x, temp.y);
    tTrash.setMoveAngle(startMoveAngle(i));
    tTrash.setSpeed(startSpeed(3));
=======


function Trash(){
    tTrash = new Sprite(game, "trashBottle.png", 150, 50);
    var temp = startPlace();
    tTrash.setPosition(temp.x, temp.y);
    tTrash.setMoveAngle(startMoveAngle());
    tTrash.setSpeed(startSpeed(5));
>>>>>>> a6169d276836d69f244d60d3034925ca82f3b458

    return tTrash;
}

function startPlace() {
    var x = Math.round(Math.random() * game.width);
    var y = Math.round(Math.random() * game.height);
<<<<<<< HEAD
    
=======
    console.log(x, y);
>>>>>>> a6169d276836d69f244d60d3034925ca82f3b458

    return { "x": x, "y": y };

}

<<<<<<< HEAD
function startMoveAngle(i) {

    if (fishDirection[i] == true) { 
    var angle = Math.round(Math.random() * 180);
    }

    else if (fishDirection[i]== false){
        var angle = Math.round(Math.random() * 180 + 180);
    }

    else {
        var angle = Math.round(Math.random() * 360);

    }
  console.log(angle)
=======
function startMoveAngle() {
    var angle = Math.round(Math.random() * 180);
>>>>>>> a6169d276836d69f244d60d3034925ca82f3b458
    return angle;
}

function startSpeed(max) {
<<<<<<< HEAD
    var startSpeed = Math.round(Math.random() * max + 5);
=======
    var startSpeed = Math.round(Math.random() * max);
>>>>>>> a6169d276836d69f244d60d3034925ca82f3b458
    return startSpeed;
}



function energyBar() {
    game.context.beginPath();
    game.context.rect(0, 590, parseInt(score), 20);
    game.context.fillStyle = "red";
    game.context.fill();
}

function checkCollisionFood(fish) {
    var distance = shark.distanceTo(fish);
    if (distance < 75) {
        eatSound.play();
        score += 10;
        temp = startPlace();
               
        food[food.indexOf(fish)] = new Food(food.indexOf(fish));

    }

}

function checkCollisionTrash(trash) {
    var distance = shark.distanceTo(trash);
    if (distance < 75) {
        eatSound.play();
        score -= 10;
        temp = startPlace();
        trash.setPosition(temp.x, temp.y);
<<<<<<< HEAD
        trash.setMoveAngle(startMoveAngle(trash));
        trash.setSpeed(3);
=======
        trash.setMoveAngle(startMoveAngle());
>>>>>>> a6169d276836d69f244d60d3034925ca82f3b458

    }

}

<<<<<<< HEAD




function scaredFish(fish) {
    //check square in front of shark using x and y relative to the shark (positive x for right facing shark, negative x for left facing shark)
    //any fish in the square will run away--change direction if facing the shark, limited burst of speed
    
   

    if (sharkDirection == true){
        
        if (fish.x >= shark.x && fish.x < (shark.x + 120) && fish.y >= (shark.y - 120) && fish.y < (shark.y + 120)) {
                
                runAway(fish);
              }
   }
    if (sharkDirection == false) {
       
        {
               
            if (fish.x <= shark.x && fish.x > (shark.x - 120) && fish.y >= (shark.y - 120) && (fish.y < shark.y + 120)) {
               
                runAway(fish);
            }
        }
      }
  


}

function runAway(fish) {
    //if the fish is facing the shark, it should change direction and speed away.  if it is facing the same direction, it should just speed away.

  
    

    var i = food.indexOf(fish);

    

    if (fishDirection[i] == false && sharkDirection == true) {
     
        
        fish.changeImage("fishRight.png");
        fishDirection[i]=true;
        fish.setMoveAngle(startMoveAngle(i));
        fish.setSpeed(12);
        

    }
    

    if (fishDirection[i] == true && sharkDirection == false) {
       
        
        fish.changeImage("fishLeft.png");
        fishDirection[i]=false;
        fish.setMoveAngle(startMoveAngle(i));
        fish.setSpeed(12);
      
    }

    if (fishDirection[i] == false && sharkDirection == false) {
       
        fish.setSpeed(12);
        //  
    }

    if (fishDirection[i] == true && sharkDirection == true) {
        
        fish.setSpeed(12);
    }

}

=======
function checkCollisionShark() {
    for (var i = 0; i < food.length; i++) {
        var distance = food[i].distanceTo(tShark);
        if (distance < 200) {
            runAway(i);
        }
       
    }

}



function scaredFish() {
    //check square in front of shark using x and y relative to the shark (positive x for right facing shark, negative x for left facing shark)
    //any fish in the square will run away--change direction if facing the shark, limited burst of speed

    if (sharkDirection == true){
        for (i = 0; i < food.length; i++)
            if (fish[i].x >= tShark.x && fish[i].x < tShark.x + 20 && fish[i].y >= tShark.x - 20 && fish[i].y < tShark.x + 20){
            runAway(i);
        }
   

    //if shark is facing left
    // for loop through fish array
    //  (if fish[i].x <= tShark.x && fish[i].x > tShark.x - 20 && fish[i].y => tShark.x - 20 && fish[i].y < tShark.x + 20)
    //    runAway(i)
}

}

function runAway(i) {

    
    

    //if (food[i].img.src == "fishLeft.png" && sharkDirection == true) {
     //   food[i].tFood.setMoveAngle(food[i].tFood.moveAngle - 180);
      //  speed burst
     // change sprite  
        
    //}  
    //else if (food[i].img.src == "fishLeft.png" && sharkDirection == false) {
      //  burst of speed;
      //  
    //}


    //else if {food[i].img.src == "fishRight.png" && sharkDirection == false {
        //   food[i].tFood.setMoveAngle(food[i].tFood.moveAngle - 180);
    // speed burst
    //change sprite

    //else if (food[i].img.src == "fishRight.png" && sharkDirection == true) {
      //  burst of speed;


}

>>>>>>> a6169d276836d69f244d60d3034925ca82f3b458




function update() {
    game.clear();
    shark.checkKeys();
<<<<<<< HEAD
    
    
=======
    checkCollisionShark();
>>>>>>> a6169d276836d69f244d60d3034925ca82f3b458

    for (var i = 0; i < food.length; i++) {
        food[i].update();
        checkCollisionFood(food[i]);
        scaredFish(food[i]);
        if (food[i].speed > 10){
            food[i].speed - .25;
            }
     }

    for (var i = 0; i< trash.length; i++) {
        trash[i].update();
        checkCollisionTrash(trash[i]);
    }

<<<<<<< HEAD
  
=======
>>>>>>> a6169d276836d69f244d60d3034925ca82f3b458

    score = score - .1;
    energyBar();
    shark.update();

}