import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiNewsService {
  api_key = '24bd80c24960d3cf31733291331a298ae53520fc2bfdb3910451fbf0cf021902';

  constructor(private http: HttpClient) {}

  getArticlesTechnology(): Observable<any> {
    return this.http
      .get(
        'https://newsapi.org/v2/top-headlines?category=technology&language=en&country=us&apiKey=' +
          this.api_key
      )
      .pipe(map((data: any) => data.news));
  }

  getArticlesJavaScript(): Observable<any> {
    return this.http
      .get(
        'https://min-api.cryptocompare.com/data/v2/news/?lang=EN&api_key=' +
          this.api_key
      )
      .pipe(map((data: any) => data.news));
  }
  getArticlesBitcoin(): Observable<any> {
    return this.http
      .get(
        'https://min-api.cryptocompare.com/data/v2/news/?lang=EN&api_key=' +
          this.api_key
      )
      .pipe(map((data: any) => data.news));
  }
}
