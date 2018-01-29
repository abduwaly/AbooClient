"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var platform_browser_1 = require('@angular/platform-browser');
var core_1 = require('@angular/core');
var app_component_1 = require('./app.component');
var header_component_1 = require('./header/header.component');
var aside_component_1 = require('./aside/aside.component');
var main_content_component_1 = require('./main-content/main-content.component');
var login_component_1 = require('./login/login.component');
var hero_detail_component_1 = require('./hero-detail/hero-detail.component');
var forms_1 = require('@angular/forms');
var footer_component_1 = require('./footer/footer.component');
var hero_service_1 = require("./service/hero.service");
var http_1 = require('@angular/http');
//路由相关
var router_1 = require('@angular/router');
var hero_card_component_1 = require("./hero-card/hero-card.component");
var dashboard_component_1 = require("./dashboard/dashboard.component");
var locate_service_service_1 = require("./service/locate-service.service");
//
// const appRoutes:Routes = [
//   {path:'',redirectTo:'main-content',pathMatch:'full'},
//   {path:'main-content',component:MainContentComponent},
//   {path:'login',loadChildren : () => new Promise(resolve=>{
//     (require as any).ensure([],(require : any)=>{
//       resolve(require('./login/login.component').LoginComponent);
//     })
//   })}
// ]
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                header_component_1.HeaderComponent,
                aside_component_1.AsideComponent,
                main_content_component_1.MainContentComponent,
                login_component_1.LoginComponent,
                footer_component_1.FooterComponent,
                hero_detail_component_1.HeroDetailComponent,
                hero_card_component_1.HeroCardComponent,
                dashboard_component_1.DashboardComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.ReactiveFormsModule,
                forms_1.FormsModule,
                // RouterModule.forRoot(appRoutes)  //路由
                router_1.RouterModule.forRoot([
                    {
                        path: 'hero-card/:id',
                        component: hero_card_component_1.HeroCardComponent
                    },
                    {
                        path: 'detail/:id',
                        component: hero_detail_component_1.HeroDetailComponent
                    },
                    {
                        path: 'dashboard',
                        component: dashboard_component_1.DashboardComponent
                    },
                    {
                        path: '',
                        redirectTo: '/dashboard',
                        pathMatch: 'full'
                    }
                ]),
                //HTTP服务
                http_1.HttpModule
            ],
            providers: [hero_service_1.HeroService, locate_service_service_1.LocateService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map