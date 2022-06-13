import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styles: [
  ]
})
export class DetailPokemonComponent implements OnInit {

  pokemonList: Pokemon[];
  pokemon: Pokemon | undefined;
  constructor(private route: ActivatedRoute, private router : Router, private pokemonService: PokemonService) { }

  ngOnInit(): void {
    const pokemonId: string|null = this.route.snapshot.paramMap.get('id');
    //this.pokemon = this.pokemonService.getPokemonById(+pokemonId!);
    this.pokemonService.getPokemonById(+pokemonId!).subscribe(pokemon => this.pokemon = pokemon);

  }
  deletePokemon(pokemon: Pokemon){
    this.pokemonService.deletePokemonById(pokemon.id).subscribe(() => this.goBack());
  }
  goBack():void {
    this.router.navigate(['pokemons']);
  }
  
  goToEditPokemon(pokemon: Pokemon) {
    this.router.navigate(['edit/pokemon', pokemon.id]);
  }
}
