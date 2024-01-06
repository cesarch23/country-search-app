import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'countryApp';
  show = false;
  @ViewChild('drawer') drawer!: MatSidenav;

  open() {
    this.drawer.open();
    this.show = false;
  }
  close() {
    this.drawer.close();
    this.show = true;
  }
}
