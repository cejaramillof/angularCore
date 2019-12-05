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
    this.resetProject();
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
    this.resetProject();
  }

  resetProject() {
    const emptyProject: Project = {
      id: null,
      title: '',
      details: '',
      percentComplete: 0,
      approved: false
    }
    this.selectProject(emptyProject);
  }

  saveProject(project: Project) {
    if (project.id) {
      this.updateProject(project);
    } else {
      this.createProject(project);
    }
  }

  createProject(project: Project) {
    this.projectsService.create(project)
      .subscribe(result => {
        this.getProjects();
        this.resetProject();
      });
  }

  updateProject(project: Project) {
    this.projectsService.update(project)
      .subscribe(result => {
        this.getProjects();
        this.resetProject();
      });
  }

  deleteProject(project) {
    this.projectsService.delete(project.id)
      .subscribe(result => this.getProjects());
  }

}
