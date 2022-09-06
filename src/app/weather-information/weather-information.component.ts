import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { OpenWeatherService } from '../services/open-weather.service';

@Component({
  selector: 'app-weather-information',
  templateUrl: './weather-information.component.html',
  styleUrls: ['./weather-information.component.scss'],
})
export class WeatherInformationComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<WeatherInformationComponent>,
    private openWeatherService: OpenWeatherService
  ) {}

  ngOnInit(): void {}
}
