class Box extends BaseClass{
    constructor(x,y){
        super(x,y,30,40);
        
        this.Visibility = 255;
        
    
    }
    display(){

       

        console.log(this.body.speed);

        if (this.body.speed < 3){
            fill("green")
           super.display();
          }
          else {
            World.remove(world,this.body);
            push()
            this.Visibility = this.Visibility - 5;
            tint(255,this.Visibility);
            rect(this.body.position.x,this.body.position.y,30,40);
            pop()
          }
        
    }
}