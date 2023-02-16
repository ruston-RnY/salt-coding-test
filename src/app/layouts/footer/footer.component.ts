import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  footerMenus = [
    {
      name: 'About',
      url: 'about',
    },
    {
      name: 'For Business',
      url: 'for-business',
    },
    {
      name: 'Suggestions',
      url: 'suggestions',
    },
    {
      name: 'Help & FAQ',
      url: 'help',
    },
    {
      name: 'Contacts',
      url: 'contacts',
    },
    {
      name: 'Pricing',
      url: 'pricing',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
