import {platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {FirstComponent} from './first.component';
import {enableProdMode} from '@angular/core/Index';
import {AppModule} from './appmodule';

enableProdMode();

platformBrowserDynamic().bootstrapModule(AppModule).then(success=>console.log('Bootstrap success'))
.catch(error => console.log(error));