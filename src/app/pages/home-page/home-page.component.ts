import {Component, HostBinding, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  @HostBinding('class') class = 'card-inner';
  @Input() noScroll = false;
  constructor() { }

  ngOnInit() {
  }

}
