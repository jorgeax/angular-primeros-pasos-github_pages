import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { v4 as uuid } from 'uuid';


@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [
    {
      id: uuid(),
      name: 'Trunks',
      power: 12
    },
    {
      id: uuid(),
      name: 'Krilin',
      power: 20
    }
  ]

  @Output()
  public onDeleteIndex: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id:string):void{
    //TODO: Emitir el índice del personaje

    console.log(id);

    this.onDeleteIndex.emit(id);

  }
}
