"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var app_races_component_1 = require('./components/app.races.component');
var AppComponent = (function () {
    function AppComponent() {
        this.heading = "Ultra Racing Schedule (sample angular2 app)";
        this.parts = [
            { "inStock": 20 },
            { "inStock": 40 },
            { "inStock": 50 },
        ];
    }
    AppComponent.prototype.totalQty = function () {
        var sum = 0;
        for (var _i = 0, _a = this.parts; _i < _a.length; _i++) {
            var parts = _a[_i];
            sum += parts.inStock;
        }
        return sum;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'racing-app',
            template: "\n  <h1>{{heading}}</h1>\n  <p>There are {{totalQty()}} total parts in stock.</p>\n  <races></races>",
            directives: [app_races_component_1.RacesComponent],
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map