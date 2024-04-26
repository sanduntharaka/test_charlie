import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { OdoorpcService } from '../../shared/services/odoorpc.service';
import { OdooEntityManager } from '../../shared/services/odoo-entity-manager.service';
import { HrEmployee } from '../../models/hr-employee.model';
import { firstValueFrom } from 'rxjs';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-time-card',
  standalone: true,
  imports: [RouterLink, NgIf],
  templateUrl: './time-card.component.html',
  styleUrl: './time-card.component.scss'
})
export class TimeCardComponent implements OnInit{


  display_name = ""
  employee?: HrEmployee
  userId = 0
  checkedIn = false

  constructor(private odooRpc: OdoorpcService, private odooEm: OdooEntityManager, private router: Router) {}

  async ngOnInit(): Promise<void> {

    let info = await this.odooRpc.getSessionInfo()
    this.display_name = info.result.display_name
    this.userId = info.result.user_id

    this.load()

  }

  async load() {

    let employees = await firstValueFrom(this.odooEm.search<HrEmployee>(new HrEmployee, [
      ['user_id', '=', this.userId]
    ]
    ))
    if (employees.length != 1) {
      this.router.navigate(['/login'])
      return
    }

    this.employee = employees[0]

    switch(this.employee.attendance_state) {
      case 'checked_in':
        this.checkedIn = true
        break
      case 'checked_out':
        this.checkedIn = false
        break
    }

  }

  async onCheckOut() {
    await this.odooEm.call2(this.employee.ODOO_MODEL, "attendance_manual", [[this.employee.id,], 'hr_employee.hr_attendance_action_my_attendances'])
    this.load()
  }

  async onCheckIn() {
    await this.odooEm.call2(this.employee.ODOO_MODEL, "attendance_manual", [[this.employee.id,], 'hr_employee.hr_attendance_action_my_attendances'])
    this.load()
  }

}
