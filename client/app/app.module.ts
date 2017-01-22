import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule }  from '@angular/router';

import { AppComponent }  from './app.component';
import { CardDetailComponent } from './card-detail.component';
import { CardListComponent } from './card-list.component';
import { DashboardComponent } from './dashboard.component';

import { CardService } from './card.service';

@NgModule({
	imports: [
		BrowserModule,
		FormsModule,
		RouterModule.forRoot([
			{
				path: '',
				redirectTo: 'dashboard',
				pathMatch: 'full'
			},
			{
				path: 'cards',
				component: CardListComponent
			},
			{
				path: 'dashboard',
				component: DashboardComponent
			},
			{
				path: 'detail/:id',
				component: CardDetailComponent
			}
		])
	],
	declarations: [ AppComponent, CardListComponent, CardDetailComponent, DashboardComponent ],
	bootstrap:    [ AppComponent ],
	providers:    [ CardService ],
})
export class AppModule { }
