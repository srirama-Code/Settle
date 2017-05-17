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

    drawtext($event) {

console.log(this);
console.log($event);
    }

    firebuttonClicked($event) {
        console.log(this);
    }
    ngAfterViewInit() {
        var img = new Image();
     //   img.src = './Images/sriram1.jpg';
        var canv = document.getElementById("myCanvas");
        var ctx = canv.getContext('2d');
        img.onload = function () {

            ctx.drawImage(img, 0, 0);
            //refill text
            ctx.fillStyle = "blue";
            ctx.fillText("Jai shriram", 60, 100);

        }
        //refill text
        ctx.fillStyle = "blue";
        // ctx.fillText("Jai shriram",40,80);
        console.log("ngAfterViewInit");
    }
}
