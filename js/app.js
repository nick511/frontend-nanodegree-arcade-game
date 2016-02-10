var Canvas = function() {};
Canvas.WIDTH = 500;
Canvas.HEIGHT = 600;

var Enemy = function() {
    this.sprite = 'images/enemy-bug.png';
    
    this.speed = 50 + Math.floor(Math.random()*100);
    this.x = 0;
    this.y = 0;
    this.reset(true);
};

Enemy.prototype.START_X = -100;
Enemy.prototype.ROW_START_Y = 55;
Enemy.prototype.ROW_HIGHT = 85;
Enemy.prototype.ROW_COUNT = 3;

Enemy.prototype.reset = function(randomX) {
    this.x = (randomX) ? this.getStartPos() : this.START_X;
    this.y = this.getRow();
};

Enemy.prototype.getRow = function() {
    return this.ROW_START_Y + this.ROW_HIGHT * Math.floor(Math.random() * this.ROW_COUNT);
};

Enemy.prototype.getStartPos = function() {
    return this.START_X + Math.floor(Math.random() * Canvas.WIDTH);
};

Enemy.prototype.update = function(dt) {
    this.x += dt * this.speed;
    if (this.x > Canvas.WIDTH) {
        this.reset();
    }
};

Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


var Player = function(){
    this.sprite = 'images/char-boy.png';

    this.x = this.START_X - parseInt(this.IMG_WIDTH/2);
    this.y = this.START_Y - parseInt(this.IMG_HEIGHT/2);
};


Player.prototype.IMG_WIDTH = 101;
Player.prototype.IMG_HEIGHT = 171;
Player.prototype.START_X = 253;
Player.prototype.START_Y = 390;
Player.prototype.X_MOVEMENT = 100;
Player.prototype.Y_MOVEMENT = 85;

Player.prototype.update = function() {};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(keyCode) {
    switch(keyCode){
        case 'left':
            if (this.x - this.X_MOVEMENT > 0) this.x -= this.X_MOVEMENT;
            break;
        case 'up':
            if (this.y - this.Y_MOVEMENT > -this.Y_MOVEMENT) this.y -= this.Y_MOVEMENT;
            break;
        case 'right':
            if (this.x + this.X_MOVEMENT < Canvas.WIDTH) this.x += this.X_MOVEMENT;
            break;
        case 'down':
            if (this.y + this.Y_MOVEMENT < Canvas.HEIGHT - this.IMG_HEIGHT) this.y += this.Y_MOVEMENT;
            break;
    }
};



var allEnemies = [];
for (var i = 0; i < 5; i++){
    allEnemies.push(new Enemy());
}
var player = new Player();


document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
