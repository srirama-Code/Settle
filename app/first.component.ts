import {Component} from '@angular/core';
import {navMenuComponent} from './secondcomponent';
import {MemeGenerator} from './GeneratorComponent';

@Component({
selector:'my-firstcomponent',
template:`<header><nav-menucomponent>
</nav-menucomponent>
</header>
<a href='/login.html' class='cta-btn'>
<span>Caption an image</span>
 </a>
<meme-GeneratorComponent> </meme-GeneratorComponent>`,
directives : [navMenuComponent,MemeGenerator]
})
export class FirstComponent{
first = {content: "new test "};
color = "green"
}

