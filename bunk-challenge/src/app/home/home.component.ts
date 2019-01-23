import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

interface IWeather{
  weather: string;
  coord: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  private bristol: Observable<IWeather>;
  private london: Observable<IWeather>;
  private rome: Observable<IWeather>;
  private message = "hello";
  private error = false;
  constructor(private http: HttpClient) { }

  public ngOnInit() {

    this.bristol = this.http.get<IWeather>('https://api.openweathermap.org/data/2.5/weather?id=4749005&appid=f4bbeb8ec1a8fb95591f2cf112aaa575&units=metric')
    .pipe(
      catchError((err: HttpErrorResponse) => {
        this.error=true;
        return new Observable<IWeather>();
      })
    );

    this.london = this.http.get<IWeather>('https://api.openweathermap.org/data/2.5/weather?id=2643744&appid=f4bbeb8ec1a8fb95591f2cf112aaa575&units=metric')
    .pipe(
      catchError((err: HttpErrorResponse) => {
        this.error=true;
        return new Observable<IWeather>();
      })
    );

    this.rome = this.http.get<IWeather>('https://api.openweathermap.org/data/2.5/weather?id=4219762&appid=f4bbeb8ec1a8fb95591f2cf112aaa575&units=metric')
    .pipe(
      catchError((err: HttpErrorResponse) => {
        this.error=true;
        return new Observable<IWeather>();
      })
    );
  };
}