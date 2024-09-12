class Player {
    myCanvas = document.getElementById("myCanvas");
    ctx = myCanvas.getContext("2d");

    constructor(x,y,largo,alto,vida,direccion,velocidad,puntos) {
        this.x = x
        this.y = y
        this.largo = largo
        this.alto = alto
        this.vida = vida
        this.direccion = direccion
        this.velocidad = velocidad
        this.puntos = puntos

    }

  
  
   
    pintarJugador(){
        ctx.fillStyle = "yellow";
        ctx.fillRect(jugador.x,jugador.y,jugador.largo,jugador.alto)
       
    }
    moverJugador(){

        ctx.fillStyle = "Black";
        ctx.fillRect(jugador.x,jugador.y,jugador.largo,jugador.alto)
        
       switch(jugador.direccion){
        case 0:
            jugador.y-=jugador.velocidad;
        break;
        case 1:
         jugador.y+=jugador.velocidad;

        break;
        case 2:
            jugador.x+=jugador.velocidad;

        break;
        case 3:
            jugador.x-=jugador.velocidad;

        break;
       }

     
    }
}
  
  window.Player = Player;
  