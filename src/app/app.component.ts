import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { PLUS, MINUS, RESET } from './counter';
import AppState from './AppState';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  counter: Observable<number>;

  constructor(private store: Store<AppState>) {
    this.counter = store.select('counter');
  }

  plus = () => this.store.dispatch({ type: PLUS });

	minus = () => this.store.dispatch({ type: MINUS });

	reset = () => this.store.dispatch({ type: RESET });
}
