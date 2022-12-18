import { Component } from '@angular/core';
import { Project } from './Models/project';
import { ProjectService } from './services/project.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Timely.UI';
  projects: Project[] = [];
  projectToEdit?: Project;
  time?: Date;

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.projectService
      .getProjects()
      .subscribe((result: Project[]) => {
        this.projects = result
        console.log(result);
      });
  }
  updateProjectList(projects: Project[]) {
    this.projects = projects;
  }

  initNewProject() {
    this.projectToEdit = new Project();
    this.time = new Date();
  }
  startTimer(){
    this.time = new Date();
    console.log(this.time);
    console.log(this.time.getHours());
    
  }
  editProject(project: Project) {
    this.projectToEdit = project;
  }
}
