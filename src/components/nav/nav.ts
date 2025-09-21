import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-nav',
    imports: [RouterLink],
    templateUrl: './nav.html',
    styleUrl: './nav.css'
})
export class Nav {

    @ViewChild("icon") icon!: ElementRef;

    changeIcon() {
        this.icon.nativeElement.classList.toggle("fa-bars");
        this.icon.nativeElement.classList.toggle("fa-xmark");

    }

}
