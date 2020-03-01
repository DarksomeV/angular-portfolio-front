import { Component, HostBinding, OnInit } from '@angular/core';
import {education, expierence, languagesForResume, skills} from "../../data";
import {EducationItem} from "../../data-interfaces";

@Component({
  selector: 'app-resume-page',
  templateUrl: './resume-page.component.html',
  styleUrls: ['./resume-page.component.scss']
})
export class ResumePageComponent implements OnInit {
  @HostBinding('class') class = 'card-inner';
  knownLanguages = [];
  skills;
  education: EducationItem[] = [];
  expierence = [];
  constructor() {
    this.knownLanguages = languagesForResume;
    this.skills = skills;
    this.expierence = expierence.sort((a,b) => b.dates.end.year - a.dates.end.year);
    this.education = education.sort((a,b) => b.dates.end - a.dates.end);
  }

  ngOnInit() {
  }

}
