import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
})
export class ListPokemonComponent implements OnInit {
  pokemonList : Pokemon[] ;

  constructor(private router: Router, private pokemonService: PokemonService) { }

  ngOnInit(): void {
    //this.pokemonList = this.pokemonService.getPokemonList();
    this.pokemonService.getPokemonList().subscribe(pokemonList => this.pokemonList = pokemonList);
  }

  selectPokemon(pokemon: Pokemon):void {
    console.log(`Vous avez cliquer sur le pokémon ${pokemon.name}`);
  }

  goToPokemon(pokemon: Pokemon):void {
    this.router.navigate(['pokemon/', pokemon.id]);
  }

  goToAddPokemon():void {
    this.router.navigate(['pokemon/add']);
  }
}
