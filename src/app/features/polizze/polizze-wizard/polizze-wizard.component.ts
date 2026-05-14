import { Component } from '@angular/core';
import { HasUnsavedChanges } from '../../../core/guards/unsaved-changes.guard';


@Component({
  selector: 'app-polizze-wizard',
  standalone: true,
  imports: [],
  templateUrl: './polizze-wizard.component.html',
  styleUrl: './polizze-wizard.component.scss'
})
export class PolizzeWizardComponent {
  hasUnsavedChanges(): boolean {
    return false; // Giorno 7: collegare al form dirty
  }
}