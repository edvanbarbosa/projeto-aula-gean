import Player from "./obj/player.js";
const canvas = document.getElementById("canvas")
const ctx = canvas.getContext('2d');

const Player1 = new Player(ctx,0,0,"WASD")

addEventListener('keyup',(event)=>{
    Player1.mover(event.key)
})
const animate = () =>{
    ctx.clearRect(0,0,canvas.clientWidth, canvas.height)
    Player1.desenhar();
    requestAnimationFrame(animate);
}

animate()