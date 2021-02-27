import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/shared/models/user.model';
import { RestDataService } from './rest-data.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  url = 'api/v1/users';
  adminUrl = 'api/v1/admin/users';
  serviceAdminUrl = 'api/v1/serviceAdmin/users';

  constructor(private dataSource: RestDataService) {}

  register(user: User): Observable<User> {
    const param = new HttpParams()
      .set('name', user.name)
      .set('email', user.email)
      .set('phoneNumber', user.phoneNumber)
      .set('password', user.password);
      
    return this.dataSource.sendRequest('POST', 'register', null, false, param);
  }
}
