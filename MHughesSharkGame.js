var game;
var shark;
var foodMax = 5;
var trashMax = 10;
var food = new Array(foodMax);
var trash = new Array(trashMax);
var score = 20;

function init() {
    
    game = new Scene();
    shark = new Shark();
    for (var i = 0; i < foodMax; i++) {
        food[i] = new Food();
          
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
        }
        if (keysDown[K_LEFT]) {
            this.changeXby(-5)
            tShark.changeImage("sharkLeft.png");
        }
        if (keysDown[K_UP]) {
            this.changeYby(-5);
        }
        if (keysDown[K_DOWN]) {
            this.changeYby(5);
        }
    }
    return tShark;
}

function Food() {
    tFood = new Sprite(game, "fishOneRight.png", 100, 50);
    var temp = startPlace();
    tFood.setPosition(temp.x, temp.y);
    tFood.setMoveAngle(startMoveAngle());
    tFood.setSpeed(startSpeed());

    return tFood;
}

function energyBar() {
    game.beginPath();
    game.rect(0, 290, parseInt(score), 10);
    game.fillStyle = "red";
    game.fill();
    
}

function checkCollisionFood(fish) {
    var distance = shark.distanceTo(fish);
    if (distance < 75) {
        score += 10;
        temp = startPlace();
        fish.setPosition(temp.x, temp.y);
        fish.setMoveAngle(startMoveAngle());

    }

}
//function fishOneRight() {
   // tFish = new Sprite(game, "fishOneRight", 100, 50);
    //var x = Math.round(Math.random() * game.width);
    //var y = Math.round(Math.random() * game.height);
   // var angle = Math.round()

//}

function startPlace() {
    var x = Math.round(Math.random() * game.width);
    var y = Math.round(Math.random() * game.height);
     console.log(x, y);
    
     return {"x":x, "y":y};
    
}

function startMoveAngle() {
    var angle = Math.round(Math.random() * 180);
    return angle;
}

function startSpeed() {
    var startSpeed = Math.round(Math.random() * 10);
    return startSpeed;
}

//function isFood() { }

function update() {
    game.clear();
    shark.checkKeys();
    for (i = 0; i < food.length; i++) {
        food[i].update();
        checkCollisionFood(food[i]);
     }
    score = score - .1;
    energyBar();
    shark.update();

}