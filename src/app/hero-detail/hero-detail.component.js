"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by Levi on 2018/1/19.
 */
var core_1 = require('@angular/core');
var HeroDetailComponent = (function () {
    function HeroDetailComponent() {
        this.title = 'hero details';
        this.innerVal = "I'm inner Value";
        this.childEvent = new core_1.EventEmitter();
    }
    HeroDetailComponent.prototype.giveIt2Father = function (v) {
        this.childEvent.emit(v);
    };
    HeroDetailComponent.prototype.ngOnChanges = function (changes) {
        console.log(this.hero);
        console.log(changes['hero']);
    };
    __decorate([
        core_1.Input()
    ], HeroDetailComponent.prototype, "hero");
    __decorate([
        core_1.Input()
    ], HeroDetailComponent.prototype, "anotherPrm");
    __decorate([
        core_1.Output()
    ], HeroDetailComponent.prototype, "childEvent");
    HeroDetailComponent = __decorate([
        core_1.Component({
            selector: 'app-hero-detail',
            templateUrl: './hero-detail.component.html',
            styleUrls: ['./hero-detail.component.css']
        })
    ], HeroDetailComponent);
    return HeroDetailComponent;
}());
exports.HeroDetailComponent = HeroDetailComponent;
//# sourceMappingURL=hero-detail.component.js.map