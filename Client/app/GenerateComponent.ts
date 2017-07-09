import { Component } from '@angular/core';
import { Http, Response }          from '@angular/http';
 
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Component ({
selector:`<Generate`,
templateUrl:`./HTML/Generate.html`
})
export class Generate{
http = Http;
 
 static downloadImage= function(link :HTMLElement,canvas:string,name:string){

        
var anchr = link as HTMLAnchorElement;
var canv = document.getElementById(canvas) as HTMLCanvasElement;
  
  this.http.get('http://localhost:3000/getname').map(function(){

    console.log('requested');
  }).catch(function(){

    console.log('requested');
  });
 // anchr.href = canv.toDataURL();
   //anchr.download = "Jai Shriram";
   
   console.log("Jai Shriram");
}


ngAfterViewInit(){
document.getElementById('download').addEventListener('click', function() {
   Generate.downloadImage(this, 'myCanvas', 'test.png'); 
}, false);
}


}