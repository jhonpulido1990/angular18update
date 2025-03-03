import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-hero-page',
  imports: [CommonModule],
  templateUrl: './hero-page.component.html',
  styleUrl: './hero-page.component.css',
  //changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroPageComponent {
  public name = signal<string>('Iroman');
  public age = signal<number>(45);

  getHeroDescription = computed(() => {
    const description = `${this.name()} - ${this.age()}`
    return description;
  }
)

  changeHero() {
    this.name.set('spiderman');
    this.age.set(22);
  }

  resetForm() {
    this.name.set('Iroman');
    this.age.set(45);
  }
  chageAge(value: number) {
  this.age.set(value);
  }
}
