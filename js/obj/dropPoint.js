export default class DropPoint{
    constructor(ctx,x,y){
        this.ctx = ctx;
        this.x = x;
        this.y = y;
    }
    desenhar(){
        this.ctx.fillStyle = "#e7e055"
        this.ctx.fillRect(this.x,this.y,15,15)
    }
}