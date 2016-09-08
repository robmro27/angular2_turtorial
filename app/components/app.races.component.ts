import { Component } from '@angular/core';
import { Race } from './class/race';
import { RACES } from './../mocks/mocks';

@Component({
    selector: 'races',
    templateUrl: './app/html/app.races.html',
    stylesUrls:['./app/css/app.races.css'] 
})

export class RacesComponent {
    races: Race[];
    ngOnInit() {
        this.races = RACES;
    }
    upQuantity(race) {
        if (race.quantity < race.inStock) {
            race.quantity++;
        }
    }
    downQuantity(race) {
        if(race.quantity > 0) {
            race.quantity--;
        }
    }
}