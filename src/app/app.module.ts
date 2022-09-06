import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherMapComponent } from './weather-map/weather-map.component';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [AppComponent, WeatherMapComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBD9_pIoy2foIRW4EPhe0af6UJaN050y_c',
      libraries: ['places'],
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
