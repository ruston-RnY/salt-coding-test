import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  private readonly unSubs = new Subject<void>();
  public movies: any = [];
  public populars: any = [];
  public upcoming: any = [];
  public tvPopular: any = [];
  public firstMovies: any;
  public firstPop: any;
  public firstUp: any;
  private api_key!: string;
  public urlImage = `https://image.tmdb.org/t/p/`;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.api_key = this.apiService.API_KEY;
    this.getData();
    this.getDataPopular();
    this.getDataUpcoming();
    this.getDataTv();
  }

  private getData() {
    this.apiService
      .getDataApi(`movie/now_playing?${this.api_key}&language=en-US&page=1`)
      .pipe(takeUntil(this.unSubs))
      .subscribe((res) => {
        this.movies = res.results.slice(5, 9);
        this.firstMovies = res.results[0];
      });
  }

  private getDataPopular() {
    this.apiService
      .getDataApi(`movie/popular?${this.api_key}&language=en-US&page=1`)
      .pipe(takeUntil(this.unSubs))
      .subscribe((res) => {
        this.populars = res.results.slice(1, 5);
        this.firstPop = res.results[0];
      });
  }

  private getDataUpcoming() {
    this.apiService
      .getDataApi(`movie/upcoming?${this.api_key}&language=en-US&page=1`)
      .pipe(takeUntil(this.unSubs))
      .subscribe((res) => {
        this.upcoming = res.results.slice(1, 5);
        this.firstUp = res.results[0];
      });
  }

  private getDataTv() {
    this.apiService
      .getDataApi(`tv/popular?${this.api_key}&language=en-US&page=1`)
      .pipe(takeUntil(this.unSubs))
      .subscribe((res) => {
        this.tvPopular = res.results.slice(0, 8);
      });
  }
}
