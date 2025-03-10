import { Component } from '@angular/core';
import { GifdSideMenuHeaderComponent } from "./gifd-side-menu-header/gifd-side-menu-header.component";
import { GifdSideMenuOptionsComponent } from "./gifd-side-menu-options/gifd-side-menu-options.component";

@Component({
  selector: 'app-gifs-side-menu',
  imports: [GifdSideMenuHeaderComponent, GifdSideMenuOptionsComponent],
  templateUrl: './gifs-side-menu.component.html'
})
export class GifsSideMenuComponent { }
