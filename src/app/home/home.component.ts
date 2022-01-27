import { Component, NgModule } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  title = 'Latest Prices';
  objectKeys = Object.keys;
  cryptos: any;
  interval: any;
  http: any;



  constructor(private _data: DataService) {}

  ngOnInit() {
    this.refreshData();
    this.interval = setInterval(() => {
      this.refreshData();
    }, 10000);

  }

  refreshData() {
    this._data.getPrices().subscribe((res) => {
      this.cryptos = res;
      console.log(res);
    });
  }
  getKeys(obj){
    return Object.keys(obj)
  }
}
