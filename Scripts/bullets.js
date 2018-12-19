//ship's bullet
const shipBulletSrc = "../Images/bullet.png"
//enemy's bullet
const enemyBulletSrc = "../Images/enemy-bullet.png"

function Bullet(src, startx, starty, speed){
	this.img = new Image();
	this.img.src = src;
	//X and Y to initialize bullet off screen.
	this.x = startx;
	this.y = starty;
	//drawx and drawy are used to draw initial position when bullet is fired.
	//For example when the player fires, bullet will be drawn from the tip of the tank's cannon.
	this.drawx;
	this.drawy;
	this.speed = speed;
	this.alive = false;
}

//Loop through player bullets and call drawPlayerBullet
const drawPlayerBullets = ()=>{
	for (var i = 0; i < player.bullets.length; i++){
		if (player.bullets[i].alive){
			drawPlayerBullet(player.bullets[i]);
		}
	}
}

//Draw player bullets continuously going up the screen, if it passes the top canvas edge
//bullet should no longer be active so it's alive field is set to false.
const drawPlayerBullet = (bullet) => {
	bullet.drawy -= bullet.speed;
  ctx.drawImage(bullet.img, bullet.drawx, bullet.drawy);
	if (bullet.drawy < 0){
		bullet.alive = false;
	}
}


//Loop through invader bullets and call drawInvaderBullet
var drawInvaderBullets = function(){
	for (var i = 0; i < enemyBullets.length; i++){
		if (enemyBullets[i].alive){
			drawInvaderBullet(enemyBullets[i]);
		}
	}
}

//Same as the drawPlayerBullet function except the bullets will be moving down the screen.
//Once it passes the bottom edge of the canvas, the bullet is no longer active.
var drawInvaderBullet = function(bullet){
	bullet.drawy += bullet.speed;
	ctx.drawImage(bullet.img, bullet.drawx, bullet.drawy);
	if (bullet.drawy > 600){
		bullet.alive = false;
	}
}

