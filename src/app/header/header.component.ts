import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: 'header.component.html'
})

export class HeaderComponent implements OnInit {
    
    @Output() userChoice = new EventEmitter<boolean>();

    constructor() { }

    ngOnInit() { }

    onClickRecipe(){
        console.log("Recipe clicked!");
        this.userChoice.emit(true);
    }

    onClickShoppingList(){
        console.log("Shopping list clicked!");
        this.userChoice.emit(false);
    }
}