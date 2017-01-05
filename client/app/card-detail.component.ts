import { Component, Input } from '@angular/core';
import { Card } from './card';

@Component({
	selector: 'my-card-detail',
	template: `
	<h1>{{title}}</h1>
	<div>
	<label>id: </label>{{card.id}}
	<label>question: </label>{{card.question}}
	</div>
	<div>
	<label>question: </label>
	<input [(ngModel)]="card.question" placeholder="question">
	<label>answer: </label>
	<input value="{{card.answer}}" placeholder="answer">
	</div>
	`
})

export class CardDetailComponent {
	@Input()
	card: Card;
}
