import { RouterLink } from '@angular/router';
import { Recipe } from './../../interfaces/idata';
import { Component, Input } from '@angular/core';
import { DecimalPipe } from '@angular/common';

@Component({
    selector: 'app-card',
    imports: [RouterLink, DecimalPipe],
    templateUrl: './card.html',
    styleUrl: './card.css'
})
export class Card {
    @Input() data!: Recipe;
}
