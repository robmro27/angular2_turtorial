import { Component } from '@angular/core';
import { Race } from './class/race';
import { RaceDataService } from '../services/race';

@Component({
    selector: 'races',
    templateUrl: './app/html/app.races.html',
    stylesUrls:['./app/css/app.races.css'],
})

export class RacesComponent {
    constructor(private RaceDataService:RaceDataService ) {}
    races: Race[];
    ngOnInit() {
        this.RaceDataService.getRaces()
            .subscribe(races => this.races = races);
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