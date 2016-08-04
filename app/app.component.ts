/**
 * Created by Administrator on 2016/8/4.
 */
import {Component} from '@angular/core';
import {HeroService} from './hero.service';
import { ROUTER_DIRECTIVES } from '@angular/router';
import {Hero} from './hero';
@Component({
    selector:'my-app',
    template:`
    <h1>{{title}}</h1>
    <nav>
      <a [routerLink]="['/dashboard']" routerLinkActive="active">Dashboard</a>
      <a [routerLink]="['/heroes']" routerLinkActive="active">Heroes</a>
    </nav>
    <router-outlet></router-outlet>
    `,
    directives:[ROUTER_DIRECTIVES],
    providers:[HeroService]
})
export class AppComponent{
    title='Tour of Heroes';
}