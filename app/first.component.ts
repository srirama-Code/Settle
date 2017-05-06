import {Component} from '@angular/core';
import {navMenuComponent} from './secondcomponent';

@Component({
selector:'my-firstcomponent',
template:`<nav-menucomponent></nav-menucomponent>`,
directives : [navMenuComponent]
})
export class FirstComponent{
first = {content: "new test "};
color = "green"
}

