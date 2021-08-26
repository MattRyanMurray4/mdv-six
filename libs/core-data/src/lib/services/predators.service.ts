import { mapTo } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Predator } from '@animals/api-interfaces';

export const BASE_URL = 'https://db-30x30.herokuapp.com/';

@Injectable({
  providedIn: 'root',
})
export class PredatorsService {
  private model = 'predators';
  constructor(private httpClient: HttpClient) {}

  all() {
    return this.httpClient.get<Predator[]>(this.getUrl());
  }

  find(id: string) {
    return this.httpClient.get<Predator>(this.getUrlById(id));
  }

  create(predator: Predator) {
    return this.httpClient.post<Predator>(this.getUrl(), predator);
  }

  update(predator: Predator) {
    return this.httpClient.patch<Predator>(
      this.getUrlById(predator.id),
      predator
    );
  }

  delete(predator: Predator) {
    return this.httpClient
      .delete<Predator>(this.getUrlById(predator.id))
      .pipe(mapTo(predator));
  }

  private getUrl() {
    return `${BASE_URL}${this.model}`;
  }

  private getUrlById(id: string) {
    return `${this.getUrl()}/${id}`;
  }
}
