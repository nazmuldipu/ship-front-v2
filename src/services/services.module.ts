import { NgModule } from '@angular/core';

import { AuthService } from './auth.service';
import { RestDataService } from './rest-data.service';

@NgModule({
  providers: [AuthService, RestDataService],
})
export class ServicesModule {}
