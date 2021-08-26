import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { Predator } from '@animals/api-interfaces';

@Component({
  selector: 'animals-predator-details',
  templateUrl: './predator-details.component.html',
  styleUrls: ['./predator-details.component.scss'],
})
export class PredatorDetailsComponent {
  currentPredator: Predator;
  originalName: string;

  @Input() set predator(value: Predator | null) {
    if (value) this.originalName = value.name;
    this.currentPredator = Object.assign({}, value);
  }
  @Input() form: FormGroup;

  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();

  save(predator: Predator) {
    this.saved.emit(predator);
  }

  cancel() {
    this.cancelled.emit();
  }

  saveForm(formDirective: FormGroupDirective) {
    if (this.form.invalid) return;
    this.saved.emit(formDirective.value);
    formDirective.resetForm();
  }
}
