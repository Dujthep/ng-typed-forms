import { MenuItem, MenuState } from './store/models/menu.model';
import { Injectable, NgModule } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterModule, RouterStateSnapshot, Routes, TitleStrategy } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AddMenuItemAction } from './store/actions/menu.action';

@Injectable({providedIn: 'root'})
export class TemplatePageTitleStrategy extends TitleStrategy {

  menuItem$: Observable<MenuItem> = this.store.select((store) => store.menus);

  constructor(
    private readonly title: Title,
    private store: Store<MenuState>
  ) {
    super();
  }

  override updateTitle(routerState: RouterStateSnapshot) {
    const url = routerState.url;
    const pageName = this.buildTitle(routerState);
    if (pageName !== undefined) {
      this.store.dispatch(new AddMenuItemAction({
        url: url,
        name: pageName
      }))
    }
  }
}

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', loadChildren: () => import('./components/components.module').then(m => m.ComponentsModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    {
      provide: TitleStrategy,
      useClass: TemplatePageTitleStrategy
    }
  ]
})
export class AppRoutingModule { }