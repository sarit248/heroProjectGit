import { Component, OnInit } from '@angular/core';
import { HeroService } from '../../services/hero.service';
import { Hero } from '../../models/hero';
import { HEROES } from 'src/app/models/heroes';
import { ClickDirective } from 'src/app/click.directive';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];

  clickMessage: string;
  public call: string;
  isVisible = true;


  changeVisibility() {
    this.isVisible = !this.isVisible;
  }



  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.heroService.addHero({ name } as Hero).subscribe(hero => {
      this.heroes.push(hero);
    });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }



  onClickMe(): string {
    return this.clickMessage = 'you are my Hero!';
  }



  callPhone() {
    this.call = 'bla bla';
  }

  trackByHeroes(index: number, hero: Hero): number { // ???
    return hero.id;
  }

}

//   heroes = HEROES;
//   selectedHero: Hero;

//   constructor() { }

//   ngOnInit() {
//   }

//   onSelect(hero: Hero): void {
//     this.selectedHero = hero;
//   }
// }




