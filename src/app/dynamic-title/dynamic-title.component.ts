import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute, ChildActivationEnd, RouterOutlet } from '@angular/router';
import { filter, map } from 'rxjs/operators';

RouterOutlet

@Component({
  selector: 'app-dynamic-title',
  templateUrl: './dynamic-title.component.html',
  styleUrls: ['./dynamic-title.component.css'],
})
export class DynamicTitle implements OnInit {

title = 'dynamic-title'

  constructor(
    private titleService: Title,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  setDocTitle(title: string) {
    console.log('current title:::::') + this.titleService.getTitle();
    this.titleService.setTitle(title);
  }

  ngOnInit() {
    const appTitle = this.titleService.getTitle();
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => {
          let child = this.activatedRoute.firstChild;
          console.log(child.firstChild);
          console.log(child.snapshot.data['title']);
          while (child.firstChild) {
            child = child.firstChild;
          }
          if (child.snapshot.data['title']) {
            return child.snapshot.data['title'];
          }
          return appTitle;
        })
      )
      .subscribe((ttl: string) => {
        this.titleService.setTitle(ttl);
      });
  }
}
