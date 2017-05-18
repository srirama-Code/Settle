import { Component } from '@angular/core';
import { ViewChild } from '@angular/core';

@Component({
    selector: 'meme-GeneratorComponent',
    templateUrl: `./HTML/Generator.html`
})
export class MemeGenerator {

 imageWidth :number;
  imageHeight : number;
 
    first = "abcd";

    changeImage($event) {
    }

    drawtext($event) {

        console.log(this);
        console.log($event);
    }

    firebuttonClicked($event) {
        console.log(this);
    }
    ngAfterViewInit() {
        //var img= document.getElementsByTagName('img');
 
        var img = new Image();
        img.src = './Images/sriram1.png';
        var canv = document.getElementById("myCanvas");
        var ctx = canv.getContext('2d');
        this.imageHeight= img.naturalHeight;
        this.imageWidth= img.naturalWidth;
       
        img.onload = function () {
        ctx.drawImage(img,0,0,300,200);

            //refill text
            ctx.fillStyle = "blue";
            console.log('jai shriram');
            ctx.fillText("Jai shriram", 60, 100);

        }
        //refill text
        //       ctx.fillStyle = "blue";
        // ctx.fillText("Jai shriram",40,80);
        //     console.log("ngAfterViewInit");
    }

