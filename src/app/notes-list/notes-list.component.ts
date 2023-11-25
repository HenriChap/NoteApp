import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NOTES } from '../../notes';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-notes-list',
  standalone: true,
  imports: [CommonModule, NgFor],
  templateUrl: './notes-list.component.html',
  styleUrl: './notes-list.component.css'
})
export class NotesListComponent {
  notes = NOTES;
  isDone:boolean = false;
  actions(){
    this.isDone = !this.isDone;
  }
}
