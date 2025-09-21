import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recipes } from '../../services/recipes';
import { Recipe, Speacial } from '../../interfaces/idata';
import { Spinner } from "../spinner/spinner";

@Component({
    selector: 'app-special-dish',
    imports: [Spinner],
    templateUrl: './special-dish.html',
    styleUrl: './special-dish.css'
})
export class SpecialDish {

    private activatedRoute = inject(ActivatedRoute);
    private recipes = inject(Recipes);
    id!: string | null;
    specialDishData = signal<Speacial>({} as Speacial);
    hideSpinner: boolean = false;

    ngOnInit(): void {
        this.getNameOfFood();
        if (this.id) {
            this.recipes.getSpecificRecipeData(this.id).subscribe({
                next: (res) => {
                    this.specialDishData.set(res.recipe);
                    this.hideSpinner = true;
                },
                error: (error) => {
                    console.log(error);
                }
            });
        }
    }

    getNameOfFood() {
        this.activatedRoute.paramMap.subscribe({
            next: (res) => {
                this.id = res.get("id");
            }
        })
    }

}
