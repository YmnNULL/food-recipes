import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recipes } from '../../services/recipes';
import { Recipe } from '../../interfaces/idata';
import { Card } from "../card/card";
import { Spinner } from "../spinner/spinner";
import { Error } from "../error/error";

@Component({
    selector: 'app-specific-food',
    imports: [Card, Spinner, Error],
    templateUrl: './specific-food.html',
    styleUrl: './specific-food.css'
})
export class SpecificFood implements OnInit {

    private activatedRoute = inject(ActivatedRoute);
    private recipes = inject(Recipes);
    name: string | null = "";
    dataOfRecipes !: Recipe[];
    hideSpinner: boolean = false;
    error = signal<boolean>(false);


    ngOnInit(): void {
        this.getNameOfFood();
        if (this.name) {
            this.recipes.getFoodDataByName(this.name).subscribe({
                next: (res) => {
                    this.hideSpinner = true;
                    this.dataOfRecipes = res.recipes;
                },
                error: () => {
                    this.error.set(true);
                    this.hideSpinner = true;
                }
            });
        }
    }

    getNameOfFood() {
        this.activatedRoute.paramMap.subscribe({
            next: (res) => {
                this.name = res.get("id");
            }
        })
    }
}
