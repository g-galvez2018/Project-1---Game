//Draw all the objects
const draw = ()=>{
   drawBackground();   
   drawEnemies();
   drawShip();
   drawInvaderBullets();
   drawPlayerBullets();   
   updateScore();
   updateLives();
}

loop();

//Main loop for the game
function loop () {

   if (!gameover){
   
   updateBackground();
   updateEnemies();   
   updateCollisions();
   updateShip();  
   ctx.clearRect(0,0, 900, 840);
   draw();
   window.requestAnimationFrame(function(){
   // sets up a recursive loop (function calls itself multiple times)
   loop();    
  })
 }
 else {
    done();
   }
}

//Update score on canvas - top left
function updateScore () {
   ctx.font = "20px Arial";
   ctx.fillStyle = "Green";
   ctx.fillText(`Score: ${score}`, 20, 20)
}

//Update Lives on canvas - top right
function updateLives () {
   ctx.font = "20px Arial";
   ctx.fillStyle = "Green";
   ctx.fillText(`Lives: ${lives}`, 500, 20)
}

function updateGameStatus(){
   ctx.font = "40px Arial";
   ctx.fillStyle = "red";
   ctx.fillText(gameStatus, 190, 280)
}

function done() {
	//Shows lives as 0. Line is needed here or else loop stops and says lives is still 1.
   
   ctx.clearRect(0,0, 900, 840);
   lives = 0;
   updateLives();
   updateScore();
   updateGameStatus();
   clearInterval(loop); 
	
}
  

   


