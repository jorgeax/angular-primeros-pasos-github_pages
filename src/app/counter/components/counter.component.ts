// import { Component } from "@angular/core";


// @Component({
//   selector: 'app-counter',
//   template: '<h1>Hello Counter</h1>'
// })
// export class CounterComponent {

// }

import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <h3>Counter: {{counter}}</h3>
  <button (click)="increaseCounter(+2)">+2</button>
  <button (click)="resetCounter()">Reset</button>
  <button (click)="increaseCounter(-2)">-2</button>
  `
})

export class CounterComponent {
  // constructor() { }
  public counter: number = 10;

  increaseCounter(value:number):void{
    this.counter += value;
  }
  resetCounter(){
    this.counter = 10;
  }
}
