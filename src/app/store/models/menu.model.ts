export interface MenuItem {
  url: string;
  name: string;
}

export interface MenuState {
  readonly menus: MenuItem;
}
