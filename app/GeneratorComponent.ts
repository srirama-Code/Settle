import { Component } from '@angular/core';
import { ViewChild } from '@angular/core';

@Component({
    selector: 'meme-GeneratorComponent',
    templateUrl: `./HTML/Generator.html`
})
export class MemeGenerator {
    first = "abcd";
    changeImage($event) {
    }

    drawTopText($event){

console.log($event.target.value);

    }
 
    ngAfterViewInit() {
        var img = new Image();
        img.src = './Images/sriram1.png';
        img.onload = function () {
        var canv = document.getElementById("myCanvas");
        var ctx = canv.getContext("2d");
<<<<<<< HEAD
var ac =Number(canv.clientHeight);
var db = Number(canv.clientWidth);
var ir = document.getElementById("am");
  ctx.drawImage(img,0,0,img.naturalWidth,img.naturalHeight,0,0,400,400);
            ctx.fillStyle = "blue";
            console.log('jai shriram');  
=======
        var ac =Number(canv.clientHeight);
        var db = Number(canv.clientWidth);
        var ir = document.getElementById("am");
        ctx.drawImage(img,0,0,463,352,0,0,400,400);
        ctx.fillStyle = "blue";
        console.log('jai shriram');  
>>>>>>> 19d512913fd0fe29b52bdf391bd284fb14c3d2df
        }
    }

