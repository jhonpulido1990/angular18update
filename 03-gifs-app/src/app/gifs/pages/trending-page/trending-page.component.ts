import { AfterViewInit, Component, ElementRef, inject, OnInit, viewChild } from '@angular/core';
import { GifService } from '../../services/gifs.service';
import { ScrollStateService } from '../../shared/services/scroll-stae.service';

@Component({
  selector: 'app-trending-page',
  imports: [],
  templateUrl: './trending-page.component.html',
})
export default class TrendingPageComponent implements AfterViewInit {
  gifService = inject(GifService);
  scrollStateService = inject(ScrollStateService);

  scrollDivRef = viewChild<ElementRef<HTMLDivElement>>('groupDiv');

  ngAfterViewInit(): void {
    const scrollDiv = this.scrollDivRef()?.nativeElement;
    if (!scrollDiv) return;

    scrollDiv.scrollTop = this.scrollStateService.trendingScrollTop();

    scrollDiv.addEventListener('scroll', this.onScroll.bind(this));
  }

  onScroll(event: Event) {
    const scrollDiv = this.scrollDivRef()?.nativeElement
    if (!scrollDiv) return;
    const scrollTop = scrollDiv.scrollTop;

    const clientHeigth = scrollDiv.clientHeight;

    const scrollHeight = scrollDiv.scrollHeight;

    // const scrollTotal = scrollTop + clientHeigth;
    const isAtBottom = scrollTop + clientHeigth + 300 >= scrollHeight;

    this.scrollStateService.trendingScrollTop.set(scrollTop);

    /* console.log('Scroll Top:', scrollTop);
    console.log('Client Height:', clientHeigth);
    console.log('Scroll Height:', scrollHeight);
    // console.log('Scroll Total:', scrollTotal);
    console.log('Is at bottom:', isAtBottom); */

    if (isAtBottom) {
      this.gifService.loadTrendingGifs();
    }
  }
}
