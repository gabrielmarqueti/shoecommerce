import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { AcicsComponent } from './produtos/acics/acics.component';
import { AdidasComponent } from './produtos/adidas/adidas.component';
import { AllStarComponent } from './produtos/all-star/all-star.component';
import { LacosteComponent } from './produtos/lacoste/lacoste.component';
import { MizunoComponent } from './produtos/mizuno/mizuno.component';
import { NikeComponent } from './produtos/nike/nike.component';
import { OakleyComponent } from './produtos/oakley/oakley.component';
import { OlympikusComponent } from './produtos/olympikus/olympikus.component';
import { UnderArmourComponent } from './produtos/under-armour/under-armour.component';
import { PumaComponent } from './produtos/puma/puma.component';

const routes: Routes = [
  {path: 'nike', component: NikeComponent},
  {path: 'adidas', component: AdidasComponent},
  {path: 'all-star', component: AllStarComponent},
  {path: 'lacoste', component: LacosteComponent},
  {path: 'mizuno', component: MizunoComponent},
  {path: 'acics', component: AcicsComponent},
  {path: 'oakley', component: OakleyComponent},
  {path: 'olympikus', component: OlympikusComponent},
  {path: 'under-armour', component: UnderArmourComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'home', component: HomeComponent},
  {path: 'puma', component: PumaComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
