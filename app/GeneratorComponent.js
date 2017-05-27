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
                MemeGenerator.prototype.drawTopText = function ($event) {
                    console.log($event.target.value);
                };
                MemeGenerator.prototype.ngAfterViewInit = function () {
                    var img = new Image();
                    img.src = './Images/sriram1.png';
                    img.onload = function () {
                        var canv = document.getElementById("myCanvas");
                        var ctx = canv.getContext("2d");
                        var ac = Number(canv.clientHeight);
                        var db = Number(canv.clientWidth);
                        var ir = document.getElementById("am");
<<<<<<< HEAD
                        ctx.drawImage(img, 0, 0, img.naturalWidth, img.naturalHeight, 0, 0, 400, 400);
=======
                        ctx.drawImage(img, 0, 0, 463, 352, 0, 0, 400, 400);
>>>>>>> 19d512913fd0fe29b52bdf391bd284fb14c3d2df
                        ctx.fillStyle = "blue";
                        console.log('jai shriram');
                    };
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