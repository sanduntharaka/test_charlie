import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OdooEntityManager } from '../../shared/services/odoo-entity-manager.service';
import { OdoorpcService } from '../../shared/services/odoorpc.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  user?: string
  password?: string
  loading = false

  constructor(private odooRPC: OdoorpcService, private router: Router) {}

  onLogin() {
    this.loading = true
    if (this.user && this.password) {
      this.odooRPC.login({db: 'amanda', login: this.user, password: this.password})
      if (this.odooRPC.logged) {
        this.router.navigate(['time-card'])
      }
    }
    

  }

}
