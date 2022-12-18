import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Project } from 'src/app/Models/project';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
})
export class ProjectComponent {
  @Input() project?: Project;
  @Output() projectsUpdated = new EventEmitter<Project[]>();
  @Output() stopTimerDate = new EventEmitter<Project[]>();
  projects: any;
  stopDate?: Date;

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {}

  updateProject(project: Project) {
    this.projectService.updateProject(project).subscribe(
      (projects: Project[]) => this.projectsUpdated.emit(projects)
    );
  }

  deleteProject(project: Project) {
    this.projectService.deleteProject(project).subscribe(
      (projects: Project[]) => this.projectsUpdated.emit(projects)
    );
  }

  createProject(project: Project) {
    this.projectService.createProject(project).subscribe(
      (projects: Project[]) => this.projectsUpdated.emit(projects)
    );
  }

}
