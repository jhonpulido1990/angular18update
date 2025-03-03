import { Routes } from '@angular/router';
import { HeroPageComponent } from './pages/hero/hero-page.component';
import { CounterPageComponent } from './pages/counter-page/counter-page.component';
import { GsapModelComponent } from './pages/GsapModel/GsapModel.component';

export const routes: Routes = [
  {
    path: '',
    component: CounterPageComponent
  },
  {
    path: 'hero',
    component: HeroPageComponent
  },
  {
    path: 'gsap',
    component: GsapModelComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];
