import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { WeatherInformationComponent } from '../weather-information/weather-information.component';

export interface ICoordinates {
  lat: number;
  lng: number;
}
@Injectable({
  providedIn: 'root',
})
export class OpenWeatherService {
  public state: ICoordinates = {
    lat: 0,
    lng: 0,
  };

  constructor(public matDialog: MatDialog) {}

  openDialog(lat: number, lng: number) {
    this.matDialog.open(WeatherInformationComponent, {
      height: '400px',
      width: '600px',
    });

    this.state.lat = lat;
    this.state.lng = lng;
    console.log(this.state);
  }
}
