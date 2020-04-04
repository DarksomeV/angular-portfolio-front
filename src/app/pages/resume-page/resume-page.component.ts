import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {education, educationRu, expierence, expierenceRu, languagesForResume, languagesForResumeRu, skills} from '../../data';
import {EducationItem} from '../../data-interfaces';
import {LocaleService} from '../../shared/services/locale.service';

@Component({
  selector: 'app-resume-page',
  templateUrl: './resume-page.component.html',
  styleUrls: ['./resume-page.component.scss']
})
export class ResumePageComponent implements OnInit {
  @HostBinding('class') class = 'card-inner';
  @Input() noScroll = false;
  knownLanguages = [];
  skills;
  education: EducationItem[] = [];
  expierence = [];
  constructor(private localeService: LocaleService) {
    if (this.localeService.localeValue === 'ru') {
      this.knownLanguages = languagesForResumeRu;
      this.expierence = expierenceRu.sort((a,b) => b.dates.end.year - a.dates.end.year);
      this.education = educationRu.sort((a,b) => b.dates.end - a.dates.end);
    } else {
      this.knownLanguages = languagesForResume;
      this.expierence = expierence.sort((a,b) => b.dates.end.year - a.dates.end.year);
      this.education = education.sort((a,b) => b.dates.end - a.dates.end);
    }
    this.skills = skills;
  }

  ngOnInit() {
  }

}
