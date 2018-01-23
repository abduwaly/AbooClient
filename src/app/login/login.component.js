"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
// import {RouterModule} from '@angular/router';
// import {CommonModule} from "@angular/common";
// import {LoginComponent} from './login.component'
var LoginComponent = (function () {
    function LoginComponent(fb) {
        this.fb = fb;
        this.formModel = this.fb.group({
            username: [(''), forms_1.Validators.required],
            password: [(''), forms_1.Validators.required]
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onSubmit = function () {
        /* 验证通过,进行下一步处理 */
        if (this.formModel.valid) {
            console.log(this.formModel.value);
        }
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.css']
        })
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//
// @NgModule({
//   imports:[
//     CommonModule,
//     RouterModule.forChild([
//       {path:'',component:LoginComponent}
//     ])
//   ],
//   declarations:[LoginComponent]
// })
//# sourceMappingURL=login.component.js.map