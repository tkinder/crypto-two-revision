import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiNewsService } from '../api-news.service';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CryptosService } from '../cryptos.service';
import { CryptoNews } from '../models/crypto-news';
import { DynamicTitle } from '../dynamic-title/dynamic-title.component';

@Component({
  selector: 'app-articles-bitcoin',
  templateUrl: './articles-bitcoin.component.html',
  styleUrls: ['./articles-bitcoin.component.css'],
})
export class ArticlesBitcoinComponent implements OnInit {
  public currentItem: any;
  title = "Latest News"

  constructor(
    private _cryptoService: CryptosService,
    private _route: ActivatedRoute,
    // private _ngmeta: NgMeta,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.currentItem = this._cryptoService.currentItem;
  }
  get cryptoNews$(): Observable<CryptoNews[]> {
    return this._cryptoService.cryptoNews$;
  }

  // fetch news detail via cryptos API service
  onGoToNewsDetail(newsItem: CryptoNews) {
    this._cryptoService.getNewsDetail(newsItem);
  }
  goBack() {
    this.router.navigateByUrl('/');
  }
}
// export class ArticlesBitcoinComponent implements OnInit {
//   BCarticles$: Observable<any>;

//   constructor(private apinews: ApiNewsService) {}

//   ngOnInit() {
//     // Bitcoin news articles
//     this.BCarticles$ = this.apinews.getArticlesBitcoin();

