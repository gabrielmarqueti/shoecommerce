import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { NikeComponent } from './produtos/nike/nike.component';
import { AdidasComponent } from './produtos/adidas/adidas.component';
import { MizunoComponent } from './produtos/mizuno/mizuno.component';
import { PumaComponent } from './produtos/puma/puma.component';
import { OlympikusComponent } from './produtos/olympikus/olympikus.component';
import { AllStarComponent } from './produtos/all-star/all-star.component';
import { LacosteComponent } from './produtos/lacoste/lacoste.component';
import { UnderArmourComponent } from './produtos/under-armour/under-armour.component';
import { AcicsComponent } from './produtos/acics/acics.component';
import { OakleyComponent } from './produtos/oakley/oakley.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    NikeComponent,
    AdidasComponent,
    MizunoComponent,
    PumaComponent,
    OlympikusComponent,
    AllStarComponent,
    LacosteComponent,
    UnderArmourComponent,
    AcicsComponent,
    OakleyComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
