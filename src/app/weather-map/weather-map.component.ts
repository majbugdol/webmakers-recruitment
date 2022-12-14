import { MapsAPILoader } from '@agm/core';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { OpenWeatherService } from '../services/open-weather.service';

@Component({
  selector: 'app-weather-map',
  templateUrl: './weather-map.component.html',
  styleUrls: ['./weather-map.component.scss'],
})
export class WeatherMapComponent implements OnInit {
  lat: number = 50.265252093435215;
  lng: number = 19.02180235179187;

  constructor(
    private mapsAPILoader: MapsAPILoader,
    public matDialog: MatDialog,
    private openWeatherService: OpenWeatherService
  ) {}

  ngOnInit(): void {
    this.mapsAPILoader.load().then(() => {});
  }

  onMapClick(event: any) {
    this.lat = event.coords.lat;
    this.lng = event.coords.lng;

    this.openWeatherService.openModal(this.lat, this.lng);
  }
}
