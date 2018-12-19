//Ship Image
const shipSrc = "../Images/spaceship.png";

function Ship(startX, startY){
	this.img = new Image();
	this.img.src = shipSrc;
	this.x = startX;
	this.y = startY;
	this.bullets = [];
	this.lives = 3;
	//Counter to check position in bullet array
	this.currBullet = 0;
	//Array of 20 bullets
	for (var i = 0; i < 20; i++){
    this.bullets[i] = new Bullet(shipBulletSrc, 0, 610, 3);
	}
	//Boolean to check if tank is allowed to shoot
	this.shooting;
}

// Handle keyboard controls
let keyPressed = [];

//Places keycode in keyPressed if it is pressed
addEventListener("keydown", function (e) {
	keyPressed[e.keyCode] = true;
}, false);

//Removes the keycode from keyPressed when it is released
addEventListener("keyup", function (e) {
	delete keyPressed[e.keyCode];
}, false);

//Create Player
let player = new Ship(canvas.width/2 -20, 560);

//move Ship
var updateShip = function() {
	//Left
	if (37 in keyPressed) { 
		if( (player.x - 2) > 0 ){
			player.x -= 2;
		}
	}
	//Right
	if (39 in keyPressed) { 
		if( (player.x + 2) + 39 < canvas.width ){
			player.x += 2;
		}
  }

  //Player is shooting, cycle through array of tank bullets
	if (32 in keyPressed && player.shooting == false) {
		player.shooting = true;
		player.shoot(player.bullets[player.currBullet])
		playMus();
		player.currBullet ++;
		if (player.currBullet >= player.bullets.length){
			player.currBullet = 0;
		}
	//Prevents player from holding space, only 1 bullet fired for each press
	} else if (!(32 in keyPressed)) {
		player.shooting = false;
	}
}

//Bullet is set to true, given x and y of tank cannon 
Ship.prototype.shoot = function (bullet) {
	bullet.alive = true;
  bullet.drawx = player.x + 18;  
	bullet.drawy= player.y;
}

//Draw Player
const drawShip = ()=>{
  ctx.drawImage(player.img, player.x, player.y)
}