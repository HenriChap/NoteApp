import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { NotesListComponent } from './app/notes-list/notes-list.component';
import { AddNoteComponent } from './app/add-note/add-note.component';
import { provideRouter, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: NotesListComponent },
  { path: 'new', component: AddNoteComponent },
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)],
});

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
