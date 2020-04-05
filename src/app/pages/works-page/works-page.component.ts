import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import {ProjectModalComponent} from '../../components/project-modal/project-modal.component';

@Component({
  selector: 'app-works-page',
  templateUrl: './works-page.component.html',
  styleUrls: ['./works-page.component.scss']
})
export class WorksPageComponent implements OnInit {
  @HostBinding('class') class = 'card-inner';
  @Input() noScroll = false;
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog(id): void {
    const dialogRef = this.dialog.open(ProjectModalComponent, {
      width: '1000px',
      data: {id}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
