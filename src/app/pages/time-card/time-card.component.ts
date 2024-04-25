import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { OdoorpcService } from '../../shared/services/odoorpc.service';
import { OdooEntityManager } from '../../shared/services/odoo-entity-manager.service';

@Component({
  selector: 'app-time-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './time-card.component.html',
  styleUrl: './time-card.component.scss'
})
export class TimeCardComponent implements OnInit{

  display_name = ""

  constructor(private odooRpc: OdoorpcService, odooEm: OdooEntityManager) {}

  async ngOnInit(): Promise<void> {
   let info = await this.odooRpc.getSessionInfo()
   this.display_name = info.result.name
  }

}
