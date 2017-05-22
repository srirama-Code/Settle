System.register(['@angular/core', './secondcomponent', './GeneratorComponent'], function(exports_1, context_1) {
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
    var core_1, secondcomponent_1, GeneratorComponent_1;
    var FirstComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (secondcomponent_1_1) {
                secondcomponent_1 = secondcomponent_1_1;
            },
            function (GeneratorComponent_1_1) {
                GeneratorComponent_1 = GeneratorComponent_1_1;
            }],
        execute: function() {
            FirstComponent = (function () {
                function FirstComponent() {
                    this.first = { content: "new test " };
                    this.color = "green";
                }
                FirstComponent = __decorate([
                    core_1.Component({
                        selector: 'my-firstcomponent',
                        template: "<header><nav-menucomponent>\n</nav-menucomponent>\n</header>\n<a href='./HTML/Login.html' class='cta-btn'>\n<i class='glyphicon glyphicon-pencil pencilSettings' style='color:GhostWhite;font-size;20px'> </i>\n<span style='color:GhostWhite'>Caption an Image</span>\n</a>\n<meme-GeneratorComponent> </meme-GeneratorComponent>",
                        directives: [secondcomponent_1.navMenuComponent, GeneratorComponent_1.MemeGenerator]
                    }), 
                    __metadata('design:paramtypes', [])
                ], FirstComponent);
                return FirstComponent;
            }());
            exports_1("FirstComponent", FirstComponent);
        }
    }
});
//# sourceMappingURL=first.component.js.map