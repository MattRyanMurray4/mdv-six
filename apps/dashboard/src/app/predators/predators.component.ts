import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { emptyPredator, Predator } from '@animals/api-interfaces';
import { PredatorFacade } from '@animals/core-state';
import { Observable } from 'rxjs';

@Component({
  selector: 'animals-predators',
  templateUrl: './predators.component.html',
  styleUrls: ['./predators.component.scss'],
})
export class PredatorsComponent implements OnInit {
  predators$: Observable<Predator[]> = this.predatorsFacade.allPredator$;
  selectedPredator$: Observable<Predator> =
    this.predatorsFacade.selectedPredator$;
  form: FormGroup;
  constructor(
    private predatorsFacade: PredatorFacade,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.initForm();
    this.predatorsFacade.loadPredators();
    this.reset();
  }

  selectPredator(predator: Predator) {
    this.predatorsFacade.selectPredator(predator.id);
    this.form.patchValue(predator);
  }

  reset() {
    this.selectPredator(emptyPredator);
    this.form.reset();
  }

  createPredator(predator: Predator) {
    this.predatorsFacade.createPredator(predator);
    this.reset();
  }

  updatePredator(predator: Predator) {
    this.predatorsFacade.updatePredator(predator);
    this.reset();
  }

  savePredator(predator: Predator) {
    predator.id
      ? this.predatorsFacade.updatePredator(predator)
      : this.predatorsFacade.createPredator(predator);
  }

  deletePredator(predator: Predator) {
    this.predatorsFacade.deletePredator(predator);
    this.reset();
  }

  cancel() {
    this.reset();
  }

  private initForm() {
    this.form = this.formBuilder.group({
      id: null,
      genesis: ['', Validators.required],
      name: ['', Validators.required],
      biome: ['', Validators.required],
      lifeSpan: ['', Validators.required],
      biteForce: [''],
    });
  }
}
