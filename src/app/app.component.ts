import { Component, VERSION } from '@angular/core';

import { interval } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //emit value in sequence every 1 second
  constructor() {

  }
}
