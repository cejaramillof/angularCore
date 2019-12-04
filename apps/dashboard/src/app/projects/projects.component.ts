import {Component, OnInit} from '@angular/core';
import {Project, ProjectsService} from "@angular-core-workshop/core-data";
import {Observable} from "rxjs";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  primaryColor = 'red';
  hello: string = 'World';
  projects: Project[];
  projects$: Observable<Project[]>;
  selectedProject: Project;

  // projectsService;

  constructor(private projectsService: ProjectsService) {
    // this.projectsService = _ProjectsService; in es6 without typescript
  }

  ngOnInit() {
    this.getProjects();
  }

  getProjects() {
    this.projectsService.all()
      .subscribe((result: Project[]) => this.projects = result);
    this.projects$ = this.projectsService.all()
  }

  selectProject(project: Project, $event?): void {
    this.selectedProject = project;
    console.log($event, project);
  }

  cancel() {
    this.selectProject(null);
  }
}
