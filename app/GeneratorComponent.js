System.register(['@angular/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var MemeGenerator;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            MemeGenerator = (function () {
                function MemeGenerator() {
                    this.first = "abcd";
                }
                MemeGenerator.prototype.changeImage = function ($event) {
                };
                MemeGenerator.prototype.drawtext = function ($event) {
                    console.log(this);
                    console.log($event);
                };
                MemeGenerator.prototype.firebuttonClicked = function ($event) {
                    console.log(this);
                };
                MemeGenerator.prototype.ngAfterViewInit = function () {
                    var img = new Image();
                    var canv = document.getElementById("myCanvas");
                    //var img= document.getElementsByTagName('img');
                    img.src = './Images/sriram1.png';
                    var ctx = canv.getContext('2d');
                    img.onload = function () {
                        ctx.drawImage(img, 0, 0, 300, 200);
                        //refill text
                        ctx.fillStyle = "blue";
                        console.log('jai shriram');
                        ctx.fillText("Jai shriram", 60, 100);
                    };
                    //refill text
                    //       ctx.fillStyle = "blue";
                    // ctx.fillText("Jai shriram",40,80);
                    //     console.log("ngAfterViewInit");
                };
                MemeGenerator = __decorate([
                    core_1.Component({
                        selector: 'meme-GeneratorComponent',
                        templateUrl: "./HTML/Generator.html"
                    }), 
                    __metadata('design:paramtypes', [])
                ], MemeGenerator);
                return MemeGenerator;
            }());
            exports_1("MemeGenerator", MemeGenerator);
        }
    }
});
//# sourceMappingURL=GeneratorComponent.js.map