import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {works} from '../../data';

@Component({
  selector: 'app-project-modal',
  templateUrl: './project-modal.component.html',
  styleUrls: ['./project-modal.component.scss']
})
export class ProjectModalComponent implements OnInit, OnDestroy {
  allWorks = works;
  currentWork;

  googleExperiments;
  constructor(public dialogRef: MatDialogRef<ProjectModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    this.currentWork = this.allWorks.find(work => work.id === data.id);
  }

  ngOnInit() {
    this.googleExperiments = window['google_optimise'].get();
    console.log(this.googleExperiments)
  }

  ngOnDestroy(): void {
    console.log('destroyed');
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
