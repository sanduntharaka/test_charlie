import { Component, OnInit } from '@angular/core';
import { OdoorpcService } from '../../shared/services/odoorpc.service';
import { OdooEntityManager } from '../../shared/services/odoo-entity-manager.service';
import { Router, RouterLink } from '@angular/router';
import { ProjectTask } from '../../models/project-task.model';
import { firstValueFrom } from 'rxjs';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss'
})
export class TaskListComponent implements OnInit {

  tasks: ProjectTask[];

  constructor(private odooRpc: OdoorpcService, private odooEm: OdooEntityManager, private router: Router) {}

  async ngOnInit() {

    let info = await this.odooRpc.getSessionInfo()
    let userId = info.result.user_id
    this.tasks = await firstValueFrom(this.odooEm.search<ProjectTask>(new ProjectTask, [
      ["user_ids", "in", userId],
      ["parent_id", "=", false]
    ]))

  }



  

}