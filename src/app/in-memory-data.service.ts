import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api'
import { Hero } from './hero'

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {
  createDb() {
    const heroes = [
      { id:11, name: 'Naruto' },
      { id:12, name: 'Bad man' },
      { id: 13, name: 'Super man' },
      { id: 14, name: 'annpan man' },
      { id: 15, name: 'Luffy' },
      { id: 16, name: 'zoro' },
      { id: 17, name: 'conann' },
      { id: 18, name: 'amuro' },
      { id: 19, name: 'odai wo kudasai' },
      { id: 20, name: 'last' }
    ]
    return { heroes }
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11
  }
}
