import { Action } from "@ngrx/store";
import { MenuItem } from "../models/menu.model";

export enum MenuActionType {
    ADD_ITEM = 'SET_MENU',
  }
  export class AddMenuItemAction implements Action {
    readonly type = MenuActionType.ADD_ITEM;
    constructor(public payload: MenuItem) {}
  }
  export type MenuAction = AddMenuItemAction;