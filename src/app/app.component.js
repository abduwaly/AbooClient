"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var hero_service_1 = require('./service/hero.service');
var AppComponent = (function () {
    function AppComponent(heroService) {
        this.heroService = heroService;
        this.title = 'Angular Hero Program!';
        this.giveIt2detail = "This is prm from father to child module!";
    }
    AppComponent.prototype.ngOnInit = function () {
        this.getHeroes();
    };
    AppComponent.prototype.onSelect = function (hero) {
        this.selectedHero = hero;
    };
    AppComponent.prototype.onGoClick = function (hero) {
        this.hero4Card = hero;
    };
    AppComponent.prototype.getChildEvent = function (index) {
        console.log(index);
        // this.data.splice(index,1);
    };
    // getHeroes(): void {
    //   this.heroes = this.heroService.getHeroes();
    // }
    AppComponent.prototype.getHeroes = function () {
        var _this = this;
        this.heroService.getHeroes().then(function (heroes) { return _this.heroes = heroes; });
        // this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css'],
            providers: [hero_service_1.HeroService]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map