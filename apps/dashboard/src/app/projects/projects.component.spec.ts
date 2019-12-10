import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ProjectsComponent} from './projects.component';
import {ProjectsListComponent} from "./projects-list/projects-list.component";
import {ProjectDetailsComponent} from "./project-details/project-details.component";
import {MaterialModule} from "@angular-core-workshop/material";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {DebugElement} from "@angular/core";
import {Project, ProjectsService} from "@angular-core-workshop/core-data";

describe('ProjectsComponent', () => {
  // Create my local test members
  let component: ProjectsComponent;
  let fixture: ComponentFixture<ProjectsComponent>;
  let de: DebugElement;
  let projectsService: ProjectsService;

  const mockProjectsService = {
    // MOCK YO SELF OUT!
  };

  const emptyProject: Project = {
    id: null,
    title: '',
    details: '',
    percentComplete: 0,
    approved: false
  };

  // Instantiate test bed
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ProjectsComponent,
        ProjectsListComponent,
        ProjectDetailsComponent
      ],
      providers: [
        {provide: ProjectsService, useValue: mockProjectsService}
      ],
      imports: [
        MaterialModule,
        FormsModule,
        HttpClientModule,
        BrowserAnimationsModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    // Instantiate the fixture
    fixture = TestBed.createComponent(ProjectsComponent);
    // Get THE component instance
    component = fixture.componentInstance;
    // Get the debug element aka the element the component lives on
    de = fixture.debugElement;
    // Get service instance
    projectsService = de.injector.get(ProjectsService);
    // Manually force change detection
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should select a project', () => {
    component.selectProject(emptyProject)
    expect(component.selectedProject).toBe(emptyProject);
  });

});
