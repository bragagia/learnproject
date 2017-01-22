import { Injectable } from '@angular/core';
import { Card } from './card'

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

@Injectable()
export class CardService {
	getCards(): Promise<Card[]> {
		return Promise.resolve(CARDS);
	}
	getCard(id: number): Promise<Card> {
		return this.getCards().then(cards => cards.find(card => card.id === id));
	}
}
