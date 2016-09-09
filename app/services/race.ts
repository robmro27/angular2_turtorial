import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Race } from './../class/race';

// import { RACES } from './../mocks/mocks';

@Injectable()
export class RaceDataService {
    
    constructor(private http: Http){}
    
    getRaces() {
        // return RACES;
        return this.http.get('app/mocks/mocks.json')
            .map(response => <Race[]>response.json().data);
    }
}