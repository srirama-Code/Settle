import {Component} from '@angular/core';
import {navMenuComponent} from './secondcomponent';
import {MemeGenerator} from './GeneratorComponent';
import {Generate} from './GenerateComponent';

@Component({
selector:'my-firstcomponent',
template:`<header><nav-menucomponent>
</nav-menucomponent>
</header>
<a href='./HTML/Login.html' class='cta-btn'>
<i class='glyphicon glyphicon-pencil pencilSettings' style='color:GhostWhite;font-size;20px'> </i>
<span style='color:GhostWhite'>Caption an Image</span>
</a>
<meme-GeneratorComponent> </meme-GeneratorComponent>`,
directives : [navMenuComponent,MemeGenerator,Generate]
})
export class FirstComponent{
first = {content: "new test "};
color = "green"
}

