import { Component } from '@angular/core';
import { ViewChild } from '@angular/core';

@Component({
    selector: 'meme-GeneratorComponent',
    templateUrl: `./HTML/Generator.html`
})
export class MemeGenerator {
    first = "abcd";
    
    
    drawBottomText($event)
    {
              console.log($event.target.value);
    }

    drawTopText($event){
         var canv = document.getElementById("myCanvas");
        var  ctx = canv.getContext("2d");
        ctx.clearRect(0,0,400,400)
        this.DrawCanvasImagewithText($event);

        var abc = document.getElementById("myCanvas");
        var  bbc = abc.getContext("2d");
        ctx.textAlign = 'center';
       //  ctx.clearRect(0,0,400,400);
        bbc.fillStyle = "ghostwhite";
        var textValue = $event.target.value;

        var textLength = textValue.length;
 
       bbc.fillText(textValue, 200, 200);
       console.log($event.target.value);

    }
 
    ngAfterViewInit() {
     this.DrawCanvasImage();

        }

        DrawCanvasImage()
        {
                       var img = new Image();
        img.src = './Images/success-kid.jpg';
        img.onload = function () {
        var canv = document.getElementById("myCanvas");
        var ctx = canv.getContext("2d");
  ctx.drawImage(img,0,0,img.naturalWidth,img.naturalHeight,0,0,400,400);

        }
    }
    DrawCanvasImagewithText(event)
    {
 var img = new Image();
        img.src = './Images/success-kid.jpg';
        img.onload = function () {
        var canv = document.getElementById("myCanvas");
        var ctx = canv.getContext("2d");
  ctx.drawImage(img,0,0,img.naturalWidth,img.naturalHeight,0,0,400,400);
   ctx.fillText(event.target.value,200,100);

        }

    }
    }

