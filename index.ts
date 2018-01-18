import { marbleLogTo } from './console-log';

// RxJS Imports
import { Scheduler } from 'rxjs/Rx';
import { Observable } from "rxjs/Observable";

import { defer }    from 'rxjs/observable/defer';
import { interval } from 'rxjs/observable/interval';
import { timer }    from 'rxjs/observable/timer';
import { from } from 'rxjs/observable/from';
import { of }       from 'rxjs/observable/of';

import {
  switchMap, map, concat,
  startWith, filter, takeWhile, bufferCount,
  tap, concatMap, delay, debounceTime, distinctUntilChanged
} from 'rxjs/operators';

// ************************************
// Demo Code
// ************************************


const observer = marbleLogTo("root");
const myObs$ = of(1, 2, 2, 3);

myObs$.subscribe( observer );    // Original stream
myObs$
  .pipe(
    distinctUntilChanged()                           // Using debounceTime() Operator
  )
  .subscribe( observer );
