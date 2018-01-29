/**
 * Created by Levi on 2018/1/19.
 */
import { Component,Input,SimpleChanges,OnChanges,Output,EventEmitter,OnInit } from '@angular/core';
import {Hero} from "../entity/hero";
import {HeroService} from "../service/hero.service";
import { ActivatedRoute, ParamMap,Router } from '@angular/router';
import { Location }                 from '@angular/common';

@Component({
  selector : 'app-hero-detail',
  templateUrl : './hero-detail.component.html',
  styleUrls : ['./hero-detail.component.css']
})

export class HeroDetailComponent implements OnChanges,OnInit{
  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location,
    private router : Router
  ) {}

  title = 'hero details'
  innerVal = "I'm inner Value";

  @Input() hero: Hero;
  @Input() anotherPrm : string;

  @Output() childEvent = new EventEmitter<any>();
  giveIt2Father(v){
    this.childEvent.emit(v);
  }

  ngOnChanges(changes: SimpleChanges){
    console.log(this.hero);
    console.log(changes['hero']);
  }
  ngOnInit() : void{
    this.route.paramMap
      .switchMap((params: ParamMap) => this.heroService.getHero(+params.get('id')))
      .subscribe(hero => this.hero = hero);
  }

}
