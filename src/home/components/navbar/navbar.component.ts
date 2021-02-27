import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  show = false;
  appUser$;

  constructor(public auth: AuthService, private router: Router) {}

  ngOnInit(): void {}

  toggleCollapse() {
    this.show = !this.show;
  }

  logout() {
    this.auth.clear();
  }
}
