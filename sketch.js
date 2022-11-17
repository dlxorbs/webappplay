        // 용수철 시뮬레이션 상수들
        let M = 1,  // Mass(질량)
        K = 1.8,  // 용수철(spring) 상수
        D = 0.62, // Damping(감쇠)
        Sy = 0,
        Sx = 0,
        Ex = 0,
        Ey = 0, 
        Ry = (Sy + Ey)/2,
        Rx = (Sx +Ex)/2   
        psx = Rx,
        psy = Ry ;
    
        let springHeight = 24,
        maxHeighty = 400,
        minHeighty = 0,
        maxHeightx = 600,
        minHeightx = 0,
        over = false,
        move = false;
        

        let ballx,
        bally;



class Line {
    constructor(Sx ,Sy,psx ,psy, Ex ,Ey){
        this.Sx = Sx;
        this.Sy = Sy; 
        this.Ex = Ex; 
        this.Ey = Ey; 
        this.psx = psx; 
        this.psy = psy;
        this.vsx = 0
        this.asx = 0
        this.fx = 0
        this.vsy = 0
        this.asy = 0
        this.fy = 0
    }

    updateSpring() {
        // 용수철(spring) 위치 업데이트
        if ( !move ) {
          this.fy = -K * ( psy - Ry ); // f=-ky
          this.asy = this.fy / M;          // 가속도 설정, f=ma == a=f/m
          this.vsy = D * (this.vsy + this.asy);  // 속도 설정
          this.psy = psy + this.vsy;        // 업데이트된 위치
          
          this.fx = -K * ( this.psx - Rx ); // f=-ky
          this.asx = this.fx / M;          // 가속도 설정, f=ma == a=f/m
          this.vsx = D * (this.vsx + this.asx);  // 속도 설정
          this.psx = this.psx + this.vsx;        // 업데이트된 위치
        }
        
        //0.1로 줄어들면 속도 0
        if (abs(this.vsy) < 0.1) {
          this.vsx = 0.0;
        }
        if (abs(this.vsx) < 0.1) {
          this.vsx = 0.0;
        }
      
      
        // 마우스가 상단 막대기 위에 있는지 여부 테스트
        if (24 > abs(sqrt((ballx-mouseX)**2+(mouseY-bally)**2))){
          over = true;
        } else {
          over = false;
        }
        
        
        // 상단 막대기의 위치 설정 및 제한
        if (move) {
          psx = mouseY - springHeight / 2;
          psy = constrain(this.psy, minHeight, maxHeight);
        }
        
        if (move) {
          psx = mouseX - springHeight / 2;
          psx = constrain(this.psx, minHeightx, maxHeightx);
        }
      }
      


    line(){
        bezier( this.Sx ,this.Sy, this.psx, this.psy, this.Ex ,this.Ey);
        strokeWeight(20);
    }
        

}


let line = []
function setup() {
    createCanvas(600, 400);
    rectMode(CORNERS);
    noStroke();
    line[0] = new Line(0,0, psx , psy , 600,400);
}
function draw() {
    ballx = mouseY*(width/height);
    bally = mouseX*(height/width);
    background(102);

    ellipse(Sx, Sy, 20,20);
    ellipse(Ex, Ey, 20,20);
    line[0].updateSpring();
    line[0].line();

    if (over || move) {
        fill(255);
      } else {
        fill(204);
      }
    

    
    ellipse(ballx, bally, 20,20);
    ellipse(mouseX, mouseY, 20,20);
    // ellipse(ballx, bally, 20,20);
  }

  console.log()