import {Component} from '@angular/core';
import {navMenuComponent} from './secondcomponent';

@Component({
selector:'my-firstcomponent',
template:`<header><nav-menucomponent>
</nav-menucomponent></header>`,
directives : [navMenuComponent]
})
export class FirstComponent{
first = {content: "new test "};
color = "green"
}

