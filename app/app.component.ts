import { Component } from '@angular/core';
import { RacesComponent } from './components/app.races.component';

@Component({
  selector: 'racing-app',
  template: `
  <h1>{{heading}}</h1>\n\
  <p>There are {{totalQty()}} total parts in stock.</p>
  <races></races>`,
  directives:[RacesComponent],
})

export class AppComponent {
  heading = "Ultra Racing Schedule (sample angular2 app)"
  totalQty() {
      let sum = 0;
      for (let parts of this.parts) {
          sum += parts.inStock
      }
      return sum;
  }
  parts = [
    {"inStock": 20},
    {"inStock": 40},
    {"inStock": 50},
  ]
}