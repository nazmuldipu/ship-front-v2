import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RestDataService {
  baseUrl: string;

  constructor(
    private router: Router,
    private http: HttpClient,
    private Cookie: CookieService
  ) {
    this.baseUrl = `${environment.PROTOCOL}://${environment.SERVER}${environment.PORT}/`;
  }

  obtainAccessToken(user: string, pass: string): Observable<any> {
    const params = new URLSearchParams();
    params.append('grant_type', 'password');
    params.append('client_id', environment.client_id);
    params.append('client_secret', environment.client_secret);
    params.append('username', user);
    params.append('password', pass);

    const url = this.baseUrl + 'oauth/token?' + params.toString();
    return this.http.post(url, null).pipe(
      map((ref) => {
        return ref;
      })
    );
  }
}
