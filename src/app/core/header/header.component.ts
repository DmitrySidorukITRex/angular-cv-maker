import { Component, OnInit } from '@angular/core';
import { Routes } from './header.constants';
import { Route } from './header.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public routes: Route[] = Routes;

  constructor() {}

  ngOnInit(): void {}
}
