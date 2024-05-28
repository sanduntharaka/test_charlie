import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { OdooEntityManager } from '../../shared/services/odoo-entity-manager.service';
import { ProjectTask } from '../../models/project-task.model';
import { OdoorpcService } from '../../shared/services/odoorpc.service';
import { firstValueFrom } from 'rxjs';
import { CommonModule, NgFor } from '@angular/common';
import { ProjectTaskType } from '../../models/project-task.type.model';

@Component({
  selector: 'app-task-detail',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './task-detail.component.html',
  styleUrl: './task-detail.component.scss'
})
export class TaskDetailComponent implements OnInit {

  task: ProjectTask
  tasks: ProjectTask[]
  id: any
  complete = false
  taskStages: ProjectTaskType[]

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

    this.taskStages = await firstValueFrom(this.odooEm.search<ProjectTaskType>(new ProjectTaskType, [
      ["user_id", "=", false]
    ]))

    this.tasks = await firstValueFrom(this.odooEm.search<ProjectTask>(new ProjectTask, [
      ["parent_id", "=", this.id]
    ]))


  }
  
  onComplete() {
    this.router.navigate(['complete'], { relativeTo: this.route })
  }

}
