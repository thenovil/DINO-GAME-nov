score = 0;
cross = ture;
 
audio = new Audio (music.mp3);
audiogo = new Audio(gameover.mp3);

setTimeout(() => {
    audio.play();
}, 1000);

document.onkeydown = function(e) {
    console.log("ket code is ", e.keyCode)
    if(e.keyCode == 38) {
        dino = document.querySelector('.dino');
        dino.classList.add('.animateDino');
        setTimeout(() => {
            dino.classList.remove('.animateDino');

        } , 700)
   }


   if(e.keyCode == 39){
    dino = document.querySelector('.dino');
    dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
    dino.styel.left = dinoX + 112 + "px";

   }

   if(e.keyCode == 37){
    dino = document.querySelector('.dino');
    dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('right'));
    dino.styel.left = dinoX + 112 + "px";

   }
}