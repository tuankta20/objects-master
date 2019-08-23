
function Hero(image, top, left, size){
  this.image = image;
  this.top = top;
  this.left = left;
  this.size = size;

  this.getHeroElement = function(){
    return '<img width="'+ this.size + '"' +
      ' height="'+ this.size + '"' +
      ' src="' + this.image +'"' +
      ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />';
  }

  this.moveRight = function(){
    this.left += 25;
    console.log('ok: ' + this.left);
  }
  this.moveDown = function(){
    this.top += 25;
    console.log('ok: ' + this.left);
  }
}

var hero = new Hero('download.jpeg', 15, 23, 100);

function start(){
  if(hero.left < window.innerWidth - hero.size){
    hero.moveRight();
  }
  document.getElementById('game').innerHTML = hero.getHeroElement();
  setTimeout(start, 500/5)
}
start();
function start1(){
  if(hero.top < window.innerHeight - hero.size){
    hero.moveDown();
  }
  document.getElementById('game').innerHTML = hero.getHeroElement();
  setTimeout(start1, 500/3)
}
start1();
