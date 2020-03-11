import { Injectable } from '@angular/core';
import {fromEvent, Observable} from "rxjs";
import {distinctUntilChanged, map, shareReplay, startWith} from "rxjs/operators";

const QUERY: Map<string, string> = new Map([
    ['desktop', '(min-width: 1200px)'],
    ['mobile', '(min-width: 0px)'],
]);

@Injectable({
    providedIn: 'root',
})
export class BreakpointService {
    private _size$: Observable<string>;
    public device = 'desktop';
    constructor() {
        this._size$ = fromEvent(window, 'resize')
            .pipe(
                startWith(this._getScreenSize()),
                map((event: Event) => {
                    return this._getScreenSize();
                }),
                distinctUntilChanged(),
                shareReplay(1)
            )
    }

    public get size$(): Observable<string> {
        return this._size$;
    }

    private _getScreenSize(): string {
        const [[newSize = 'never']] = Array.from(QUERY.entries())
            .filter(([size, mediaQuery]) => window.matchMedia(mediaQuery).matches);
        if (newSize !== Array.from(QUERY.entries())[0][0]) {
            this.device = 'mobile';
        } else {
            this.device = 'desktop';
        }
        return newSize;
    }
}
