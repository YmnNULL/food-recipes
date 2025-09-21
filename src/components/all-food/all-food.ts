import { Component, inject, signal } from '@angular/core';
import { Food, FoodType, Recipe } from '../../interfaces/idata';
import { Recipes } from '../../services/recipes';
import { Card } from "../card/card";
import { Spinner } from "../spinner/spinner";
import { Error } from "../error/error";

@Component({
    selector: 'app-all-food',
    imports: [Card, Spinner, Error],
    templateUrl: './all-food.html',
    styleUrl: './all-food.css'
})
export class AllFood {
    Food: FoodType = Food;
    foodKeys = Object.keys(this.Food) as (keyof FoodType)[];
    selectedItem: string | null = null;
    private recipes = inject(Recipes);
    dataOfRecipes = signal<Recipe[]>([]);
    hideSpinner: boolean = false;
    error = signal<boolean>(false);

    selectItem(category: keyof FoodType, item: string) {
        if (this.hideSpinner) {
            this.hideSpinner = false;
        }
        this.selectedItem = item;

        this.recipes.getFoodDataByName(this.selectedItem).subscribe({
            next: (res) => {
                this.dataOfRecipes.set(res.recipes);
                this.hideSpinner = true;
                this.error.set(false);
            },
            error: (error) => {
                this.hideSpinner = true;
                this.error.set(true);
                console.log(error);
            }
        })
    }
}
