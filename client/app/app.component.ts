import { Component } from '@angular/core';

const CARDS: Card[] = [
	{ id: 11, question: 'Who 11 ?', answer: 'wou'},
	{ id: 12, question: 'Who 12 ?', answer: 'wou'},
	{ id: 13, question: 'Who 13 ?', answer: 'wou'},
	{ id: 14, question: 'Who 14 ?', answer: 'wou'},
	{ id: 15, question: 'Who 15 ?', answer: 'wou'},
	{ id: 16, question: 'Who 16 ?', answer: 'wou'},
	{ id: 17, question: 'Who 17 ?', answer: 'wou'},
	{ id: 18, question: 'Who 18 ?', answer: 'wou'},
	{ id: 19, question: 'Who 19 ?', answer: 'wou'},
	{ id: 20, question: 'Who 20 ?', answer: 'wou'},
];

export class Card {
	id: number;
	question: string;
	answer: string;
}

@Component({
	selector: 'my-app',
	template:`
	<h2>My Cards</h2>
	<ul class="cards">
	<li *ngFor="let card of cards" (click)="onSelect(card)" [class.selected]="card === selectedCard">
	<span class="badge">{{card.id}}</span> {{card.question}} {{card.answer}}
	</li>
	</ul>

	<div *ngIf="selectedCard">
	<h1>{{title}}</h1>
	<div>
	<label>id: </label>{{selectedCard.id}}
	<label>question: </label>{{selectedCard.question}}
	</div>
	<div>
	<label>question: </label>
	<input [(ngModel)]="selectedCard.question" placeholder="question">
	<label>answer: </label>
	<input value="{{selectedCard.answer}}" placeholder="answer">
	</div>
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
		`]
})
export class AppComponent {
	title = 'Tour of Cards';
	selectedCard: Card;
	cards = CARDS;
	onSelect(card: Card): void {
		this.selectedCard = card;
	};
}
