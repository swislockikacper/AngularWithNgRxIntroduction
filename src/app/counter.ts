import { Action } from '@ngrx/store';

export const PLUS = 'PLUS';
export const MINUS = 'MINUS';
export const RESET = 'RESET';

export function counterReducer(state: number = 0, action: Action) {
  switch (action.type) {
    case PLUS:
      return state + 1;

    case MINUS:
      return state - 1;

    case RESET:
      return 0;

    default:
      return state;
  }
}
