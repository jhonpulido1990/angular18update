import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { GifService } from '../../../services/gifs.service';

interface MenuOptions {
  icon: string;
  label: string;
  router: string;
  sublabel: string;
}

@Component({
  selector: 'app-gifd-side-menu-options',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './gifd-side-menu-options.component.html',
})
export class GifdSideMenuOptionsComponent {

  gifService = inject(GifService);

  menuOption: MenuOptions[] = [
    {
      icon: 'fa-solid fa-chart-line',
      label: 'Trending',
      sublabel: 'gifs populares',
      router: '/dashboard/trending',
    },
    {
      icon: 'fa-solid fa-magnifying-glass',
      label: 'Buscador',
      sublabel: 'Buscar gifs',
      router: '/dashboard/search',
    },
  ];
}
