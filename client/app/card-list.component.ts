import { Component } from '@angular/core';
import { Card } from './card';
import { CardDetailComponent } from './card-detail.component';
import { CardService } from './card.service';

@Component({
	selector: 'my-card-list',
	template:`
	<h2>My Cards</h2>
	<ul class="cards">
	<li *ngFor="let card of cards" (click)="onSelect(card)" [class.selected]="card === selectedCard">
	<span class="badge">{{card.id}}</span> {{card.question}} {{card.answer}}
	</li>
	</ul>

	<div *ngIf="selectedCard">
	<my-card-detail [card]="selectedCard"></my-card-detail>
	</div>
	`,
	styles: [`
		.selected {
		background-color: #CFD8DC !important;
		color: white;
		}
		.cards {
		margin: 0 0 2em 0;
		list-style-type: none;
		padding: 0;
		width: 15em;
		}
		.cards li {
		cursor: pointer;
		position: relative;
		left: 0;
		background-color: #EEE;
		margin: .5em;
		padding: .3em 0;
		height: 1.6em;
		border-radius: 4px;
		}
		.cards li.selected:hover {
		background-color: #BBD8DC !important;
		color: white;
		}
		.cards li:hover {
		color: #607D8B;
		background-color: #DDD;
		left: .1em;
		}
		.cards .text {
		position: relative;
		top: -3px;
		}
		.cards .badge {
		display: inline-block;
		font-size: small;
		color: white;
		padding: 0.8em 0.7em 0 0.7em;
		background-color: #607D8B;
		line-height: 1em;
		position: relative;
		left: -1px;
		top: -4px;
		height: 1.8em;
		margin-right: .8em;
		border-radius: 4px 0 0 4px;
		}
		`],
})
export class CardListComponent {
	constructor(private cardService: CardService) { }
	ngOnInit(): void {
		this.getHeroes();
	}
	selectedCard: Card;
	cards: Card[];
	onSelect(card: Card): void {
		this.selectedCard = card;
	};
	getHeroes(): void {
		this.cardService.getCards().then(cards => this.cards = cards);
	};
}