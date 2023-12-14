import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NOTES } from '../../notes';
import { NgFor } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-notes-list',
  standalone: true,
  imports: [CommonModule, NgFor, RouterModule],
  templateUrl: './notes-list.component.html',
  styleUrl: './notes-list.component.css'
})
export class NotesListComponent {
  notes = NOTES;
  actions(note: any){
    note.isDone = !note.isDone;
  }
}
