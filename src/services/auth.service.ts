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
  flag = false;

  constructor(
    private datasource: RestDataService,
    private cookie: CookieService,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) {}

  // Get access token by username and password
  authenticate(username: string, password: string): Observable<any> {
    let returnUrl =
      this.activeRoute.snapshot.queryParamMap.get('returnUrl') || '/dashboard';
    localStorage.setItem('returnUrl', returnUrl);

    return this.datasource.obtainAccessToken(username, password);
  }

  isAuthenticated(): boolean {
    const access_token = this.cookie.get('access_token');
    if (access_token) return true;

    const refresh_token = this.cookie.get('refresh_token');
    if (refresh_token && !this.flag) {
      this.getAccessTokenByRefreshToken(refresh_token);
      return false;
    }

    return !!access_token;
  }

  hasAuthorities(roles: string[]): boolean {
    const userRoles: string[] = JSON.parse(this.cookie.get('authorities'));
    if (!userRoles) return false;
    
    for (let ro of roles) {
      for (let ur of userRoles) {
        if (ur === ro) {
          return true;
        }
      }
    }
    return false;
  }

  getUser() {
    return JSON.parse(this.cookie.get('user'));
  }

  async getAccessTokenByRefreshToken(refresh_token) {
    try {
      this.flag = true;
      const resp = await this.datasource
        .obtainAccessTokenByRefreshToken(refresh_token)
        .toPromise();

      //Save access_token only
      const exDate = new Date();
      exDate.setTime(exDate.getTime() + resp['expires_in'] * 1000);
      this.cookie.put('access_token', resp['access_token'], {
        expires: exDate,
      });

      this.flag = false;
    } catch ({ error }) {
      console.log(error);
    }
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

    const uAuth = [];
    data.authorities.forEach((element) => {
      uAuth.push(element.authority);
    });

    const exDate = new Date();
    exDate.setTime(exDate.getTime() + data.expires_in * 1000);
    this.cookie.put('access_token', data.access_token, { expires: exDate });
    exDate.setTime(exDate.getTime() + 14 * 24 * 60 * 60 * 1000); // set refresh token for 14 day
    this.cookie.put('refresh_token', data.refresh_token, { expires: exDate });
    this.cookie.putObject('user', user, { expires: exDate });
    this.cookie.putObject('authorities', uAuth, { expires: exDate });

    let returnUrl = localStorage.getItem('returnUrl');
    this.router.navigateByUrl(returnUrl);
  }

  //Clear all cookies and local storage
  clear() {
    this.cookie.removeAll();
    localStorage.clear();
    this.router.navigateByUrl('/login');
  }
}
