import { Component, ElementRef, inject, OnInit, viewChild } from '@angular/core';
import { GifService } from '../../services/gifs.service';

@Component({
  selector: 'app-trending-page',
  imports: [],
  templateUrl: './trending-page.component.html',
})
export default class TrendingPageComponent {
  gifService = inject(GifService);

  scrollDivRef = viewChild<ElementRef<HTMLDivElement>>('groupDiv');

  onScroll(event: Event) {
    const scrollDiv = this.scrollDivRef()?.nativeElement
    if (!scrollDiv) return;
    const scrollTop = scrollDiv.scrollTop;

    const clientHeigth = scrollDiv.clientHeight;

    const scrollHeight = scrollDiv.scrollHeight;

    // const scrollTotal = scrollTop + clientHeigth;
    const isAtBottom = scrollTop + clientHeigth + 300 >= scrollHeight;

    console.log('Scroll Top:', scrollTop);
    console.log('Client Height:', clientHeigth);
    console.log('Scroll Height:', scrollHeight);
    // console.log('Scroll Total:', scrollTotal);
    console.log('Is at bottom:', isAtBottom);

    if (isAtBottom) {
      this.gifService.loadTrendingGifs();
    }
  }
}
