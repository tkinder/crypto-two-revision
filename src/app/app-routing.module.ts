import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NewsFeedComponent } from './news-feed/news-feed.component';
import { HomeComponent } from './home/home.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ArticlesBitcoinComponent } from './articles-bitcoin/articles-bitcoin.component';
import { DynamicTitle } from './dynamic-title/dynamic-title.component';


export const routes: Routes = [
  { path: '', component: HomeComponent, data: { title: 'Home' } },
  {
    path: 'news',
    component: ArticlesBitcoinComponent,
    data: { title: 'Latest News' },
  },
  { path: 'toolbar', component: ToolbarComponent },
  { path: '', component: DynamicTitle, data: { title: '' } },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
