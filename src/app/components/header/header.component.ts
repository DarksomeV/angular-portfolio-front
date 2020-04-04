import {Component, OnInit} from '@angular/core';
import {LocaleService} from '../../shared/services/locale.service';
import {availableLanguages} from '../../data';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  setLanguages;
  constructor(private localeService: LocaleService) {
    this.onSetLanguage(localeService.localeValue);
  }

  ngOnInit() {
    console.log(this.setLanguages);
  }

  onSetLanguage(selectedLang) {
    this.setLanguages = {
      current: selectedLang,
      languages: availableLanguages.filter(value => value !== selectedLang)
    };
  }

}
