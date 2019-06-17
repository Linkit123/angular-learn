import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { MenuLeftComponent } from './menu-left/menu-left.component';

@NgModule({
   declarations: [
      AppComponent,
      TopBarComponent,
      MenuLeftComponent
   ],
   imports: [
      BrowserModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
