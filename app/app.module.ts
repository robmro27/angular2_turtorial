import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { RacesComponent }   from './components/app.races.component';
@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, RacesComponent ],
  bootstrap:    [ AppComponent, RacesComponent ]
})
export class AppModule {}