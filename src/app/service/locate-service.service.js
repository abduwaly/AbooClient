"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by Levi on 2018/1/29.
 */
var core_1 = require('@angular/core');
require('rxjs/add/operator/toPromise');
var LocateService = (function () {
    function LocateService(http) {
        this.http = http;
        this.blogUrl = 'blog/list';
    }
    LocateService.prototype.getLocation = function () {
        return this.http.get(this.blogUrl)
            .toPromise()
            .then(function (response) { return console.log("??????????????", response); })
            .catch(this.handleError);
    };
    LocateService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    LocateService = __decorate([
        core_1.Injectable()
    ], LocateService);
    return LocateService;
}());
exports.LocateService = LocateService;
//# sourceMappingURL=locate-service.service.js.map