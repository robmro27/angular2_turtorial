import { Component } from '@angular/core';
import { Race } from './class/race';
import { RACES } from './../mocks/mocks';

@Component({
    selector: 'races',
    templateUrl: './app/app.races.html',
    stylesUrls:['./app/app.races.css'] 
})

export class RacesComponent {
    races: Race[];
    ngOnInit() {
        this.races = RACES;
    }
}