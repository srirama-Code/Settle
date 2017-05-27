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
 
    ngAfterViewInit() {
        var img = new Image();
        img.src = './Images/sriram1.png';

       
        img.onload = function () {
        var canv = document.getElementById("myCanvas");
        var ctx = canv.getContext("2d");
var ac =Number(canv.clientHeight);
var db = Number(canv.clientWidth);
var ir = document.getElementById("am");
  ctx.drawImage(img,0,0,img.naturalWidth,img.naturalHeight,0,0,400,400);
            ctx.fillStyle = "blue";
            console.log('jai shriram');  
        }
    }

