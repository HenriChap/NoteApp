import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NOTES } from '../../notes';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-add-note',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './add-note.component.html',
  styleUrl: './add-note.component.css'
})
export class AddNoteComponent {
  // Criação de um novo formulário com dois campos: 'title' e 'text'. Ambos são obrigatórios.
  addNoteForm = new FormGroup({
    title: new FormControl('', Validators.required),
    text: new FormControl('', Validators.required)
  });
  //criação de uma instância
  router = inject(Router);
  // Método para adicionar uma nova nota.
  addNote(){
    // Recupera o valor dos campos 'title' e 'text' do formulário. Se algum campo estiver vazio, atribui uma string vazia.
    let title = this.addNoteForm.value.title ?? '';
    let text = this.addNoteForm.value.text ?? '';
    // Verifica se o formulário é válido.
    if (this.addNoteForm.valid) {
      // Cria um array com todos os IDs das notas existentes.
      let ids = NOTES.map((a) => a.id);
      let maxId = 0;
      // Se existem IDs, encontra o maior.
      if (ids.length > 0) {
        maxId = Math.max(...ids)
      }
      // Cria uma nova nota com um ID que é o maior ID + 1, o título e o texto do formulário, e um campo 'isDone' definido como false (caso contrário da erro por ser diferente da interface Note).
      let newNote = {
        id: maxId + 1,
        title: title,
        text: text,
        isDone: false
      };
       // Adiciona a nova nota no fim do array de nota
      NOTES.push(newNote);
      this.addNoteForm.reset();
      this.router.navigateByUrl('/');
    }
  }
}
