/**
 * Created by Levi on 2018/1/29.
 */
import {Component} from '@angular/core';
import {HeroService} from "../service/hero.service";
import {LocateService} from "../service/locate-service.service";


@Component({
  selector : 'app-dashboard',
  templateUrl : './dashboard.component.html'
})

export class DashboardComponent{

  constructor(
    private heroService : HeroService,
    private locateService : LocateService
  ){
    this.locateService.getLocation().then(res => this.locInfo = res);
  }

  locInfo : any;

  // getMyLoc() : void{
  //   // this.heroService.getHeroes().then(heroes => console.log("@@@@####****",heroes));
  //   this.locateService.getLocation().then(res => this.locInfo = res);
  //
  // }

}
