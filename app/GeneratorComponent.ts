import { Component } from '@angular/core';
import { ViewChild } from '@angular/core';


@Component({
    selector: 'meme-GeneratorComponent',
    templateUrl: `./HTML/Generator.html`
})
export class MemeGenerator {
    first = "abcd";

    topText: string;
    bottomText: string;
    topFont: any;
    bottomFont: any;

    constructor() {
        this.topFont = 80;
        this.bottomFont = 80;
    }

    drawBottomText($event) {
        this.bottomText = $event.target.value;
        this.bottomFont = 80 - 2 * this.bottomText.length;
        this.DrawCanvasImagewithText($event);
        console.log($event.target.value);
    }

    drawTopText($event) {
        this.topText = $event.target.value;

        this.topFont = 80 - 2 * this.topText.length;
        if (this.topFont < 30) {
            this.topFont = 50;

        }
        this.clearImage();
        this.DrawCanvasImagewithText($event);
        console.log($event.target.value);
    }

    clearImage() {
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
    AddTextToImage(areaToFill:string,textToEnter:String,fontToUse:Number)
    {
var heightToStart;
        if (areaToFill == 'top')
        {
            heightToStart=60;
        }
        else
        {
            heightToStart = 230;
        }
                ctx.font = "bolder " + fontToUse + "px Arial";
                let m = ctx.measureText(textToEnter);
                console.log(m.width);
                var numOfLines = m.width / 400;
                var widthPerWord = m.width / topwords;
                var lettersInLine = 400 / widthPerWord;
                if (numOfLines == 0) {
                    ctx.fillText(event.target.value, 0, 60);
                }
                else {
                    var idx = 0;
                    var endlength = 0;
                    var res;

                    for (idx = 0; idx < topTextArray.length;) {
                        endlength += lettersInLine;
                        res = topTextArray.substring(idx, lettersInLine);
                        ctx.fillText(res, 0, heightToStart);
                        idx = endlength;
                        heightToStart += 30;

                    }
                }



    }
    DrawCanvasImagewithText(event) {
        var fillTop;
        var fillBotom;
        var topTextArray;
        var topwords;
        var bottomTextArray;
        var bottomwords;
        var topFontLocal = this.topFont;
        var bottomFontLocal = this.bottomFont;
        var topTextLocal = this.topText;
        var bottomTextLocal = this.bottomText;
        if (topTextLocal) {
              topTextArray = topTextLocal.toString();
              topwords = topTextArray.length;
            fillTop = true;

        }
        if (bottomTextLocal) {

              bottomTextArray = bottomTextLocal.toString();
              bottomwords = bottomTextArray.length;
            fillBotom = true;
        }

        var img = new Image();
        this.clearImage();
        img.src = './Images/success-kid.jpg';
        img.onload = function () {
            var canv = document.getElementById("myCanvas");
            var ctx = canv.getContext("2d");
            ctx.drawImage(img, 0, 0, img.naturalWidth, img.naturalHeight, 0, 0, 400, 400);
            if (fillTop) {
              this.AddTextToImage('top',topTextArray,topFontLocal);


            }





        }

    }
}

