import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://cdn-image.foodandwine.com/sites/default/files/styles/medium_2x/public/huli-huli-chicken-wings-ft-recipe0619.jpg'),
    new Recipe('Test Recipe 2', 'This is simply another test!', 'https://cdn-image.foodandwine.com/sites/default/files/styles/medium_2x/public/huli-huli-chicken-wings-ft-recipe0619.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
