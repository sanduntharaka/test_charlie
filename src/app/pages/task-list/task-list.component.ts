import { Component, OnInit } from '@angular/core';
import { OdoorpcService } from '../../shared/services/odoorpc.service';
import { OdooEntityManager } from '../../shared/services/odoo-entity-manager.service';
import { Router, RouterLink } from '@angular/router';
import { ProjectTask } from '../../models/project-task.model';
import { firstValueFrom } from 'rxjs';
import { CommonModule, NgFor } from '@angular/common';
import { ProjectTaskType } from '../../models/project-task.type.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [NgFor, RouterLink, FormsModule, CommonModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss'
})
export class TaskListComponent implements OnInit {

  tasks: ProjectTask[];
  taskStages: ProjectTaskType[]
  selectedPersonalStage: string = "Oggi"
  userId: number

  constructor(private odooRpc: OdoorpcService, private odooEm: OdooEntityManager, private router: Router) {}

  async ngOnInit() {

    let info = await this.odooRpc.getSessionInfo()
    this.userId = info.result.user_id

    this.taskStages = await firstValueFrom(this.odooEm.search<ProjectTaskType>(new ProjectTaskType, [
      ["user_id", "=", 299]
    ]))

    await this.load()

  }

  async load() {
    this.tasks = await firstValueFrom(this.odooEm.search<ProjectTask>(new ProjectTask, [
      ["user_ids", "in", this.userId],
      ["parent_id", "=", false],
      ["personal_stage_type_ids", "ilike", this.selectedPersonalStage]
    ]))
  }

  async onChangePersonalStage(stage: ProjectTaskType) {
    this.selectedPersonalStage = stage.name
    await this.load()
  }

  

}