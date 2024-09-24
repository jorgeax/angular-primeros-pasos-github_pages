import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = 'ironman';
  public age: number = 43;

  get capitalizedName() {
    return this.name.toUpperCase();  // un pipe puede sustituir a esta función-propiedad, para no tener que poner este código
  }

  printNameAge():string {
    return `${this.name} - ${this.age}`;
  }

  changeName():string {
    //throw 'No implementado'
    return this.name = 'Manolo';
  }
  changeAge():number {
    return this.age = 18;
  }
  reset():void {
    this.name = 'ironman';
    this.age = 43;
  }
}
