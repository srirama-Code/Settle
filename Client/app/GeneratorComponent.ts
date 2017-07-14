import { Component } from '@angular/core';
import { ViewChild } from '@angular/core';
import { HttpModule} from '@angular/http'; 
import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

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

    constructor(public http:Http) {

        this.topFont = 80;
        this.bottomFont = 80;
    }

    drawBottomText($event) {
        this.bottomText = $event.target.value;
        this.bottomFont = 80 - 2 * this.bottomText.length;
        this.DrawCanvasImagewithText($event);
       // console.log($event.target.value);
    }

    drawTopText($event) {
        console.log(this.http);
        this.topText = $event.target.value;

        this.topFont = 80 - 2 * this.topText.length;
        if (this.topFont <= 50) {
            this.topFont = 50;

        }
        this.clearImage();
        this.DrawCanvasImagewithText($event);
        //console.log($event.target.value);
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
        img.src = './rtImages/success-kid.jpg';
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
        var topTextArray = topTextLocal.toString();
        var topwords = topTextArray.length;

        //      var bottomTextArray = bottomTextLocal.toString();
        //      var bottomwords = bottomTextArray.length;
        var img = new Image();
        this.clearImage();
        img.src = './rtImages/success-kid.jpg';
        img.onload = function () {
            var canv = document.getElementById("myCanvas");
            var ctx = canv.getContext("2d");
            ctx.drawImage(img, 0, 0, img.naturalWidth, img.naturalHeight, 0, 0, 400, 400);
            ctx.font = "bolder " + topFontLocal + "px Arial";
            var m = ctx.measureText(event.target.value);
            console.log(m);
            var heightToStart = 60;
            var numOfLines = m.width / 400;
            var widthPerWord = m.width / topwords;
            var lettersInLine = Math.floor(400 / widthPerWord);

            if (numOfLines == 0) {
                ctx.fillText(event.target.value, 0, 60);
            }
            else {
                var idx = 0;
                var endlength = 0;
                var res;
                for (idx = 0; idx < topTextArray.length;) {
                    endlength += lettersInLine;
                    res = topTextArray.substring(idx, endlength);
                    console.log(res);
                    ctx.fillText(res, 0, heightToStart);
                    idx = endlength;
                    heightToStart += 40;
                }
            }

        }

    }
}

