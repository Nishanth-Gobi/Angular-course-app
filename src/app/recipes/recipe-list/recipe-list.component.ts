import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Nish', 'A simple test', 'https://media.self.com/photos/61e9dae8808d098c8ccc3b58/1:1/w_768,c_limit/15-Bean-Soup-Vegetarian.jpg')
  ];

  @Output() recipeWasSelected = new EventEmitter<Recipe> ();

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe){

    this.recipeWasSelected.emit(recipe);
  }
}
