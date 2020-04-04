import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slider } from './route-animations';
import { BreakpointService } from './shared/services/breakpoint.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [ slider ]
})
export class AppComponent implements OnInit {
  title = 'portfolio';
  device = 'desktop';
  constructor(public breakpointService: BreakpointService) {}

  ngOnInit() {
    this.breakpointService.size$.subscribe(device => {
      this.device = device;
    });
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
