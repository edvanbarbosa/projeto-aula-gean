export default class Player{
    constructor(ctx,x,y,teclado){
        this.ctx = ctx;
        this.x  = x;
        this.y = y;
        this.teclado = teclado
    }
    definirTeclado(teclado){
        if (teclado == "WASD"){
            return {
                "w": {
                    "direction":"y",
                    "value": -50
                },
                "s": {
                    "direction":"y",
                    "value": 50
                },
                "d": {
                    "direction":"x",
                    "value": 50
                },
                "a": {
                    "direction":"x",
                    "value": -50
                }
            }
        }
        else if(teclado == "arrows"){
            return {
                "ArrowUp": {
                    "direction":"y",
                    "value": -50
                },
                "ArrowDown": {
                    "direction":"y",
                    "value": 50
                },
                "ArrowRight": {
                    "direction":"x",
                    "value": 50
                },
                "ArrowLeft": {
                    "direction":"x",
                    "value": -50
                }
            }
        }
    }
    mover(tecla){
       const tecladoDefinido = this.definirTeclado(this.teclado)
       const teclaDefinida = tecladoDefinido[tecla]
        const directionFunction = teclaDefinida.direction
        const valorDaTecla = teclaDefinida.value
       
        if(directionFunction == 'x'){
            this.x += valorDaTecla
        }
        else if(directionFunction == 'y'){
            this.y += valorDaTecla
        }
    }
    controlarPosicao(minX,maxX,minY,maxY){
        if(this.x<minX){
            this.x = maxX
        }
        else if(this.x >maxX){
            this.x = minX
        }
        if(this.y<minY){
            this.y = maxY
        }
        else if(this.y >maxY){
            this.y = minY
        }
    }
    desenhar(){
        this.ctx.fillRect(this.x,this.y,50,50)
    }
}