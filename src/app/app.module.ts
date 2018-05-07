import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { HighlightDirective } from './highlight.directive';
import { NotePipe } from './note.pipe';

@NgModule({
	declarations: [ AppComponent, CardComponent, HighlightDirective, NotePipe ],
	imports: [ BrowserModule, HttpClientModule ],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
