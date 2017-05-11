import {Component} from '@angular/core';
import {navMenuComponent} from './secondcomponent';
import {MemeGenerator} from './GeneratorComponent';

@Component({
selector:'my-firstcomponent',
template:`<header><nav-menucomponent>
</nav-menucomponent>
</header>
<meme-GeneratorComponent> </meme-GeneratorComponent>`,
directives : [navMenuComponent,MemeGenerator]
})
export class FirstComponent{
first = {content: "new test "};
color = "green"
}

