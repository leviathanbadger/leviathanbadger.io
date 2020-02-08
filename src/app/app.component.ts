import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'leviathanbadger-io';
    currentYear = new Date().getFullYear();
    condition: boolean = false;
}
