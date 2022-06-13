import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { debounceTime, distinctUntilChanged, map, Observable, Subject, switchMap } from 'rxjs';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-search-pokemon',
  templateUrl: './search-pokemon.component.html',
  styles: [
  ]
})
export class SearchPokemonComponent implements OnInit {

  // {"a" .."ab".."abz".."ab".."abc"...}
  searchTerms = new Subject<String>();
  //pokemonList(a)..pokemonList(ab)..pokemonList(abz)..pokemonList(abc)
  pokemons$: Observable<Pokemon[]>;
  constructor(private router: Router, private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.pokemons$ = this.searchTerms.pipe(
      debounceTime(300),//delai de 300ms entre chaque requete
      distinctUntilChanged(),//param distincte
      // {......"ab"..........."abc"......}
      switchMap((term) => this.pokemonService.searchPokemonList(term))
      //switchMap faire la derniere recherche (ici avec abc)
      // {.....pokemonList(ab)............pokemonList(abc)......}
      //on peut use aussi mergeMap() ou concatMap()
    )
  }

  //on ajoute a..ab..abz..abc
  search(term: string) {
    this.searchTerms.next(term);
  }

  goToDetail(pokemon: Pokemon) {
    const link = ['/pokemon', pokemon.id];
    this.router.navigate(link);
  }

}
