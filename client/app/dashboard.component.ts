import { Component } from '@angular/core';
import { Card } from './card';
import { CardService } from './card.service';

@Component({
	moduleId: module.id,
	selector: 'my-dashboard',
	templateUrl: `dashboard.component.html`
})
export class DashboardComponent {
	cards: Card[];

	constructor(private cardService: CardService) { }

	ngOnInit(): void {
		this.cardService.getCards().then(cards => this.cards = cards.slice(1, 5));
	}
}
