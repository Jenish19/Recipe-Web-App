import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipe: Recipe[] = [
    new Recipe("Recipe One", "Recipe description goes here ", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzRuawcuNyvX_0CL3dHx-fOzkBrXqscCoSUA&usqp=CAU"),
    new Recipe("Recipe Two", "Recipe description goes here ", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwhuDBEM9fk2g8n435rxK5Uk6hVLOMOfgr9A&usqp=CAU")
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
