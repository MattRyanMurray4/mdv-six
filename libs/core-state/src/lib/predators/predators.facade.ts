import { NotifyService, PredatorsService } from '@animals/core-data';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Predator } from '@animals/api-interfaces';
import { take, tap } from 'rxjs/operators';
@Injectable({ providedIn: 'root' })
export class PredatorFacade {
  private _allPredatorSource$ = new BehaviorSubject<Predator[]>([]);
  allPredator$: Observable<Predator[]> =
    this._allPredatorSource$.asObservable();
  private _selectedPredatorSource$ = new BehaviorSubject<Predator>(
    {} as Predator
  );
  selectedPredator$: Observable<Predator> =
    this._selectedPredatorSource$.asObservable();

  constructor(
    private predatorsService: PredatorsService,
    private notify: NotifyService
  ) {}

  loadPredators() {
    this.predatorsService
      .all()
      .pipe(
        tap((predators) => this._allPredatorSource$.next(predators)),
        take(1)
      )
      .subscribe();
  }

  selectPredator(predatorId: string) {
    return this.predatorsService
      .find(predatorId)
      .pipe(
        tap((predatorId) => this._selectedPredatorSource$.next(predatorId)),
        take(1)
      )
      .subscribe(() => {
        this.loadPredators();
      });
  }

  createPredator(predator: Predator) {
    return this.predatorsService
      .create(predator)
      .pipe(
        tap((predator) => this._selectedPredatorSource$.next(predator)),
        take(1)
      )
      .subscribe(() => {
        this.loadPredators();
        this.notify.notification(`Created ${predator.name} successfully!`);
      });
  }

  updatePredator(predator: Predator) {
    return this.predatorsService
      .update(predator)
      .pipe(
        tap((predator) => this._selectedPredatorSource$.next(predator)),
        take(1)
      )
      .subscribe(() => {
        this.loadPredators();
        this.notify.notification(`Updated ${predator.name} successfully!`);
      });
  }

  deletePredator(predator: Predator) {
    return this.predatorsService
      .delete(predator)
      .pipe(
        tap((predator) => this._selectedPredatorSource$.next(predator)),
        take(1)
      )
      .subscribe(() => {
        this.loadPredators();
        this.notify.notification(`Deleted ${predator.name} successfully!`);
      });
  }
}
