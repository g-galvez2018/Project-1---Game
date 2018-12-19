  const bground = "../Images/bgGame.png";
  let bgX = 0;
  let bgY = 0;
  let bg1X = 0;
  let bg1Y = 600;

  const bg = new Image();
  const bg1 = new Image();

  bg.src = bground;
  bg1.src = bground;

  function updateBackground(){
    
    bgY+=10;
    bg1Y-=10;
    if (bgY>=10){bgY=-150}
    if(bg1Y<=610){bg1Y=600}
    
  }

  function drawBackground(){
    ctx.drawImage(bg, bgX, bgY, 600,800)
    ctx.drawImage(bg1, bg1X, bg1Y, 600, 800)
  }

