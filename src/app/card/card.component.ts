import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Note } from '../note.interface';

@Component({
	selector: 'app-card',
	templateUrl: './card.component.html',
	styleUrls: [ './card.component.css' ]
})
export class CardComponent implements OnInit {
	@Input() note: Note;
	@Output() deleteNote = new EventEmitter();
	constructor() {}

	ngOnInit() {}

	onChangeCheck(isChecked) {
		this.note.isChecked = isChecked;
	}

	onDeleteNote(id: Note) {
		this.deleteNote.emit(id);
	}
}
