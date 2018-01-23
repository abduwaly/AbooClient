/**
 * Created by Levi on 2018/1/19.
 */
import { Component,Input,SimpleChanges,OnChanges,Output,EventEmitter } from '@angular/core';
import {Hero} from "../entity/hero";

@Component({
  selector : 'app-hero-detail',
  templateUrl : './hero-detail.component.html',
  styleUrls : ['./hero-detail.component.css']
})

export class HeroDetailComponent implements OnChanges{
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
}
