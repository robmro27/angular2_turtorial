import { NgModule }      from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { RacesComponent }   from './components/app.races.component';
import { RaceDataService } from './services/race';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule  ],
  declarations: [ AppComponent, RacesComponent ],
  bootstrap:    [ AppComponent, RacesComponent ],
  providers:    [ RaceDataService ]
})
export class AppModule {}