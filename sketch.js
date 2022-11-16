// Daniel Shiffman
// http://youtube.com/thecodingtrain
// https://thecodingtrain.com/CodingChallenges/111-animated-sprite.html

// Horse Spritesheet from
// https://opengameart.org/content/2d-platformer-art-assets-from-horse-of-spring

// Animated Sprite
// https://youtu.be/3noMeuufLZY

class Bear {
    constructor(animation, x, y, speed) {

      this.x = x;
      this.y = y;
      this.animation = animation;
      this.w = this.animation[0].width;
      this.len = this.animation.length;
      this.speed = speed;
      this.index = 0;

    }
  
    show() {
      let index = floor(this.index) % this.len;
      image(this.animation[index], this.x, this.y);
    }
    //
    animate() {
      this.index += this.speed; 
    } 


    move(){
        if (keyIsPressed){
            if (keyCode == LEFT_ARROW){
             this.x-=4;
              
            }else if(keyCode == RIGHT_ARROW){
                this.x+=4;
        
              
            }else if(keyCode == UP_ARROW){
                this.y-=4;
         
            }else if(keyCode == DOWN_ARROW){
                this.y+=4;
        
            }
          }
    }


  }


let x = 100;
let y = 100;
let target;
let atlas;

let animation = [];
let bear = [];

function preload() {

        atlas = loadJSON('./santa/santa_atlas.json');
        target = loadImage('./santa/santa.png');
        atlas1 = loadJSON('./santadown/santa_down_atlas.json');
        target1 = loadImage('./santadown/santa_down.png');


}


function setup() {
  createCanvas(640, 480);
  let frames = atlas.frames;
  for (let i = 0; i < frames.length; i++) {
    let pos = frames[i].frame;
    let img = target.get(pos.x, pos.y, pos.w, pos.h);
    animation.push(img);
  }



  bear[0] = new Bear(animation, x, y, 0.1);

}

function draw() {
  background(255);



    bear[0].show();
    bear[0].animate();
    bear[0].move();



}

console.log(animation)