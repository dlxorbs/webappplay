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
      image( this.animation[index] , this.x , this.y);
 
    }

    animate() {
      this.index += this.speed; 
    } 


    // move(){
    //     if (keyIsPressed){
    //         if (keyCode == LEFT_ARROW){
    //          this.x-=4;
              
    //         }else if(keyCode == RIGHT_ARROW){
    //             this.x+=4;
        
              
    //         }else if(keyCode == UP_ARROW){
    //             this.y-=4;
         
    //         }else if(keyCode == DOWN_ARROW){
    //             this.y+=4;
        
    //         }
    //       }
    // }


  }
  class Down {
    constructor(Danimation, x, y, speed) {

      this.x = x;
      this.y = y;
      this.Danimation = Danimation;
      this.w = this.Danimation[0].width;
      this.len = this.Danimation.length;
      this.speed = speed;
      this.index = 0;

      console.log(this.w)
    }
  
    show(){
      let index = floor(this.index) % this.len;
      image(this.Danimation[index], this.x, this.y);
      
    }

    animate() {
      this.index += this.speed; 
    } 


    // move(){
    //     if (keyIsPressed){
    //         if (keyCode == LEFT_ARROW){
    //          this.x-=4;
              
    //         }else if(keyCode == RIGHT_ARROW){
    //             this.x+=4;
        
              
    //         }else if(keyCode == UP_ARROW){
    //             this.y-=4;
         
    //         }else if(keyCode == DOWN_ARROW){
    //             this.y+=4;
        
    //         }
    //       }
    // }


  }
  class Left {
    constructor(Lanimation, x, y, speed) {

      this.x = x;
      this.y = y;
      this.Lanimation = Lanimation;
      this.w = this.Lanimation[0].width;
      this.len = this.Lanimation.length;
      this.speed = speed;
      this.index = 0;

      console.log(this.w)
    }
  
    show(){
      let index = floor(this.index) % this.len;
      image(this.Lanimation[index], this.x, this.y);
      
    }

    animate() {
      this.index += this.speed; 
    } 


    // move(){
    //     if (keyIsPressed){
    //         if (keyCode == LEFT_ARROW){
    //          this.x-=4;
              
    //         }else if(keyCode == RIGHT_ARROW){
    //             this.x+=4;
        
              
    //         }else if(keyCode == UP_ARROW){
    //             this.y-=4;
         
    //         }else if(keyCode == DOWN_ARROW){
    //             this.y+=4;
        
    //         }
    //       }
    // }


  }

  class Right {
    constructor(Ranimation, x, y, speed) {

      this.x = x;
      this.y = y;
      this.Ranimation = Ranimation;
      this.w = this.Ranimation[0].width;
      this.len = this.Ranimation.length;
      this.speed = speed;
      this.index = 0;

      console.log(this.w)
    }
  
    show(){
      let index = floor(this.index) % this.len;
      image(this.Ranimation[index], this.x, this.y);
      
    }

    animate() {
      this.index += this.speed; 
    } 




  }


let x =0;
let y =0;
let target;
let atlas;
let Dtarget;
let Datlas;
let Ltarget;
let Latlas;
let Rtarget;
let Ratlas;


let animation = [];
let Danimation = [];
let Lanimation = [];
let Ranimation = [];


let bear = [];
let down = [];
let left = [];
let right = [];
function preload() {

        atlas = loadJSON('./santa/santa_atlas.json');
        target = loadImage('./santa/santa.png');
        Datlas = loadJSON('./santadown/santa_down_atlas.json');
        Dtarget = loadImage('./santadown/santa_down.png');
        Latlas = loadJSON('./santa_left/santa_left_atlas.json');
        Ltarget = loadImage('./santa_left/santa_left.png');
        Ratlas = loadJSON('./santa_right/santa_right_atlas.json');
        Rtarget = loadImage('./santa_right/santa_right.png');

}


function setup() {
  createCanvas(640, 480);
  let frames = atlas.frames;
  for (let i = 0; i < frames.length; i++) {
    let pos = frames[i].frame;
    let img = target.get(pos.x, pos.y, pos.w, pos.h);
    animation.push(img);
  }


  let Dframes = Datlas.frames;
  for (let i = 0; i < Dframes.length; i++) {
    let Dpos = Dframes[i].frame;
    let Dimg = Dtarget.get(Dpos.x, Dpos.y, Dpos.w, Dpos.h);
    Danimation.push(Dimg);
  }

  let Lframes = Latlas.frames;
  for (let i = 0; i < Lframes.length; i++) {
    let Lpos = Lframes[i].frame;
    let Limg = Ltarget.get(Lpos.x, Lpos.y, Lpos.w, Lpos.h);
    Lanimation.push(Limg);
  }

  let Rframes = Ratlas.frames;
  for (let i = 0; i < Rframes.length; i++) {
    let Rpos = Rframes[i].frame;
    let Rimg = Rtarget.get(Rpos.x, Rpos.y, Rpos.w, Rpos.h);
    Ranimation.push(Rimg);
  }


  bear[0] = new Bear(animation,x,y, 0.1);
  down[0] = new Down(Danimation, x ,y, 0.1);
  left[0] = new Left(Lanimation, x ,y, 0.1);
  right[0] = new Right(Ranimation, x ,y, 0.1);
}

function draw() {
  background(0, 100, 150);

  if (keyIsPressed){


      if (keyCode == LEFT_ARROW){
        image.x-=4;
         
        left[0].show();
        left[0].animate();
  
       }else if(keyCode == RIGHT_ARROW){
        image.x+=4;
        right[0].show();
        right[0].animate();
         
       }else if(keyCode == UP_ARROW){
        image.y-=4;
    
       }else if(keyCode == DOWN_ARROW){
        image.y+=4;
        down[0].show();
        down[0].animate();
  
       }


  }else{
      bear[0].show();
      bear[0].animate();
  }
    

  

  if (keyIsPressed){
    
  }
      
    // rect(100, 200, 200, 140)
    // color(255,255,0)
}

console.log(down)
