import { HEROES } from './../mock-hero';
import { Hero } from './../hero';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  selectedHero: Hero;
  heroes = HEROES;

  constructor() {}

  ngOnInit() {
    // this.selectedHero = this.heroes[0];
  }

  selectHero(hero: Hero) {
    this.selectedHero = hero;
  }
}
