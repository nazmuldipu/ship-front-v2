import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  errorMessage = '';
  loading = false;
  
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(event) {
    console.log(event);
    // this.message = null;
    // this.userService.userRegistration(event).subscribe(
    //   data => {
    //     this.router.navigateByUrl('/login');
    //   },
    //   error => {
    //     this.message = 'Registration Failed' + error.status;
    //     console.log('Registration Failed' + error.status);
    //   }
    // );
  }

}
