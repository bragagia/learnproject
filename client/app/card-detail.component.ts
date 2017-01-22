import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { CardService } from './card.service';
import { Card } from './card';

import 'rxjs/add/operator/switchMap';

@Component({
	moduleId: module.id,
	selector: 'my-card-detail',
	templateUrl: `card-detail.component.html`
})

export class CardDetailComponent implements OnInit {
	@Input()
	card: Card;

	constructor(
		private cardService: CardService,
		private route: ActivatedRoute,
		private location: Location
	) { }

	ngOnInit(): void {
		this.route.params.switchMap((params: Params) =>
																this.cardService.getCard(+params['id']))
																.subscribe(card => this.card = card);
	};

	goBack(): void {
		this.location.back();
	};
}
