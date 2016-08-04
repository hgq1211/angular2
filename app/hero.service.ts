/**
 * Created by Administrator on 2016/8/4.
 */
import {Injectable} from '@angular/core';
import {HEROES} from './mock-heroes';
import {Hero} from './hero';
@Injectable()
export class HeroService{
    getHeroes(){
        //this.heroes=this.heroService.getHeroes();
        return Promise.resolve(HEROES);
    }
}