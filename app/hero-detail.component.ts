/**
 * Created by Administrator on 2016/8/4.
 */
import {Component,Input,OnInit,OnDestroy} from '@angular/core';
import {Hero} from './hero';
import {ActivatedRoute} from '@angular/router';
import {HeroService} from './hero.service';

@Component({
    selector:'my-hero-detail',
    template:`
    <div *ngIf="hero">
        <h2>{{hero.name}}deatils!</h2>
        <div><label>id:</label>{{hero.id}}</div>
        <div>
            <label>name:</label>
            <input [(ngModel)]="hero.name" placeholder="name">
         </div>
    </div>
    `
})
export class HeroDetailComponent implements OnInit,OnDestroy{
    constructor(
        private heroService:HeroService,
        private route:ActivatedRoute
    ){}
    ngOnInit(){
        this.sub=this.route.params.subscribe(params =>{
            let id=+params['id'];
            this.heroService.getHero(id)
            .then(hero =>this.hero=hero);
        })
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}