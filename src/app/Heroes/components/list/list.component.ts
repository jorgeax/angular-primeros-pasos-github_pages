import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroesList: string[] = ['Gokuh','Lobezno','Aquaman','Tempelton'];
  public deletedLastHero?: string;

  deleteLastHero() {
    this.deletedLastHero = this.heroesList.pop();
    console.log(this.deletedLastHero);
  }

}
