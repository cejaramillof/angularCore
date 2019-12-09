import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Project} from "@angular-core-workshop/core-data";

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.css']
})
export class ProjectsListComponent implements OnInit {
  @Input() projects: Project[];
  @Input() readonly: boolean = false;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

}
