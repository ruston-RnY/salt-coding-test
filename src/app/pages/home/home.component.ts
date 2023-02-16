import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  data = [
    {
      nama: '1',
    },
    {
      nama: '2',
    },
    {
      nama: '3',
    },
    {
      nama: '4',
    },
    {
      nama: '5',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
