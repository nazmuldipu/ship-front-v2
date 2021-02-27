import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  errorMessage = '';
  loading = false;

  constructor(private auth: AuthService) {}

  ngOnInit(): void {}

  async onCreate(event) {
    try {
      this.errorMessage = '';
      this.loading = true;
      const resp = await this.auth
        .authenticate(event.username, event.password)
        .toPromise();

        this.auth.saveToken(resp);
    } catch (ex) {
      const { error } = ex;
      this.errorMessage = error.error_description;
    }
    this.loading = false;
  }
}
