import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

//console.log(uuid()); //uuid es una funcion que genera el id

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Gokuh',
      power: 1000
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 500
    }
  ];

  addCharacter(character:Character):void {
    const newCharacter: Character = {...character, id: uuid()};
    this.characters.push(newCharacter);
  }

  // onDeleteCharacter(index:number){
  //   this.characters.splice(index,1);
  // }

  deleteCharacterById (id:string) {
    this.characters = this.characters.filter(character => character.id !==id);
  }

}
