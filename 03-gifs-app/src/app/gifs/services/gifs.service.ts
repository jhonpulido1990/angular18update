import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { environment } from '../../../environments/environment';
import type { GiphyResponse } from '../interfaces/giphy.interfaces';
import { Gif } from '../interfaces/gif.interface';
import { GifMapper } from '../mapper/gif.mapper';
import { map, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class GifService {
  private http = inject(HttpClient);
  public trendingGifs = signal<Gif[]>([]);
  public trendingGifsLoading = signal(true);

  searchHistory = signal<Record<string, Gif[]>>({});
  searchHistoryKeys = computed(() => Object.keys(this.searchHistory()));

  constructor() {
    this.loadTrendingGifs();
  }

  loadTrendingGifs() {
    this.http
      .get<GiphyResponse>(`${environment.giphy_url}/gifs/trending`, {
        params: {
          api_key: environment.giphy_apiKey,
          limit: 20,
        },
      })
      .subscribe((resp) => {
        const gifs = GifMapper.mapGiphyItemsToGifArray(resp.data);
        this.trendingGifs.set(gifs);
        this.trendingGifsLoading.set(false);
      });
  }

  searchGifs(query: string) {
    return this.http
      .get<GiphyResponse>(`${environment.giphy_url}/gifs/search`, {
        params: {
          api_key: environment.giphy_apiKey,
          limit: 20,
          q: query
        },
      }).pipe(
        map(({data}) => data),
        map((items) =>  GifMapper.mapGiphyItemsToGifArray(items) ),
        // historial
        tap((items) => {
          this.searchHistory.update((history) => ({
            ...history, [query.toLowerCase()]: items,
          }))
        })
      )
      /* .subscribe((resp) => {
        const gifs = GifMapper.mapGiphyItemsToGifArray(resp.data);
         this.trendingGifs.set(gifs);
        this.trendingGifsLoading.set(false);
        console.log({serach: gifs})
      }); */
  }
}
