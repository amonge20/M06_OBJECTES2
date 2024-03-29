//Importem el fitxer pilota
import { Pilota } from './pilota.js';
//Es creen les següents variables
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;
const numPilotes = 20;
const pilotes = creaPilotes(numPilotes);
//Funcio per escollir les pilotes següents de forma aleatoria
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
//Funcio per tenir un color cadascuna de les pilotes
function randomRGB() {
  return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}
//Funcio per crear les pilotes
function creaPilotes(numPilotes) {
  const pilotes = [];
  for (let i = 0; i < numPilotes; i++) {
    const x = random(10, width - 10);
    const y = random(10, height - 10);
    const velX = random(-4, 4);
    const velY = random(-4, 4);
    const color = randomRGB();
    const mida = random(10, 20);
    pilotes.push(new Pilota(x, y, velX, velY, color, mida));
  }
  return pilotes;
}
//Funcio en que les pilotes colisionin
function comprovaColisions(pilotes) {
  for (let i = 0; i < pilotes.length - 1; i++) {
    for (let j = i + 1; j < pilotes.length; j++) {
      const distanciaX = Math.abs(pilotes[i].x - pilotes[j].x);
      const distanciaY = Math.abs(pilotes[i].y - pilotes[j].y);
      const distanciaTotal = Math.sqrt(distanciaX * distanciaX + distanciaY * distanciaY);
      //Distancia per a que es colisionin
      if (distanciaTotal < pilotes[i].mida + pilotes[j].mida) {
        const velXAux = pilotes[i].velX;
        const velYAux = pilotes[i].velY;
        pilotes[i].velX = pilotes[j].velX;
        pilotes[i].velY = pilotes[j].velY;
        pilotes[j].velX = velXAux;
        pilotes[j].velY = velYAux;
      }
    }
  }
}
//Funcio per a un bucle
function loop() {
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, width, height);

  comprovaColisions(pilotes);

  for (let pilota of pilotes) {
    pilota.dibuixa(ctx);
    pilota.mou(width, height);
  }

  requestAnimationFrame(loop);
}

loop();