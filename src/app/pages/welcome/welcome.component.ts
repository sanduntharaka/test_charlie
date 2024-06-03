import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { OdoorpcService } from '../../shared/services/odoorpc.service';
import { OdooEntityManager } from '../../shared/services/odoo-entity-manager.service';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss'
})
export class WelcomeComponent {

  constructor(private odooRpc: OdoorpcService, private odooEm: OdooEntityManager, private router: Router) {}

  async onLogout() {
    await this.odooRpc.logout()
    // this.router.navigate(['login'])
  }

}
