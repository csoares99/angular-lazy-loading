import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-lazy-loading-example';

  constructor(public router: Router){}

  openBookPage() {
    this.router.navigate(['book']);
  }
}
