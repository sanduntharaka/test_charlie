import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { OdooEntityManager } from '../../shared/services/odoo-entity-manager.service';
import { ProjectTask } from '../../models/project-task.model';
import { OdoorpcService } from '../../shared/services/odoorpc.service';
import { firstValueFrom } from 'rxjs';
import { CommonModule, NgFor } from '@angular/common';
import { ProjectTaskType } from '../../models/project-task.type.model';
import { FormsModule } from '@angular/forms';
import { Partner } from '../../models/partner';

@Component({
  selector: 'app-task-detail',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './task-detail.component.html',
  styleUrl: './task-detail.component.scss'
})
export class TaskDetailComponent implements OnInit {

  task: ProjectTask
  tasks: ProjectTask[]
  id: any
  complete = false
  taskStages: ProjectTaskType[]
  taskTypeMap = {}
  completedStages: ProjectTaskType[]

  constructor(private route: ActivatedRoute, private odooEm: OdooEntityManager, private odooRpc: OdoorpcService, private router: Router) {}


  ngOnInit() {
    this.route.params.subscribe(async params => {
      if (!params['id'])
        this.router.navigate['/task-list']

      this.id = parseInt(params['id'])
      this.load()
    })
      
  }

  async load() {
    let info = await this.odooRpc.getSessionInfo()
    let userId = info.result.user_id
    
    let t = await firstValueFrom(this.odooEm.search<ProjectTask>(new ProjectTask, [
      ["id", "=", this.id]
    ]))
    if (t.length == 0)
      alert('intervento non trovato')
    
    this.task = t[0]
    await firstValueFrom(this.odooEm.resolveSingle(new Partner(), this.task.partner_id));

    this.taskStages = await firstValueFrom(this.odooEm.search<ProjectTaskType>(new ProjectTaskType, [
      ["user_id", "=", false]
    ]))

    this.completedStages = await firstValueFrom(this.odooEm.search<ProjectTaskType>(new ProjectTaskType, [
      ["user_id", "=", false],
      ["fold", "=", true]
    ]))

    this.taskStages.forEach(taskStage => {
      this.taskTypeMap[taskStage.id] = taskStage.fold
    })

    this.tasks = await firstValueFrom(this.odooEm.search<ProjectTask>(new ProjectTask, [
      ["parent_id", "=", this.id]
    ]))


  }
  
  onComplete() {
    this.router.navigate(['complete'], { relativeTo: this.route })
  }

  async moveTo($event, task: ProjectTask) {
      await this.odooEm.update<ProjectTask>(task, {
        'stage_id': task.stage_id.id
      })
  }

  compareStage(t0 : ProjectTaskType, t1: ProjectTaskType) {
    
    if (!t0 || !t1) {
      return false
    }

    return t0.id == t1.id
  }

  isComplete(task: ProjectTask) {
    console.log(task.name)
    console.log(this.taskTypeMap[task.stage_id.id])
    return this.taskTypeMap[task.stage_id.id]
  }
  

}
