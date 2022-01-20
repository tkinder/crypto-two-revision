import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiNewsService } from '../api-news.service';

@Component({
  selector: 'app-articles-javascript',
  templateUrl: './articles-bitcoin.component.html',
  styleUrls: ['./articles-bitcoin.component.css'],
})
export class ArticlesBitcoinComponent implements OnInit {
  BCarticles$: Observable<any>;

  constructor(private apinews: ApiNewsService) {}

  ngOnInit() {
    // Bitcoin news articles
    this.BCarticles$ = this.apinews.getArticlesBitcoin();
  }
}
