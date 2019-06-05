//import { enableProdMode } from '@angular/core';

//bootstrap file
//first file to be executed

//load angular module into browser
//start angular application
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

//import { AppModule } from './app/app.module';

import { environment } from './environments/environment';
import { AppModule } from './app/app.module';

//if (environment.production) {
// enableProdMode();
//}
//Step1
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));

//step2 JIT - HTML to JS conversion haapens at browser
//Good For developement time , compile fast
//not for production

//AOT = Ahead of Time
//build time (node js) on Dev mechines
//HTML +>Typescript =>JS =>main bundle
//AOT HTML VIew(.html file) is not bundled
