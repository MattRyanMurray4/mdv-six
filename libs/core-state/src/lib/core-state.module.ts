import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PredatorFacade } from './predators/predators.facade';

@NgModule({
  imports: [CommonModule],
  providers: [PredatorFacade],
})
export class CoreStateModule {}
