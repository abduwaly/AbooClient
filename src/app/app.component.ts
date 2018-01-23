import { Component } from '@angular/core';
import {Hero} from "./entity/hero";

const HEROES: Hero[] = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Hero Program!';
  heroes = HEROES;
  selectedHero : Hero;
  giveIt2detail = "This is prm from father to child module!";

  onSelect(hero : Hero) : void{
    this.selectedHero = hero;
  }

  getChildEvent(index){
    console.log(index);
    // this.data.splice(index,1);
  }

}


