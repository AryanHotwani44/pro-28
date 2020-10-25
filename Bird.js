class Bird extends BaseClass {
  constructor(x,y){
    var options = {
      isStatic:true
  }
    super(x,y,50,50);
    this.image = loadImage("pic/stone.png");
  }

  display() {
    //this.body.position.x = mouseX;
   // this.body.position.y = mouseY;
    super.display();
  }
}
