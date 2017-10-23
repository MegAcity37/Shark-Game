var game;
var shark;
var foodMax = 7;
var trashMax = 5;

var sharkDirection = false;

var food = new Array(foodMax);
var trash = new Array(trashMax);
var score = 20;
var eatSound = new Sound("sharkEating.wav");

function init() {
    
    game = new Scene();
    shark = new Shark();
    for (var i = 0; i < foodMax; i++) {
        food[i] = new Food();
          
    }
    for (var i = 0; i < trashMax; i++){
        trash[i] = new Trash();
    }
    game.start();
}

function Shark() {
    tShark = new Sprite(game, "sharkLeft.png", 200, 70);
    tShark.setSpeed(0);
    
    tShark.checkKeys = function () {
        if (keysDown[K_RIGHT]) {
            this.changeXby(5)
            tShark.changeImage("sharkRight.png");
            sharkDirection = true;
        }
        if (keysDown[K_LEFT]) {
            this.changeXby(-5)
            tShark.changeImage("sharkLeft.png");
            sharkDirection = false;
        }
        if (keysDown[K_UP]) {
            this.changeYby(-5);
        }
        if (keysDown[K_DOWN]) {
            this.changeYby(5);
        }

        if (keysDown[K_SPACE] && keysDown[K_LEFT]) {
            this.changeXby(-10);
            score -= 2;
        }

        if (keysDown[K_SPACE] && keysDown[K_RIGHT]) {

            this.changeXby(10);
            score -= 2;
            }
            
        }
    
    return tShark;
}

function Food() {
    tFood = new Sprite(game, "fishOneRight.png", 100, 50);
    var temp = startPlace();
    tFood.setPosition(temp.x, temp.y);
    tFood.setMoveAngle(startMoveAngle());
    tFood.setSpeed(startSpeed(10));

    return tFood;
}



function Trash(){
    tTrash = new Sprite(game, "trashBottle.png", 150, 50);
    var temp = startPlace();
    tTrash.setPosition(temp.x, temp.y);
    tTrash.setMoveAngle(startMoveAngle());
    tTrash.setSpeed(startSpeed(5));

    return tTrash;
}

function startPlace() {
    var x = Math.round(Math.random() * game.width);
    var y = Math.round(Math.random() * game.height);
    console.log(x, y);

    return { "x": x, "y": y };

}

function startMoveAngle() {
    var angle = Math.round(Math.random() * 180);
    return angle;
}

function startSpeed(max) {
    var startSpeed = Math.round(Math.random() * max);
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
        fish.setPosition(temp.x, temp.y);
        fish.setMoveAngle(startMoveAngle());

    }

}

function checkCollisionTrash(trash) {
    var distance = shark.distanceTo(trash);
    if (distance < 75) {
        eatSound.play();
        score -= 10;
        temp = startPlace();
        trash.setPosition(temp.x, temp.y);
        trash.setMoveAngle(startMoveAngle());

    }

}

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





function update() {
    game.clear();
    shark.checkKeys();
    checkCollisionShark();

    for (var i = 0; i < food.length; i++) {
        food[i].update();
        checkCollisionFood(food[i]);
     }

    for (var i = 0; i< trash.length; i++) {
        trash[i].update();
        checkCollisionTrash(trash[i]);
    }


    score = score - .1;
    energyBar();
    shark.update();

}