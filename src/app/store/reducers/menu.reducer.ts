import { Action } from '@ngrx/store';
import { MenuAction, MenuActionType } from '../actions/menu.action';
import { MenuItem } from '../models/menu.model';

const initialState: MenuItem = {
  url: '',
  name: '',
};
export const menuReducer = (state = initialState, action: Action) => {
  const menuAction = action as MenuAction;
  switch (menuAction.type) {
    case MenuActionType.ADD_ITEM:
      state = menuAction.payload;
      return state;
    default:
      return state;
  }
};
