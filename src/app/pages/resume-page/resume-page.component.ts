import {Component, HostBinding, OnInit} from '@angular/core';

@Component({
  selector: 'app-resume-page',
  templateUrl: './resume-page.component.html',
  styleUrls: ['./resume-page.component.scss']
})
export class ResumePageComponent implements OnInit {
  @HostBinding('class') class = 'card-inner';
  constructor() { }

  ngOnInit() {
  }

}
