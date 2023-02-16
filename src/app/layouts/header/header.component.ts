import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  menus = [
    {
      name: 'Playing Now',
      url: 'playing-now',
    },
    {
      name: 'Trending',
      url: 'trending',
    },
    {
      name: 'Favorites',
      url: 'favorites',
    },
    {
      name: 'Artist',
      url: 'artist',
    },
    {
      name: 'TV Channels',
      url: 'tv-channels',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
