import { Component } from '@angular/core';

@Component ({
selector:`<Generate`,
templateUrl:`./HTML/Generate.html`
})
export class Generate{

 
 static downloadImage= function(link :HTMLElement,canvas:string,name:string){

        
var anchr = link as HTMLAnchorElement;
var canv = document.getElementById(canvas) as HTMLCanvasElement;
  
  anchr.href = canv.toDataURL();
   anchr.download = "Jai Shriram";
   console.log("Jai Shriram");
}


ngAfterViewInit(){
document.getElementById('download').addEventListener('click', function() {
   Generate.downloadImage(this, 'myCanvas', 'test.png'); 
}, false);
}


}