import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Food, FoodType } from '../../interfaces/idata';


@Component({
    selector: 'app-home',
    imports: [RouterLink],
    templateUrl: './home.html',
    styleUrl: './home.css'
})
export class Home {
    Food: FoodType = Food

    foodIcons: { [key: string]: string } = {
        // VEGETABLES
        carrot: "fa-solid fa-carrot",
        broccoli: "fa-solid fa-leaf",
        asparagus: "fa-solid fa-leaf",
        cauliflower: "fa-solid fa-leaf",
        corn: "fa-solid fa-leaf",
        cucumber: "fa-solid fa-leaf",
        "green pepper": "fa-solid fa-pepper-hot",
        lettuce: "fa-solid fa-leaf",
        mushrooms: "fa-solid fa-leaf",    // بدل mushroom (Pro) نستخدم leaf
        onion: "fa-solid fa-leaf",        // بدل onion (Pro) نستخدم leaf
        potato: "fa-solid fa-leaf",
        pumpkin: "fa-solid fa-leaf",
        "red pepper": "fa-solid fa-pepper-hot",
        tomato: "fa-solid fa-leaf",
        beetroot: "fa-solid fa-leaf",
        "brussel sprouts": "fa-solid fa-leaf",
        peas: "fa-solid fa-leaf",
        zucchini: "fa-solid fa-leaf",
        radish: "fa-solid fa-leaf",
        "sweet potato": "fa-solid fa-leaf",
        artichoke: "fa-solid fa-leaf",
        leek: "fa-solid fa-leaf",
        cabbage: "fa-solid fa-leaf",
        celery: "fa-solid fa-leaf",
        chili: "fa-solid fa-pepper-hot",
        "green bean": "fa-solid fa-leaf",

        // HERBS & SPICES
        garlic: "fa-solid fa-leaf",
        basil: "fa-solid fa-leaf",
        coriander: "fa-solid fa-leaf",
        parsley: "fa-solid fa-leaf",
        dill: "fa-solid fa-leaf",
        rosemary: "fa-solid fa-leaf",
        oregano: "fa-solid fa-leaf",
        cinnamon: "fa-solid fa-pepper-hot",
        saffron: "fa-solid fa-leaf",

        // LEGUMES
        bean: "fa-solid fa-leaf",
        chickpea: "fa-solid fa-leaf",
        lentil: "fa-solid fa-leaf",

        // FRUITS
        apple: "fa-solid fa-apple-whole",
        apricot: "fa-solid fa-leaf",
        avocado: "fa-solid fa-leaf",
        banana: "fa-solid fa-leaf",
        blackberry: "fa-solid fa-leaf",
        blackcurrant: "fa-solid fa-leaf",
        blueberry: "fa-solid fa-leaf",
        boysenberry: "fa-solid fa-leaf",
        cherry: "fa-solid fa-leaf",   // بدل cherry (Pro)
        coconut: "fa-solid fa-leaf",
        fig: "fa-solid fa-leaf",
        grape: "fa-solid fa-leaf",    // بدل wine-bottle
        grapefruit: "fa-solid fa-lemon",
        kiwifruit: "fa-solid fa-leaf",
        lemon: "fa-solid fa-lemon",
        lime: "fa-solid fa-lemon",
        lychee: "fa-solid fa-leaf",
        mandarin: "fa-solid fa-lemon",
        mango: "fa-solid fa-leaf",
        melon: "fa-solid fa-leaf",
        nectarine: "fa-solid fa-leaf",
        orange: "fa-solid fa-lemon",
        papaya: "fa-solid fa-leaf",
        "passion fruit": "fa-solid fa-leaf",
        peach: "fa-solid fa-leaf",
        pear: "fa-solid fa-leaf",
        pineapple: "fa-solid fa-leaf",
        plum: "fa-solid fa-leaf",
        pomegranate: "fa-solid fa-leaf",
        quince: "fa-solid fa-leaf",
        raspberry: "fa-solid fa-leaf",
        strawberry: "fa-solid fa-leaf",
        watermelon: "fa-solid fa-leaf",

        // DISHES
        salad: "fa-solid fa-bowl-food",
        pizza: "fa-solid fa-pizza-slice",
        pasta: "fa-solid fa-bowl-food",
        popcorn: "fa-solid fa-bowl-food",
        lobster: "fa-solid fa-fish",
        steak: "fa-solid fa-drumstick-bite",
        bbq: "fa-solid fa-fire",
        pudding: "fa-solid fa-bowl-food",
        hamburger: "fa-solid fa-burger",
        pie: "fa-solid fa-utensils",         // بدل pie (Pro)
        cake: "fa-solid fa-cake-candles",
        sausage: "fa-solid fa-hotdog",
        tacos: "fa-solid fa-bowl-food",
        kebab: "fa-solid fa-utensils",
        poutine: "fa-solid fa-bowl-food",
        seafood: "fa-solid fa-fish",
        chips: "fa-solid fa-bowl-food",
        fries: "fa-solid fa-bowl-food",
        masala: "fa-solid fa-bowl-food",
        paella: "fa-solid fa-utensils",
        "som tam": "fa-solid fa-utensils",
        chicken: "fa-solid fa-drumstick-bite",
        toast: "fa-solid fa-bread-slice",
        marzipan: "fa-solid fa-utensils",
        tofu: "fa-solid fa-utensils",
        ketchup: "fa-solid fa-bottle-droplet",
        hummus: "fa-solid fa-utensils",
        "maple syrup": "fa-solid fa-bottle-droplet",
        "parma ham": "fa-solid fa-bacon",     // ملاحظة: fa-bacon أحيانًا يكون Pro؟ لازم تشيك نسختك
        fajitas: "fa-solid fa-utensils",
        champ: "fa-solid fa-utensils",
        lasagna: "fa-solid fa-utensils",
        poke: "fa-solid fa-utensils",
        chocolate: "fa-solid fa-ice-cream",
        croissant: "fa-solid fa-utensils",
        arepas: "fa-solid fa-utensils",
        "bunny chow": "fa-solid fa-utensils",
        pierogi: "fa-solid fa-utensils",
        donuts: "fa-solid fa-utensils",        // بدل donut (Pro)
        rendang: "fa-solid fa-utensils",
        sushi: "fa-solid fa-fish",
        "ice cream": "fa-solid fa-ice-cream",
        duck: "fa-solid fa-drumstick-bite",
        curry: "fa-solid fa-utensils",

        // MEATS
        beef: "fa-solid fa-drumstick-bite",
        goat: "fa-solid fa-drumstick-bite",
        lamb: "fa-solid fa-drumstick-bite",
        turkey: "fa-solid fa-drumstick-bite",
        pork: "fa-solid fa-drumstick-bite",
        fish: "fa-solid fa-fish",
        crab: "fa-solid fa-fish",
        bacon: "fa-solid fa-bacon",
        ham: "fa-solid fa-bacon",
        pepperoni: "fa-solid fa-bacon",
        salami: "fa-solid fa-bacon",
        ribs: "fa-solid fa-drumstick-bite",
    };


    getIcon(item: string): string {
        return this.foodIcons[item];
    }
}
