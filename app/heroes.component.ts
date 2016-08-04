/**
 * Created by Administrator on 2016/8/3.
 */
import {Component,OnInit} from '@angular/core';
import {Hero} from './hero';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroService} from './hero.service';

@Component({
    selector:'my-heroes',
    template:
    `<h1>{{title}}</h1>
    <h2>My Heroes</h2>
    <ul class="heroes">
    <li *ngFor="let hero of heroes"[class.selected]="hero === selectedHero" (click)="onSelect(hero)">
    <span class="badge">{{hero.id}}</span> {{hero.name}}
    </li>
    </ul>
    <my-hero-detail [hero]="selectedHero"></my-hero-detail>
    `,
    directives:[HeroDetailComponent]

})
export class HeroesComponent implements OnInit{
    title = 'Tour of Heroes';
    heroes: Hero[];
    selectedHero: Hero;
    constructor(private heroService: HeroService) { }
    getHeroes() {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }
    ngOnInit() {
        console.log(1);
        this.getHeroes();
    }
    onSelect(hero: Hero) { this.selectedHero = hero; }
}