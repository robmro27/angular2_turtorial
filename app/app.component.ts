import { Component } from '@angular/core';
import { RacesComponent } from './components/app.races.component';

@Component({
  selector: 'racing-app',
  template: `
  <h1>{{heading}}</h1>\n\
  <p>There are {{totalCarParts()}} total parts in stock.</p>
  <races></races>`,
  directives:[RacesComponent]
})

export class AppComponent {
  heading = "Ultra Racing Schedule"
  totalCarParts() {
      let sum = 0;
      for (let carPart of this.carParts) {
          sum += carPart.inStock
      }
      return sum;
  }
  carParts = [
    {"inStock": 20},
    {"inStock": 40},
    {"inStock": 50},
  ]
}