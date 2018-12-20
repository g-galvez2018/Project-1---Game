const src = "Images/enemy.png"
let dir = 1;          //Controls direction of enemy (go left or right)
let speed = .1        //Controls how fast enemies move on x axis
let enemies = [];     //Initiates enemies array
let leftbound = 20;   //Wall on left side of screen
let rightbound = 550; //Wall on right side of screen
let enemyBullets = [];//Bullets array
let enemyBulletsCounter = 0; //Count enemy's bullets


//Fill array of bullets and place at y axis outside of canvas
for (var i=0; i <10; i++){
  enemyBullets[i] = new Bullet(enemyBulletSrc, 0, 610, 8)
}
let shooter;
makeEnemies(); // Create enemies array

//Contructor for enemy
function Enemy(src, startX, startY,canShoot) {
  this.img = new Image();
  this.img.src = src;
  this.x = startX;
  this.y = startY;
  //this.power = 1;
  this.alive = true;
  this.canShoot = canShoot; 
}
//Function that moves enemies from side to side and down
//Every time that is goes down, speed increases
function updateEnemies(){
  let max;
	let min;
  let moveY = 0;

  //check to see if the invaders have won
	//let gameover = false;
	for (i = 0; i < enemies.length; i++) {
		if (enemies[i].alive && enemies[i].y > 550) { 
      gameStatus = "GAME OVER"     
			gameover = true;
		}
  }
  
  if (!gameover){
  
  for (i = 0; i < enemies.length; i++) {
		if (enemies[i].alive) {
			max = enemies[i];
      min = enemies[i];
      break;			
		}	
  }  
  //Get enemy object that is the closest to the right wall
  for (i = 0; i < enemies.length; i++) {
    if (enemies[i].alive && enemies[i].x > max.x) {
      max = enemies[i];
    }	
  }
  //Get the enemy that's closes to the left wall
  for (i = 0; i < enemies.length; i++) {
    if (enemies[i].alive && enemies[i].x < min.x) {
      min = enemies[i];
    }
  }  
  //Once an enemy gets to the boundary reverses direction and moves down
  if (min.x < leftbound || max.x > rightbound) {
    dir *= -1;
    moveY = 50;
    speed += .1;
  }
  //Adjusts the position of each enemy
  for (i = 0; i < enemies.length; i++) {
    enemies[i].x += dir * speed; 
    enemies[i].y += moveY;    
  }  
  }
  else{done();}
}
//draws the enemies on the screen
function drawEnemies() {   
	for (i = 0; i < enemies.length; i++) {
		if (enemies[i].alive) {
		ctx.drawImage(enemies[i].img , enemies[i].x , enemies[i].y);
		}
  }
    
}
//Creates an array of enemies with their starting position
function makeEnemies() {	
	num_rows = 5;
	for (r = 0; r < num_rows; r++) {
		for (i = 0; i < 7; i++) {			
				enemies.push(new Enemy(src, i * 80 + 30, (r * 50) + 50, false));	
			} 
    }
    updateShooters();    
}	

//Select enemies that can shoot
function updateShooters() {
   let myNewEnemies = enemies.filter(function(enemy){
     return (enemy.alive ===true)
   })
   if (myNewEnemies.length === 0){
     gameStatus = "YOU WON"
   }
   for (i=0, j=1; i<=myNewEnemies.length-1; i++){
    if (enemies[i].alive ===true && j<12){
      enemies[i].canShoot = true;
      j++;
    }    
  }
}



setInterval(function (){
	//select enemy at random that can shoot
	shooter = Math.floor((Math.random()*30));
   if (enemies[shooter].canShoot && enemies[shooter].alive){
    shootInvaderBullet(enemyBullets[enemyBulletsCounter],shooter)
}}, 500);


function shootInvaderBullet(bullet, position){
	//makes the enemy at index position in the array shoot a bullet
  bullet.alive = true;  
	bullet.drawx = enemies[position].x + 25;
	bullet.drawy = enemies[position].y + 25;
	enemyBulletsCounter ++;
	if (enemyBulletsCounter >= enemyBullets.length - 1){
		enemyBulletsCounter = 0;
	}
}






