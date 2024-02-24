import { Component, Inject, OnInit } from '@angular/core';
import { LOCAL_STORAGE_TOKEN } from './value-providers/local-storage.token';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: '<h1>Hello World!</h1>',
  styleUrls: ['./app.component.scss'],
  // styles: ['h1  { color: red }'],
})
export class AppComponent implements OnInit{
  title = 'angular-app';
  constructor(
    @Inject(LOCAL_STORAGE_TOKEN) private localStorage : Storage,
  ) {}

  ngOnInit(): void {
    this.localStorage.setItem('Test Local Storage', 'It works.');
  }
}
