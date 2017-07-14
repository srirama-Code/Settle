import { Component } from '@angular/core';
import { HttpModule } from '@angular/http'; 
import { Observable } from 'rxjs/Observable';
import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Component ({
selector:`<Generate`,
templateUrl:`./HTML/Generate.html`
})
export class Generate{



constructor(public http:Http){
  

}

 
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
   
}


ngAfterViewInit(){
  console.log(this.http);
document.getElementById('download').addEventListener('click', function() {
   Generate.downloadImage(this, 'myCanvas', 'test.png'); 
}, false);
}


}