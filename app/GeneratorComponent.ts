import { Component } from '@angular/core';
import { ViewChild } from '@angular/core';

@Component({
    selector: 'meme-GeneratorComponent',
    templateUrl: `./HTML/Generator.html`
})
export class MemeGenerator {
    first = "abcd";

    topText : string;
    bottomText : string;
    topFont: any;
    bottomFont: any;
    constructor()
    {
        this.topFont = 60;
        this.bottomFont= 60;
    }


    drawBottomText($event) {

        this.bottomText = $event.target.value;
 this.bottomFont = 60 - 2 * this.bottomText.length;
      this.clearImage();
        this.DrawCanvasImagewithText($event);
        console.log($event.target.value);
    }

    drawTopText($event) {
    this.topText = $event.target.value;
if(this.topFont>20)
{
this.topFont = 60 - 2 * this.topText.length;
}
    
        
        this.clearImage();
        this.DrawCanvasImagewithText($event);
        console.log($event.target.value);
    }

    clearImage()
    {
var canv = document.getElementById("myCanvas");
        var ctx = canv.getContext("2d");
        ctx.clearRect(0, 0, 400, 400);
    }

    ngAfterViewInit() {
        this.DrawCanvasImage();

    }

    DrawCanvasImage() {
        var img = new Image();
        img.src = './Images/success-kid.jpg';
        img.onload = function () {
            var canv = document.getElementById("myCanvas");
            var ctx = canv.getContext("2d");
            ctx.drawImage(img, 0, 0, img.naturalWidth, img.naturalHeight, 0, 0, 400, 400);

        }
    }
    DrawCanvasImagewithText(event) {
        var topFontLocal = this.topFont;
        var bottomFontLocal = this.bottomFont;
        var topTextLocal = this.topText;
        var bottomTextLocal = this.bottomText;
        var img = new Image();
        img.src = './Images/success-kid.jpg';
        img.onload = function () {
            var canv = document.getElementById("myCanvas");
            var ctx = canv.getContext("2d");
            ctx.drawImage(img, 0, 0, img.naturalWidth, img.naturalHeight, 0, 0, 400, 400);
                        ctx.font="bolder "+ topFontLocal  + "px Arial";
            ctx.fillText(event.target.value, 0, 100);
        }
                        
    }
}

