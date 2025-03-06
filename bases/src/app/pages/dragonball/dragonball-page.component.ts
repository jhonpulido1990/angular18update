import { Component, signal } from '@angular/core';

interface Character {
  id: number;
  name: string;
  power: number
}

@Component({
  selector: 'app-dragonball-page',
  imports: [],
  templateUrl: './dragonball-page.component.html',
})
export class DragonballPageComponent {
  name = signal('Gohan');
  power = signal(0);


  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 9001 },
    { id: 2, name: 'Vegeta', power: 8001 },
    { id: 3, name: 'picoro', power: 3001 },
    { id: 4, name: 'yancha', power: 500 },
  ]);
  addPower() {
    if (!this.name() || !this.power() || this.power() <= 0) {
      return;
    }

    const newCharacter: Character = {
      id: this.characters().length + 1,
      name: this.name(),
      power: this.power(),
    }

    //this.characters().push(newCharacter);
    this.characters.update(
      (list) => [...list, newCharacter]
    )
    this.resetFileds();
  }
  resetFileds() {
    this.name.set('');
    this.power.set(0);
  }
}
