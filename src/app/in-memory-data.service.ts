import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
import { POKEMONS } from './pokemon/mock-pokemons';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

  //createDb(reqInfo?: RequestInfo | undefined): {} | Observable<{}> | Promise<{}> {
    createDb() {
      const pokemons = POKEMONS;
    return { pokemons };
  }
}
