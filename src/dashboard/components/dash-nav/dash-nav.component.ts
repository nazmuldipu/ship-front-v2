import { Component, OnInit } from '@angular/core';
import { dashNavTree } from 'src/data/dash-nav-tree';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'dash-nav',
  templateUrl: './dash-nav.component.html',
  styleUrls: ['./dash-nav.component.scss'],
})
export class DashNavComponent implements OnInit {
  username = 'user';
  show = false;
  navTree = dashNavTree;

  constructor(public auth: AuthService) {}

  ngOnInit(): void {}

  hasAuthority(authority: string[]): boolean {
    if (!authority || authority == null || authority.length == 0) return true;
    return this.auth.hasAuthorities(authority);
  }

  canReserve(): boolean {
    return this.auth.getUser().canReserve;
  }

  logout() {
    this.auth.clear();
  }

  toggleCollapse() {
    this.show = !this.show;
  }
}
