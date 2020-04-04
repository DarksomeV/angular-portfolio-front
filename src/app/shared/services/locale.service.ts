import {Inject, Injectable, LOCALE_ID} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocaleService {
  private locale: string;
  constructor(@Inject(LOCALE_ID) protected localeId: string) {
    this.locale = localeId;
  }

  public get localeValue(): string {
    return this.locale;
  }
}
