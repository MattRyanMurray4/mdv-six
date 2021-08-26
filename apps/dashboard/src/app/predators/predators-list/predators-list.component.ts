import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Predator } from '@animals/api-interfaces';

@Component({
  selector: 'animals-predators-list',
  templateUrl: './predators-list.component.html',
  styleUrls: ['./predators-list.component.scss'],
})
export class PredatorsListComponent {
  @Input() predators: Predator[] | null;
  @Input() readonly = false;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
}
