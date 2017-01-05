import { Component } from '@angular/core';
import { CardListComponent } from './card-list.component';

@Component({
	selector: 'my-app',
	template: `
	<h1>{{title}}</h1>
	<nav>
	<a routerLink="/dashboard">Dashboard</a>
	<a routerLink="/cards">Cards</a>
	</nav>
	<router-outlet></router-outlet>`,
})
export class AppComponent {
	title = 'Tour of Cards';
}
