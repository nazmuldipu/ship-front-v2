import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie';
import { Observable } from 'rxjs';
import { User } from 'src/shared/models/user.model';
import { RestDataService } from './rest-data.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(
    private datasource: RestDataService,
    private cookie: CookieService,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) {}

  authenticate(username: string, password: string): Observable<any> {
    let returnUrl =
      this.activeRoute.snapshot.queryParamMap.get('returnUrl') || '/'; //TODO: change url to '/dashboard'
    localStorage.setItem('returnUrl', returnUrl);

    return this.datasource.obtainAccessToken(username, password);
  }

  // save access_token and refresh_token along with user and authorities info from server
  saveToken(data) {
    const user = {
      id: data.id,
      name: data.name,
      username: data.username,
      phoneNumber: data.phone,
      canReserve: data.canReserve,
      canCancelReservation: data.canCancelReservation,
      canCancelBooking: data.canCancelBooking,
    } as User;

    const exDate = new Date();
    exDate.setTime(exDate.getTime() + data.expires_in * 1000);
    this.cookie.put('access_token', data.access_token, { expires: exDate });
    exDate.setTime(exDate.getTime() + 14 * 24 * 60 * 60 * 1000); // set refresh token for 14 day
    this.cookie.put('refresh_token', data.refresh_token, { expires: exDate });
    this.cookie.putObject('user', user, { expires: exDate });
    this.cookie.putObject('authorities', data.authorities, { expires: exDate });

    let returnUrl = localStorage.getItem('returnUrl');
    this.router.navigateByUrl(returnUrl);
  }
}
