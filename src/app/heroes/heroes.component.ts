import { Component, OnInit } from '@angular/core'
import { Hero } from '../hero'
import { HeroService } from '../hero.service'
import { MessageService } from '../message.service'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = []
  selectedHero?: Hero

  constructor(
    private heroService: HeroService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    /**
     * コンストラクターではプロパティ定義などの簡単な初期化のみ
     * ngOnInitはAngularがこのcomponentインスタンスを生成したあと、適切したタイミングで呼び出される
     */
    this.getHeroes()
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`)
  }

  getHeroes(): void {
    // this.heroes = this.heroService.getHeroes()
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes)
  }
}
