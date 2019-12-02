import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  hello: string = 'World';
  projects = [
    {
      id: '1',
      title: 'Project One',
      details: 'This is a sample project',
      percentComplete: 20,
      approved: false,
    },
    {
      id: '2',
      title: 'Project Two',
      details: 'This is a sample project',
      percentComplete: 40,
      approved: false,
    },
    {
      id: '3',
      title: 'Project Three',
      details: 'This is a sample project',
      percentComplete: 100,
      approved: true,
    }
  ];
  selectedProject: { approved: boolean; details: string; id: string; percentComplete: number; title: string };

  constructor() {
  }

  ngOnInit() {
  }

  selectProject(project: { approved: boolean; details: string; id: string; percentComplete: number; title: string }, $event?): void {
    this.selectedProject = project;
    console.log($event, project);
  }

  cancel() {
    this.selectProject(null);
  }
}
