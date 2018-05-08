import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/mergeMapTo';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/concat';
import { combineEpics } from 'redux-observable';
import {
    menuState,
    opacityZero,
    opacityOne,
    moveMenuOffScreen,
    moveMenuOnScreen,
} from './menu-actions';

const menuOnEpic = (actions$) =>
    actions$
        .ofType('MENU_ON')
        .mergeMapTo(
            Observable.of(moveMenuOnScreen).concat(
                Observable.concat(Observable.of(opacityOne), Observable.of(menuState(true))).delay(
                    10
                )
            )
        );

const menuOffEpic = (actions$) =>
    actions$
        .ofType('MENU_OFF')
        .mergeMapTo(
            Observable.of(opacityZero).concat(
                Observable.concat(
                    Observable.of(moveMenuOffScreen),
                    Observable.of(menuState(false))
                ).delay(600)
            )
        );

const menuEpic = combineEpics(menuOnEpic, menuOffEpic);

export default menuEpic;
