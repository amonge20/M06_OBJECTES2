//Exportem la classe Pilota
export class Pilota {
    constructor(x, y, velX, velY, color, mida) {
      this.x = x;
      this.y = y;
      this.velX = velX;
      this.velY = velY;
      this.color = color;
      this.mida = mida;
    }
    //Dibuixara el canvas
    dibuixa(ctx) {
      ctx.beginPath();
      ctx.fillStyle = this.color;
      ctx.arc(this.x, this.y, this.mida, 0, 2 * Math.PI);
      ctx.fill();
    }
    //Moura cada una de les pilotes
    mou(width, height) {
      if (this.x + this.mida >= width) {
        this.velX = -this.velX;
        this.x = width - this.mida;
      }
      
      if (this.y + this.mida >= height) {
        this.velY = -this.velY;
        this.y = height - this.mida;
      }
  
      if (this.x - this.mida <= 0) {
        this.velX = -this.velX;
        this.x = this.mida;
      }
  
      if (this.y - this.mida <= 0) {
        this.velY = -this.velY;
        this.y = this.mida;
      }
  
      this.x += this.velX;
      this.y += this.velY;
    }
  }