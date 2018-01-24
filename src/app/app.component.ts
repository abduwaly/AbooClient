import { Component,OnInit } from '@angular/core';
import {Hero} from "./entity/hero";
import { HeroService } from './service/hero.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HeroService],
})
export class AppComponent implements OnInit{

  ngOnInit() : void{
    this.getHeroes();
  }

  title = 'Angular Hero Program!';
  heroes : Hero[];
  selectedHero : Hero;
  giveIt2detail = "This is prm from father to child module!";

  constructor(private heroService: HeroService) { }

  onSelect(hero : Hero) : void{
    this.selectedHero = hero;
  }

  getChildEvent(index){
    console.log(index);
    // this.data.splice(index,1);
  }

  // getHeroes(): void {
  //   this.heroes = this.heroService.getHeroes();
  // }

  getHeroes(): void {
    //this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
  }


}


