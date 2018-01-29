import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AsideComponent } from './aside/aside.component';
import { MainContentComponent } from './main-content/main-content.component';
import { LoginComponent } from './login/login.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import {ReactiveFormsModule,FormsModule} from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import {HeroService} from "./service/hero.service";
import {HttpModule} from '@angular/http';

//路由相关
import {RouterModule,Routes} from '@angular/router';
import {HeroCardComponent} from "./hero-card/hero-card.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {LocateService} from "./service/locate-service.service";



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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AsideComponent,
    MainContentComponent,
    LoginComponent,
    FooterComponent,
    HeroDetailComponent,
    HeroCardComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    // RouterModule.forRoot(appRoutes)  //路由
    RouterModule.forRoot([
      {
        path: 'hero-card/:id',
        component: HeroCardComponent
      },
      {
        path:'detail/:id',
        component : HeroDetailComponent
      },
      {
        path : 'dashboard',
        component : DashboardComponent
      },
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      }
    ]),
    //HTTP服务
    HttpModule

  ],
  providers: [HeroService,LocateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
