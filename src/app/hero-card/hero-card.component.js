"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
require('rxjs/add/operator/switchMap');
var HeroCardComponent = (function () {
    function HeroCardComponent(heroService, route, location, router) {
        this.heroService = heroService;
        this.route = route;
        this.location = location;
        this.router = router;
    }
    HeroCardComponent.prototype.onBackClick = function () {
        this.location.back();
    };
    HeroCardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap
            .switchMap(function (params) { return _this.heroService.getHero(+params.get('id')); })
            .subscribe(function (hero) { return _this.clickedHero = hero; });
    };
    HeroCardComponent.prototype.goToDetail = function () {
        this.router.navigate(['/detail', this.clickedHero.id]);
    };
    __decorate([
        core_1.Input()
    ], HeroCardComponent.prototype, "clickedHero");
    HeroCardComponent = __decorate([
        core_1.Component({
            selector: 'app-hero-card',
            templateUrl: './hero-card.component.html',
            styleUrls: ['./hero-card.component.css']
        })
    ], HeroCardComponent);
    return HeroCardComponent;
}());
exports.HeroCardComponent = HeroCardComponent;
//# sourceMappingURL=hero-card.component.js.map