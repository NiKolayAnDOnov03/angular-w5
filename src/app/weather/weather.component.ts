import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  city: string = 'New York';
  weather: any;

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.getWeather(this.city);
  }

  getWeather(city: string) {
    this.weatherService.getWeather(city).subscribe(
      data => {
        this.weather = data;
      },
      error => {
        console.error('Error fetching weather data', error);
      }
    );
  }

  onCityChange(city: string) {
    this.city = city;
    this.getWeather(city);
  }
}