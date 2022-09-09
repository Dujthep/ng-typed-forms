import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { MenuState } from './store/models/menu.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ng-typed-forms';

  constructor(
    private store: Store<MenuState>
  ) {
    this.store.subscribe(r => this.title = r.menus.name);
  }
}
