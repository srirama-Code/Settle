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

drawBelowText($event){
        console.log(this);
        console.log($event);
}

drawAboveText($event){
        console.log(this);
        console.log($event.target.value);
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
       
        img.onload = function () {
        var scaleX=1;
        var scaleY=1;
   // var screenWidth= parseInt(canv.style.width);
    //var screenHeight = parseInt(canv.style.height);
    //var imageHeight= img.naturalHeight;
    //var imageWidth= img.naturalWidth;
     
//if (imageHeight > screenHeight){
//scaleX = screenHeight/imageHeight; 
//}

//if (imageWidth > screenWidth){
//scaleY= screenWidth/imageWidth;
//}

//var scale = scaleY;

//if (scaleX<scaleY){
  //  scale=scaleX;
//}
//if (scale < 1)
//{
//imageHeight = imageHeight * scale;
//imageWidth = imageWidth * scale;
//}
//var hght = imageHeight.toString() + 'px';
//var wdt = imageWidth.toString() + 'px';
//canv.style.height = hght;
//canv.style.width = wdt;

  ctx.drawImage(img,0,0,300,300);
            ctx.fillStyle = "blue";
            console.log('jai shriram');
          //  ctx.fillText("Jai shriram", 60, 100);
        }
        //refill text
        //       ctx.fillStyle = "blue";
        // ctx.fillText("Jai shriram",40,80);
        //     console.log("ngAfterViewInit");
    }

