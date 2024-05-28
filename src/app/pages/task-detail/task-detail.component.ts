import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { OdooEntityManager } from '../../shared/services/odoo-entity-manager.service';
import { ProjectTask } from '../../models/project-task.model';
import { OdoorpcService } from '../../shared/services/odoorpc.service';
import { firstValueFrom } from 'rxjs';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-task-detail',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './task-detail.component.html',
  styleUrl: './task-detail.component.scss'
})
export class TaskDetailComponent implements OnInit {

  tasks: ProjectTask[]
  id: any

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
    this.tasks = await firstValueFrom(this.odooEm.search<ProjectTask>(new ProjectTask, [
      ["parent_id", "=", this.id]
    ]))
  }
  

}
