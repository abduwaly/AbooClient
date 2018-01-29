import { Component, Input, OnInit } from '@angular/core';
import {Hero} from "../entity/hero";
import { ActivatedRoute, ParamMap,Router } from '@angular/router';
import { Location }                 from '@angular/common';
import {HeroService} from "../service/hero.service";
import 'rxjs/add/operator/switchMap';

@Component({
  selector : 'app-hero-card',
  templateUrl : './hero-card.component.html',
  styleUrls : ['./hero-card.component.css']
})


export class HeroCardComponent implements OnInit{

  @Input() clickedHero : Hero;

  onBackClick() : void {
    this.location.back();
  }

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location,
    private router : Router
  ) {}

  ngOnInit() : void{
    this.route.paramMap
      .switchMap((params: ParamMap) => this.heroService.getHero(+params.get('id')))
      .subscribe(hero => this.clickedHero = hero);
  }

  goToDetail() : void{
    this.router.navigate(['/detail', this.clickedHero.id]);
  }


}

