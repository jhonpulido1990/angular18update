import { effect, Injectable, signal } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Injectable({ providedIn: 'root' })
export class DragonballService {
  constructor() {}

  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 9001 },
    { id: 2, name: 'Vegeta', power: 8001 },
  ]);

  saveToLocalStorage = effect(()=> {
    localStorage.setItem('characters', JSON.stringify(this.characters()));
  })

  addPower(character: Character) {
    this.characters.update((list) => [...list, character]);
  }
}
