import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/services/user.service';
import { User } from 'src/shared/models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  errorMessage = '';
  loading = false;

  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  async onCreate(event: User) {
    console.log(event);
    try {
      const resp = await this.userService.register(event).toPromise();
      console.log(resp);
    } catch ({ error }) {
      console.log(error);
      this.errorMessage = error.error_description;
    }
  }
}
