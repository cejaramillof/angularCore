import {Injectable} from '@angular/core';
import {Project} from "./project";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

const BASE_URL = 'http://localhost:3000/';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  /*
   private projects: Project[] = [
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
  */
  model = 'projects';

  // private only works in compile time, but in runtime, there's really no concept in essentially private or public.
  constructor(private httpClient: HttpClient) {
  }

  getUrl(): string {
    return `${BASE_URL}${this.model}`;
  }

  private getUrlForId(id: number): string {
    return `${this.getUrl()}/${id}`;
  }

  all(): Observable<Project[]> {
    // return this.projects;
    return this.httpClient.get<Project[]>(this.getUrl());
  }

  create(project): Observable<Project> {
    return this.httpClient.post<Project>(this.getUrl(), project);
  }

  update(project): Observable<Project> {
    return this.httpClient.patch<Project>(this.getUrlForId(project.id), project);
  }

  delete(projectId): Observable<Project> {
    return this.httpClient.delete<Project>(this.getUrlForId(projectId));
  }

}
