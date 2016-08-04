/**
 * Created by Administrator on 2016/8/4.
 */
import {Component,Input} from '@angular/core';
import {Hero} from './hero';
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
export class HeroDetailComponent{
    @Input()
    hero:Hero;
}