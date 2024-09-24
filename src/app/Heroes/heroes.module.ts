import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common"; // donde estan las directivas: ngIf,ngFor,etc

import { HeroComponent } from "./components/hero/hero.component";
import { ListComponent } from "./components/list/list.component";



@NgModule({
  declarations: [
    HeroComponent,
    ListComponent
  ],
  exports: [
    HeroComponent,
    ListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HeroesModule {}
