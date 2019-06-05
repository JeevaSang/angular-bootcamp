import { Component } from '@angular/core';

@Component({
    //Meta Data
    //html custom tag name
    selector: 'app-root', //<app-root></app-root>

    //view
    templateUrl: 'app.component.html',

    //scopped styles
    styleUrls: ['app.component.css']
})

export class AppComponent {

    //MVW => Model View Whatever
    //MVC => Model View Component

    //models
    //type inference from assignment/Initialization
    appTitle: string = 'Product app';
    address = { city: 'chennai', state: 'tamilnadu' }

    constructor() {
        console.log('App component create')
    }

    //handler method for custom event
    contactHandler(address: any) {
        alert(address.city)
    }
}
