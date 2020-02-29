import {Component, HostBinding, OnInit} from '@angular/core';

@Component({
  selector: 'app-works-page',
  templateUrl: './works-page.component.html',
  styleUrls: ['./works-page.component.scss']
})
export class WorksPageComponent implements OnInit {
  @HostBinding('class') class = 'card-inner';
  constructor() { }

  ngOnInit() {
  }

}
