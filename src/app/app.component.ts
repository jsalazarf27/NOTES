import { Note } from './note.interface';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/Rx';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.css' ]
})
export class AppComponent {
	title = 'app';
	notes = [];
	notesFilter = [];
	itemsLeft: number;
	note: Note;
	data$;

	constructor(private http: HttpClient) {
		// this.notes = this.getJSON();
		this.getNotesAPI();
	}
	setNotesFilters() {
		this.notesFilter = this.notes;
	}
	checkedAll(isChecked: boolean) {
		this.notes.map((note) => (note.isChecked = isChecked));
		this.setNotesFilters();
	}

	addNote(input: string) {
		this.note = {
			description: input,
			isChecked: false
		};
		this.notes.splice(0, 0, this.note);
	}

	showAll() {
		this.notes = this.notesFilter;
	}

	showActive() {
		this.notes = this.notesFilter.filter((note) => !note.isChecked);
	}
	showComplete() {
		this.notes = this.notesFilter.filter((note) => note.isChecked);
	}
	clearComplete() {
		this.notes = this.notes.filter((note) => !note.isChecked);
		this.setNotesFilters();
	}

	setItemsLeft() {
		this.itemsLeft = this.notes.filter((note) => !note.isChecked).length;
	}

	onDeleteNote(item: {}) {
		const index: number = this.notes.indexOf(item);
		if (index !== -1) {
			this.notes.splice(index, 1);
		}
	}

	getNotesAPI() {
		this.data$ = this.http
			.get<any>(
				'https://gist.githubusercontent.com/jdjuan/165053e6cb479a840c88e3e94b33e724/raw/4542ef950b2b32fbe2eea0b3df0338ffe67eae12/todo.json'
			)
			.map((json) =>
				json.map(
					(data) =>
						(this.note = {
							description: data,
							isChecked: false
						})
				)
			)
			.subscribe((data) => {
				this.notes = data;
				this.setNotesFilters();
				this.setItemsLeft();
			});
	}
}
