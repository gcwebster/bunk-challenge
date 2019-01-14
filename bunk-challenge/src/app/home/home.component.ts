import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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
  private weather: Observable<IWeather[]>;
  private message = "hello";
  constructor(private http: HttpClient) { }

  ngOnInit() {
      this.weather = this.http.get<IWeather[]>('https://api.openweathermap.org/data/2.5/weather?id=4219762&appid=f4bbeb8ec1a8fb95591f2cf112aaa575');
  }

}
