import { HttpClient, HttpParams, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie';
import { error } from 'protractor';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RestDataService {
  baseUrl: string;

  constructor(
    private http: HttpClient,
    private cookie: CookieService,
    private router: Router
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
    return this.http.post(url, null);
  }

  obtainAccessTokenByRefreshToken(refresh_token) {
    const params = new URLSearchParams();
    params.append('grant_type', 'refresh_token');
    params.append('refresh_token', refresh_token);
    params.append('client_id', environment.client_id);
    params.append('client_secret', environment.client_secret);

    const url = this.baseUrl + 'oauth/token?' + params.toString();

    return this.http.get(url);
  }

  public sendRequest(
    method: string,
    url: string,
    body?,
    auth: boolean = false,
    params?: HttpParams
  ): Observable<any> {
    if (auth) {
      const acc = this.cookie.get('access_token');
      params.set('access_token', acc);
    }

    const req = new HttpRequest(method, this.baseUrl + url, body, {
      params,
      responseType: 'json',
    });

    return this.http.request(req);
  }

  private handleError(err) {}
}
