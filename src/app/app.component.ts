import { Component } from '@angular/core';

import { ProjectsService } from './services/projects.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Jose Cadima Portfolio';

  constructor(public projectsService: ProjectsService) { }

  ngOnInit() {
    this.projectsService.getProfessionalProjects();
    this.projectsService.getFunProjects();
  }
}
