import {Component} from '@angular/core';


@Component({
selector:'meme-GeneratorComponent',
templateUrl: `./HTML/Generator.html`
})
export class MemeGenerator{
    first = "abcd";

     firebuttonClicked($event)
    {
console.log(this);
    }
}
 