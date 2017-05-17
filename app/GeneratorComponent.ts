import {Component} from '@angular/core';


@Component({
selector:'meme-GeneratorComponent',
templateUrl: `./HTML/Generator.html`
})
export class MemeGenerator{
public img : Image; 

    first = "abcd";

changeImage($event)
{


}

     firebuttonClicked($event)
    {
    console.log(this);
    }
      ngAfterViewInit()  { 
        
      this.img = new Image();
        // this.img = new Image();
         this.img.src='./Images/sriram1.jpg';

       var canv = document.getElementById("myCanvas");
        var ctx=  canv.getContext('2d'); 

this.img.onload = function() {
    
    ctx.drawImage(this.img,0,0);
    //refill text
    ctx.fillStyle = "blue";
    ctx.fillText("Jai shriram",60,100);

}
    //refill text
    ctx.fillStyle = "blue";
   // ctx.fillText("Jai shriram",40,80);
        console.log("ngAfterViewInit");    
   }
}
 