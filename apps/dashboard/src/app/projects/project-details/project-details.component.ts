import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Project} from "@angular-core-workshop/core-data";

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent {
  currentProject: Project;
  originalTitle;
  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();

  @Input() set project(value) {
    if (value) this.originalTitle = value.title;
    this.currentProject = Object.assign({}, value);
    // this.currentProject = {...value};
  }

  constructor() {
  }

}
