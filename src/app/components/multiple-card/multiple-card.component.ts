import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-multiple-card',
  templateUrl: './multiple-card.component.html',
  styleUrls: ['./multiple-card.component.scss'],
})
export class MultipleCardComponent implements OnInit {
  @Input() dataApi: any = [];
  @Input() firstArr: any;

  constructor(public apiService: ApiService) {}

  ngOnInit(): void {}
}
