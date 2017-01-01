import { Component } from '@angular/core';

export class Card {
	id: number;
	question: string;
	answer: string;
}

@Component({
  selector: 'my-app',
  template:`
	<h1>{{title}}</h1>
  <div><label>id: </label>{{card.id}}</div>
  <div>
    <label>question: </label>
    <input value="{{card.question}}" placeholder="question">
    <label>answer: </label>
    <input value="{{card.answer}}" placeholder="answer">
  </div>
	`
})
export class AppComponent {
	title = 'Tour of Cards';
	card: Card = {
		id: 1,
		question: 'What is ?',
		answer: 'Yes'
	};
}
