import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Nav } from "../components/nav/nav";
import { Footer } from "../components/footer/footer";

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, Nav, Footer],
    templateUrl: './app.html',
    styleUrl: './app.css'
})
export class App {
    Food = {
        vegetables: [
            "carrot", "broccoli", "asparagus", "cauliflower", "corn", "cucumber",
            "green pepper", "lettuce", "mushrooms", "onion", "potato", "pumpkin",
            "red pepper", "tomato", "beetroot", "brussel sprouts", "peas", "zucchini",
            "radish", "sweet potato", "artichoke", "leek", "cabbage", "celery",
            "chili", "green bean"
        ],

        herbsSpices: [
            "garlic", "basil", "coriander", "parsley", "dill",
            "rosemary", "oregano", "cinnamon", "saffron"
        ],

        legumes: ["bean", "chickpea", "lentil"],

        fruits: [
            "apple", "apricot", "avocado", "banana", "blackberry", "blackcurrant",
            "blueberry", "boysenberry", "cherry", "coconut", "fig", "grape",
            "grapefruit", "kiwifruit", "lemon", "lime", "lychee", "mandarin",
            "mango", "melon", "nectarine", "orange", "papaya", "passion fruit",
            "peach", "pear", "pineapple", "plum", "pomegranate", "quince",
            "raspberry", "strawberry", "watermelon"
        ],

        dishes: [
            "salad", "pizza", "pasta", "popcorn", "lobster", "steak", "bbq", "pudding",
            "hamburger", "pie", "cake", "sausage", "tacos", "kebab", "poutine",
            "seafood", "chips", "fries", "masala", "paella", "som tam", "chicken",
            "toast", "marzipan", "tofu", "ketchup", "hummus", "maple syrup",
            "parma ham", "fajitas", "champ", "lasagna", "poke", "chocolate",
            "croissant", "arepas", "bunny chow", "pierogi", "donuts", "rendang",
            "sushi", "ice cream", "duck", "curry"
        ],

        meats: [
            "beef", "goat", "lamb", "turkey", "pork", "fish", "crab",
            "bacon", "ham", "pepperoni", "salami", "ribs"
        ],
    }

}
