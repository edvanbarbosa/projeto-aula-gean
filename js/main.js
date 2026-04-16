import DropPoint from "./obj/dropPoint.js";
import Player from "./obj/player.js";
const canvas = document.getElementById("canvas")
const ctx = canvas.getContext('2d');

const Player1 = new Player(ctx,0,0,"WASD")


addEventListener('keydown',(event)=>{
    Player1.mover(event.key)
    
})
const dropPoints = [];

const generateDropPoint = ()=>{
    const randomNumberX = Math.random()*canvas.width;
    const randomNumberY = Math.random()*canvas.height;
    const DropPointObject = new DropPoint(ctx, randomNumberX, randomNumberY)

    dropPoints.push(DropPointObject)
}
setInterval(generateDropPoint,1000)



const animate = () =>{
    ctx.clearRect(0,0,canvas.clientWidth, canvas.height)
    Player1.desenhar();
    Player1.controlarPosicao(0,canvas.width,0,canvas.height);

    dropPoints.forEach(dropPoint =>dropPoint.desenhar())
    
    requestAnimationFrame(animate);
}

animate()