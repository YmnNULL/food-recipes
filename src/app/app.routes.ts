import { Routes } from '@angular/router';
import { Home } from '../components/home/home';
import { AllFood } from '../components/all-food/all-food';
import { SpecificFood } from '../components/specific-food/specific-food';
import { SpecialDish } from '../components/special-dish/special-dish';
import { NotFound } from '../components/not-found/not-found';

export const routes: Routes = [
    { path: "", component: Home, title: "Food Recipes" },
    { path: "home", component: Home },
    { path: "foods", component: AllFood, title: "All Food" },
    { path: "specificFood/:id", component: SpecificFood, title: "Our Food" },
    { path: "specialDish/:id", component: SpecialDish, title: "Special Dish" },
    {
        path: "about",
        loadComponent: () => import('../components/about/about').then(component => component.About),
        title: "About"
    },
    {
        path: "contactUs",
        loadComponent: () => import('../components/contact-us/contact-us').then(component => component.ContactUs),
        title: "Contact Us"
    },
    { path: "**", component: NotFound, title: "Not Found" },
];
