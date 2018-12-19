function updateCollisions() {
	//check for a collision between the tanks bullet and an alien	
	for (i=0; i < player.bullets.length; i++) {
		for(j=0; j < enemies.length; j++) {
			if (enemies[j].alive && player.bullets[i].alive && player.bullets[i].drawy < enemies[j].y + 33 && player.bullets[i].drawy > enemies[j].y && player.bullets[i].drawx > enemies[j].x && player.bullets[i].drawx < enemies[j].x + 43) {
				// if the bullet is in an alien space
				// kill the alien! and make sure the bullet cannot keep killing aliens
				enemies[j].alive = false;
				player.bullets[i].alive = false;	
				score += 10;
				invaders--;	
				playMus2();	
				let myNewEnemies = enemies.filter(function(enemy){
					return (enemy.alive ===true)
				})
				if (myNewEnemies.length <= 0){
					gameStatus = "YOU WON!!!!"					
					gameover = true;					
				}		
			}
		}
  }


for (i=0; i < enemyBullets.length; i++) {
		if (enemyBullets[i].alive && enemyBullets[i].drawy < player.y + 25  
				&& enemyBullets[i].drawy + 14 > player.y && enemyBullets[i].drawx > player.x 
				&& enemyBullets[i].drawx < player.x + 40) 
		{
				enemyBullets[i].alive = false;
				lives -= 1;

				if (lives <= 0){	
					gameStatus = "GAME OVER"				
					gameover = true;
				}		
		}
	}	
}
